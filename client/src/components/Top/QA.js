import React from "react";
import Questions from "./Questions";
import Answer from "./Answer";
import { bestMatches } from "../../selectors/QA";
import QuestionInput from "./QuestionInput";

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: "",
      textInput: "",
      questionArr: [],
      qaPlaceholder: "Have a question? Ask it here.",
      hasBeenChanged: false,
      hasBeenAsked: false
    };
    this.onTextInputChange = this.onTextInputChange.bind(this);
    this.getAnswer = this.getAnswer.bind(this);
  }

  onTextInputChange(e) {
    if (e.target.value.match(/[\n]/g)) {
      return this.getAnswer();
    }
    if (!this.state.hasBeenChanged) {
      this.setState({
        hasBeenChanged: true,
        qaPlaceholder: "Do you have a question for me?"
      });
    }
    const textInput = e.target.value;
    if (textInput.length === 0) {
      return this.setState({ questionArr: [], textInput });
    }

    const questionArr = bestMatches(textInput, this.props.qA);
    return this.setState({
      currentText: "",
      questionArr,
      textInput
    });
  }

  getAnswer(question = null) {
    const answerObj =
      question !== null
        ? this.props.qA.filter(
            val =>
              val.question === question || val.question === this.state.textInput
          )[0]
        : this.state.questionArr.length > 0 && this.state.questionArr[0];
    const answer =
      (answerObj && answerObj.answer) ||
      "No matching questions, please rephrase or ask another question";
    const textInput = (answerObj && answerObj.question) || this.state.textInput;
    this.setState({
      currentText: answer,
      questionArr: [],
      textInput,
      hasBeenAsked: true,
      qaPlaceholder: "Have a different question?"
    });
  }

  render() {
    return !this.props.show ? null : (
      <div className="paper-qa">
        <label className="paper-text paper-text--center" htmlFor="knowme">
          Get to know me:
        </label>
        <QuestionInput
          value={this.state.textInput}
          placeholder={this.state.qaPlaceholder}
          chromeClass={this.chromeClass}
          onChangeProp={this.onTextInputChange}
        />
        <button onClick={this.getAnswer} className={"paper-ask"}>
          Ask
        </button>
        <div className={`paper-text paper-text-ql ${this.chromeClass}`}>
          {this.state.currentText ? (
            <Answer
              chromeClass={this.chromeClass}
              currentText={this.state.currentText}
            />
          ) : (
            <Questions
              questionArr={this.state.questionArr}
              textInput={this.state.textInput}
              getAnswer={this.getAnswer}
            />
          )}
        </div>
      </div>
    );
  }
}

QA.defaultProps = {
  qA: [],
  show: false
};

export default QA;
