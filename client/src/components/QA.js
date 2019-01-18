import React from "react";
import Typist from "react-typist";
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
          className={`paper-text ${this.chromeClass} paper-text-mtop`}
          style={{
            background: "transparent",
            border: "none",
            fontFamily: "inherit",
            height: "5.6rem",
            width: "13.5rem",
            resize: "none",
            overflow: "hidden"
          }}
          placeholder={this.state.qaPlaceholder}
          onChange={this.onTextInputChange}
          value={this.state.textInput}
        />
        <button
          onClick={this.getAnswer}
          style={{
            marginLeft: "8rem",
            background: "inherit",
            border: "none",
            borderBottom: "1px solid black",
            fontFamily: "inherit",
            color: "inherit",
            fontSize: "1.1rem"
          }}
        >
          Ask
        </button>
        <div className={`paper-text paper-text-ql ${this.chromeClass}`}>
          {this.state.currentText ? (
            <p className={`paper-text-answer ${this.chromeClass}`}>
              {this.state.currentText}
            </p>
          ) : (
            ""
          )}
          {this.state.questionArr.length > 0 ? (
            <ul>
              {this.state.questionArr
                .filter((val, ind) => ind <= 4)
                .map(obj => (
                  <Typist
                    avgTypingDelay={10}
                    stdTypingDelay={10}
                    cursor={{ show: false }}
                    key={obj.question}
                  >
                    <li key={obj.question} className="question-option">
                      <button
                        className="question-option-button"
                        onClick={() => this.getAnswer(obj.question)}
                      >
                        {obj.question}
                      </button>
                      <br />
                    </li>
                  </Typist>
                ))}
            </ul>
          ) : this.state.currentText !== "" ? null : this.state.textInput !==
            "" ? (
            <Typist
              avgTypingDelay={10}
              stdTypingDelay={10}
              cursor={{ show: false }}
            >
              <p>No matching questions</p>
            </Typist>
          ) : null}
        </div>
      </div>
    );
  }
}

export default QA;
