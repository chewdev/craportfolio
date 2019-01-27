import React, { Fragment } from "react";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Footer from "./Footer";
import Threshold from "./Threshold";
import Dirt from "./Dirt";
import Top from "./Top/Top";
import Header from "./Top/Header";
import Introduction from "./Top/Introduction";
import ProjectsSection from "./Projects/ProjectsSection";

const DashboardPage = () => (
  <Fragment>
    <Top>
      <Header />
      <Introduction />
    </Top>
    <Dirt />
    <AboutMe />
    <Threshold />
    <ProjectsSection />
    <Threshold />
    <Contact />
    <Footer />
  </Fragment>
);

export default DashboardPage;
