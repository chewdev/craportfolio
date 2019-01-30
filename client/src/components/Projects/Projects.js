import React from "react";
import projectData from "../../data/projects";

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
    const project = projectData[this.state.currProjInd];
    const liArr = (() => {
      let liArr = [];
      for (let i = 0; i <= 9; i++) {
        liArr.push(
          <li
            className="projects-remote-input"
            key={`remote-${i}`}
            onClick={() => {
              this.remoteSetInd(i);
            }}
          >
            <button className="projects-remote-input-div">{i}</button>
          </li>
        );
      }
      return liArr;
    })();

    if (this.state.tvDisplayType === "guide") {
      var projArr = projectData.map((project, ind) => {
        return (
          <li
            className="projects-tv-list-item"
            key={ind}
            onClick={() => {
              this.remoteSetInd(ind);
              this.guide();
            }}
          >
            <span className="channel-name-span">{project.channelName}</span>
            <span className="channel-ind-span">{ind}</span>
            <span
              className={
                "channel-title-span" +
                (this.state.currProjInd === ind
                  ? " projects-tv-list-item--selected"
                  : "")
              }
            >
              {project.title}
            </span>
          </li>
        );
      });
    }

    return (
      <div className="project-tv-remote-container">
        <div className="project-container">
          {this.state.tvDisplayType === "image" ? (
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={this.onOpenProject}
            >
              <img
                className="project-tv"
                src={project.imgSrc}
                alt={project.alt}
              />
            </a>
          ) : this.state.tvDisplayType === "info" ? (
            <div className="project-info project-link">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ) : (
            <div className="project-link">
              <ul>{projArr}</ul>
            </div>
          )}
          <div className="top-tv-base" />
          <div className="bottom-tv-base" />
        </div>

        <ul className="projects-remote">
          <li className="projects-remote-number-li projects-remote-number-li--container">
            <ul className="projects-remote-number-ul projects-remote-number-ul--power">
              <li className="projects-remote-input" onClick={this.changeAuto}>
                <button className="projects-remote-input-div">
                  {this.state.projIntervalId === null ? (
                    <i className="fas fa-play" />
                  ) : (
                    <i className="fas fa-pause" />
                  )}
                </button>
              </li>
              <li className="projects-remote-input projects-remote-input--power">
                <div
                  className={`projects-remote-power-ind ${
                    this.state.remoteLightClass
                  }`}
                />
              </li>
            </ul>
          </li>
          <li className="projects-remote-number-li projects-remote-number-li--container">
            <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
              <li
                className="projects-remote-input projects-remote-input--guide"
                onClick={this.guide}
              >
                <button className="projects-remote-input-div projects-remote-input-div--text">
                  {" "}
                  GUIDE{" "}
                </button>
              </li>
              <li
                className="projects-remote-input projects-remote-input--info"
                onClick={this.info}
              >
                <button className="projects-remote-input-div projects-remote-input-div--text">
                  {" "}
                  INFO{" "}
                </button>
              </li>
            </ul>
          </li>
          <li className="projects-remote-number-li projects-remote-number-li--container">
            <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
              <li className="projects-remote-input" onClick={this.up}>
                <button className="projects-remote-input-div">
                  {" "}
                  <i className="fas fa-chevron-up" />{" "}
                </button>
              </li>
            </ul>
          </li>
          <li className="projects-remote-number-li projects-remote-number-li--container">
            <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
              <li className="projects-remote-input" onClick={this.prevProj}>
                <button className="projects-remote-input-div">
                  {" "}
                  <i className="fas fa-chevron-left" />{" "}
                </button>
              </li>
              <li
                className="projects-remote-input projects-remote-input--ok"
                onClick={this.ok}
              >
                <button className="projects-remote-input-div projects-remote-input-div--ok">
                  OK
                </button>
              </li>
              <li className="projects-remote-input" onClick={this.nextProj}>
                <button className="projects-remote-input-div">
                  {" "}
                  <i className="fas fa-chevron-right" />{" "}
                </button>
              </li>
            </ul>
          </li>
          <li className="projects-remote-number-li projects-remote-number-li--container">
            <ul className="projects-remote-number-ul projects-remote-number-ul--arrows">
              <li className="projects-remote-input" onClick={this.down}>
                <button className="projects-remote-input-div">
                  {" "}
                  <i className="fas fa-chevron-down" />{" "}
                </button>
              </li>
            </ul>
          </li>
          <li className="projects-remote-number-li">
            <ul className="projects-remote-number-ul">{liArr.slice(1, 4)}</ul>
          </li>
          <li className="projects-remote-number-li">
            <ul className="projects-remote-number-ul">{liArr.slice(4, 7)}</ul>
          </li>
          <li className="projects-remote-number-li">
            <ul className="projects-remote-number-ul">{liArr.slice(7, 10)}</ul>
          </li>
          <li>
            <ul className="projects-remote-number-ul">{liArr.slice(0, 1)}</ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Projects;
