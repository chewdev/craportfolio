import React from "react";
import SkillsTable from "./SkillsTable";
import AboutMePool from "./AboutMePool";

class AboutMe extends React.Component {
  render() {
    return (
      <section className="about-me-layout" id="about-me">
        <AboutMePool />
        <SkillsTable />
      </section>
    );
  }
}
export default AboutMe;
