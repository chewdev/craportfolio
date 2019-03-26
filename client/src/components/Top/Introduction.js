import React from "react";
import Typist from "react-typist";
import QA from "./QA";
import PaperBoxLayout from "./PaperBoxLayout";

class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.isIE = /*@cc_on!@*/ false || !!document.documentMode;
    this.isEdge = !this.isIE && !!window.StyleMedia;
    this.isChrome = !!window.chrome && !!window.chrome.webstore;
    this.msClass = this.isIE || this.isEdge ? " paper-text--ms" : "";
    this.chromeClass = this.isChrome ? " paper-text--chrome" : "";
    this.state = {
      qA: []
    };
  }

  componentDidMount() {
    if (this.state.qA.length === 0) {
      fetch("/questions")
        .then(data => data.json())
        .then(data => {
          this.setState({ qA: data });
        })
        .catch(err => {
          this.setState({
            qA: [
              {
                question: "Why is this the only question available?",
                answer:
                  "I must be having trouble with my memory. Please contact me in the contact section below or refresh the page and try again.",
                search_terms:
                  "why what where how when do you have questions answers who options other more less"
              }
            ]
          });
        });
    }
  }

  render() {
    return (
      <PaperBoxLayout>
        <div className="paper-tape">
          <div className="paper-tape--left" />
          <div className="paper-tape--right" />
        </div>
        <Typist
          avgTypingDelay={30}
          stdTypingDelay={15}
          startDelay={2000}
          cursor={{ show: false }}
        >
          <h1 className="paper-header">
            Chris Ewald <br /> <span>Full-Stack Developer</span>
          </h1>
          <QA qA={this.state.qA} />

          <br />
          <p className={`paper-text ${this.chromeClass}`}>
            Have more questions? Contact me
          </p>
        </Typist>
        <div className="paper-contact-link-div">
          <a href="#contact" className="paper-contact-link-a">
            <i className="fas fa-chevron-down paper-contact-link" />
          </a>
        </div>
      </PaperBoxLayout>
    );
  }
}

export default Introduction;
