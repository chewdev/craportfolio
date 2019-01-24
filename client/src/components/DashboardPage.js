import React from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
import Threshold from "./Threshold";
import Dirt from "./Dirt";
import Top from "./Top";
import ProjectsSection from "./ProjectsSection";

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
