import React from "react";
import projectData from "../../data/projects";
import ProjectRemote from "./ProjectRemote";
import ProjectScreen from "./ProjectScreen";

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currProjInd: 0,
      projIntervalId: null,
      remoteLightClass: "",
      tvDisplayType: "image"
    };
  }

  startInterval = () => {
    this.setState({ projIntervalId: setInterval(this.nextProj, 5000) });
  };

  stopInterval = () => {
    clearInterval(this.state.projIntervalId);
    this.setState({ projIntervalId: null });
  };

  restartInterval = () => {
    clearInterval(this.state.projIntervalId);
    this.startInterval();
  };

  flashGreen = () => {
    this.setState({ remoteLightClass: "flash-green" });
    this.removeRemoteLightClass();
  };

  flashRed = () => {
    this.setState({ remoteLightClass: "flash-red" });
    this.removeRemoteLightClass();
  };

  stopAndFlash = () => {
    if (this.state.projIntervalId !== null) {
      this.stopInterval();
      this.flashRed();
    } else {
      this.flashGreen();
    }
  };

  removeRemoteLightClass = () => {
    setTimeout(() => this.setState({ remoteLightClass: "" }), 350);
  };

  next = () => {
    this.setState(({ currProjInd: prevInd }) => {
      const currProjInd = prevInd >= projectData.length - 1 ? 0 : prevInd + 1;
      return { currProjInd };
    });
  };

  prev = () => {
    this.setState(({ currProjInd: prevInd }) => {
      const currProjInd = prevInd <= 0 ? projectData.length - 1 : prevInd - 1;
      return { currProjInd };
    });
  };

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.stopInterval();
  }

  nextProj = () => {
    if (this.state.projIntervalId !== null) {
      this.restartInterval();
    }
    this.next();
    this.flashGreen();
  };

  prevProj = () => {
    if (this.state.projIntervalId !== null) {
      this.restartInterval();
    }
    this.prev();
    this.flashGreen();
  };

  remoteSetInd = input => {
    if (this.state.projIntervalId !== null) {
      this.restartInterval();
    }
    this.setState({ currProjInd: input });
    this.flashGreen();
  };

  changeAuto = () => {
    if (this.state.tvDisplayType !== "image") {
      this.flashRed();
    } else {
      if (this.state.projIntervalId === null) {
        this.startInterval();
        this.flashGreen();
      } else {
        this.stopInterval();
        this.flashRed();
      }
    }
  };

  onOpenProject = () => {
    if (this.state.projIntervalId !== null) {
      this.stopInterval();
    }
  };

  guide = () => {
    this.stopAndFlash();
    this.setState(state => ({
      tvDisplayType: state.tvDisplayType === "guide" ? "image" : "guide"
    }));
  };

  info = () => {
    this.stopAndFlash();
    this.setState(state => ({
      tvDisplayType: state.tvDisplayType === "info" ? "image" : "info"
    }));
  };

  up = () => {
    if (this.state.tvDisplayType === "guide") {
      this.prev();
      this.flashGreen();
    } else {
      this.flashRed();
    }
  };

  down = () => {
    if (this.state.tvDisplayType === "guide") {
      this.next();
      this.flashGreen();
    } else {
      this.flashRed();
    }
  };

  ok = () => {
    if (this.state.tvDisplayType === "image") {
      document.querySelector(".project-link").click();
    } else {
      this.setState({ tvDisplayType: "image" });
    }
    this.flashGreen();
  };

  render() {
    const {
      onOpenProject,
      remoteSetInd,
      guide,
      changeAuto,
      info,
      up,
      down,
      nextProj,
      ok,
      prevProj,
      state
    } = this;

    const {
      currProjInd,
      tvDisplayType,
      remoteLightClass,
      projIntervalId
    } = state;

    return (
      <div className="project-tv-remote-container">
        <ProjectScreen
          currProjInd={currProjInd}
          tvDisplayType={tvDisplayType}
          onOpenProject={onOpenProject}
          guide={guide}
          projectData={projectData}
          remoteSetInd={remoteSetInd}
        />
        <ProjectRemote
          remoteSetInd={remoteSetInd}
          changeAuto={changeAuto}
          remoteLightClass={remoteLightClass}
          projIntervalId={projIntervalId}
          guide={guide}
          info={info}
          up={up}
          prevProj={prevProj}
          down={down}
          nextProj={nextProj}
          ok={ok}
        />
      </div>
    );
  }
}

export default Projects;
