import React, { Component } from "react";
import skills from "../data/skills";

export default class SkillsTable extends Component {
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
    );
  }
}
