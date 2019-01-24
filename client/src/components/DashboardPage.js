import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";
import Footer from "./Footer";
import Threshold from "./Threshold";
import Dirt from "./Dirt";
import Top from "./Top/Top";
import ProjectsSection from "./Projects/ProjectsSection";

const DashboardPage = () => (
  <div>
    <Top />
    <Dirt />
    <AboutMe />
    <Threshold />
    <ProjectsSection />
    <Threshold />
    <Contact />
    <Footer />
  </div>
);

export default DashboardPage;
