import React from "react";
import Questions from "./Questions";
import Answer from "./Answer";
import { bestMatches } from "../selectors/QA";

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.qA = [];
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

  componentWillMount() {
    if (this.qA.length < 1 && this.props.qA) {
      this.qA = this.props.qA;
    }
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

    const questionArr = bestMatches(textInput, this.qA);
    return this.setState({
      currentText: "",
      questionArr,
      textInput
    });
  }

  getAnswer(question = null) {
    const answerObj =
      question !== null
        ? this.qA.find(
            val =>
              val.question === question || val.question === this.state.textInput
          )
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
    return (
      <div className="paper-qa">
        <label className="paper-text" htmlFor="knowme">
          Get to know me:
        </label>
        <textarea
          name="knowme"
          id="knowme"
          className={`paper-text ${
            this.chromeClass
          } paper-text-mtop paper-text-area`}
          placeholder={this.state.qaPlaceholder}
          onChange={this.onTextInputChange}
          value={this.state.textInput}
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

export default QA;
