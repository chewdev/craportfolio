import React from "react";
import skills from "../data/skills";

class AboutMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsInd: 0
    };

    this.skillsInterval = null;
  }

  componentDidMount() {
    this.skillsInterval = setInterval(() => {
      this.setState(prevState => {
        if (prevState.skillsInd === skills.length - 1) {
          return { skillsInd: 0 };
        }
        return { skillsInd: prevState.skillsInd + 1 };
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.skillsInterval);
  }

  render() {
    const ipadStyles = {
      background: skills[this.state.skillsInd].color
    };
    return (
      <section className="about-me-layout" id="about-me">
        <div className="about-me-resize-container">
          <div className="about-me-container">
            <h2 className="about-me-header">About Me</h2>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp; A mechanical engineering graduate turned
              web developer. I love technical challenges and learning new and
              exciting technologies. Designing and building is my passion,
              making your life easier is my goal.{" "}
              {/*Building software and systems that make lives easier*/}
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;When I'm not busy studying web
              development, I'm tinkering with Arduino and IoT. Outside of tech,
              I love sports, especially baseball (Let's Go Dodgers!), and
              traveling.
              <br />
            </p>
            <p className="about-me-quote">
              <em>Easy is boring, let's have some fun!</em>
            </p>
          </div>
        </div>
        <div className="about-me__chair-table-container">
          <div className="about-me__chairs-container">
            <div className="about-me__chair-container">
              <div className="about-me__chair" />
            </div>
            <div className="about-me__chair-container">
              <div className="about-me__chair" />
            </div>
          </div>
          <div className="about-me__table-container">
            <h2>Skills</h2>
            <div className="table-container">
              <div className="tablet" style={ipadStyles}>
                {skills[this.state.skillsInd].comp}
              </div>
            </div>
          </div>
          <div className="about-me__chairs-container">
            <div className="about-me__chair-container">
              <div className="about-me__chair--right" />
            </div>
            <div className="about-me__chair-container">
              <div className="about-me__chair--right" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default AboutMe;
