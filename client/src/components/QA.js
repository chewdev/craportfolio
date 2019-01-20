import React from "react";
import Questions from "./Questions";
import Answer from "./Answer";
import { bestMatches } from "../selectors/QA";

class QA extends React.Component {
  constructor(props) {
    super(props);
    this.qA = [];
    this.state = {
      items: [],
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

    const items = bestMatches(textInput, this.qA);
    const questionArr = items;
    return this.setState({
      currentText: "",
      questionArr,
      textInput,
      items
    });
  }

  getAnswer(question) {
    const possibleAnsObj = this.qA.filter(
      val => val.question === question || val.question === this.state.textInput
    );
    const answerObj =
      possibleAnsObj.length === 1
        ? possibleAnsObj
        : this.state.questionArr.length > 0
        ? this.state.questionArr
        : [
            {
              answer:
                "No matching questions, please rephrase or ask another question",
              question: this.state.textInput
            }
          ];
    const answer = answerObj[0].answer;
    this.setState({
      currentText: answer,
      questionArr: [],
      textInput: answerObj[0].question,
      hasBeenAsked: true,
      qaPlaceholder: "Have a different question?"
    });
  }

  render() {
    return (
      <div style={{ height: "22.5rem" }}>
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
