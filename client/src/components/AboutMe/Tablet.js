import React, { Component } from "react";
import skills from "../../data/skills";

export default class Tablet extends Component {
  constructor(props) {
    super(props);
    this.skillsInterval = null;
    this.state = {
      skillsInd: 0
    };
  }

  componentDidMount() {
    this.skillsInterval = setInterval(() => {
      this.setState(({ skillsInd }) => ({
        skillsInd: skillsInd === skills.length - 1 ? 0 : skillsInd + 1
      }));
    }, 1500);
  }

  componentWillUnmount() {
    clearInterval(this.skillsInterval);
  }

  render() {
    return (
      <div className="tablet-container">
        <div
          className="tablet"
          style={{ background: skills[this.state.skillsInd].color }}
        >
          {skills[this.state.skillsInd].comp}
        </div>
      </div>
    );
  }
}
