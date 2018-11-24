import React from "react";
import classnames from "classnames";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.eventAdded = null;
    this.yLoc = 0;

    this.state = {
      isOpen: true,
      hideClass: "",
      hasAnimated: false
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    if (!this.eventAdded) {
      window.addEventListener("scroll", this.onScroll);
      this.eventAdded = true;
      const that = this;
      setTimeout(() => {
        that.setState({ hideClass: "header__title_hide", hasAnimated: true });
      }, 2500);
    }
  }

  onScroll() {
    if (this.state.isOpen && window.pageYOffset < 25) {
      return;
    } else if (window.pageYOffset < 25) {
      this.setState({
        hideClass: "header__title_hide"
      });
      setTimeout(() => this.setState({ isOpen: true }), 50);
      return;
    } else if (
      window.pageYOffset - this.yLoc < 20 &&
      this.yLoc - window.pageYOffset < 20
    ) {
      return;
    } else if (this.state.isOpen) {
      this.setState({ isOpen: false });
      this.yLoc = window.pageYOffset;
    }
  }

  render() {
    const headerTitleClasses = classnames(
      "header__title",
      { header__title_animate: !this.state.hasAnimated },
      { [this.state.hideClass]: !this.state.isOpen }
    );

    const headerTapeLeft = classnames("header__tape", {
      "header__tape--top-left": !this.state.hasAnimated
    });
    const headerTapeMiddle = classnames("header__tape", {
      "header__tape--middle": !this.state.hasAnimated
    });
    const headerTapeRight = classnames("header__tape", {
      "header__tape--top-right": !this.state.hasAnimated
    });

    return (
      <div>
        <div className="header-spacing" />
        <header className="header">
          <div className="content-container">
            <div className="header__content">
              <a
                href="#top-level"
                className={headerTitleClasses}
                onTransitionEnd={e => {
                  if (e.nativeEvent.propertyName === "top") {
                    if (!this.state.isOpen) {
                      this.setState({ hideClass: "header__title_dnone" });
                    }
                  }
                }}
              >
                <div className={headerTapeLeft} />
                <div className="header__title-div">
                  <i className="fas fa-arrow-up medium-arrow" />
                </div>
              </a>
              <a href="#contact" className={headerTitleClasses}>
                <div className={headerTapeLeft} />
                <div className="header__title-div">Contact</div>
              </a>
              <a href="#projects" className={headerTitleClasses}>
                <div className={headerTapeMiddle} />
                <div className="header__title-div">Projects</div>
              </a>
              <a
                href={this.state.isOpen ? "#about-me" : null}
                className={classnames(
                  "header__title",
                  { header__title_animate: !this.state.hasAnimated },
                  {
                    header__title_hide:
                      !this.state.isOpen && this.state.hideClass
                  }
                )}
                onClick={() => {
                  if (!this.state.isOpen) {
                    this.setState({
                      hideClass: "header__title_hide"
                    });
                    const that = this;
                    setTimeout(() => that.setState({ isOpen: true }), 50);
                  }
                }}
              >
                <div className={headerTapeRight} />
                <div className="header__title-div">
                  {!this.state.isOpen && this.state.hideClass !== "" ? (
                    <i className="fas fa-arrow-left bigger-arrow" />
                  ) : (
                    "About Me"
                  )}
                </div>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
