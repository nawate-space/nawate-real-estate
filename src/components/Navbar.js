import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {/*<Link className="navbar-item" to="/">
                TOP
              </Link>*/}
              <Link className="navbar-item" to="/blog">
                NEWS
              </Link>
              {/*<Link className="navbar-item" to="/about">
                VISION
              </Link>
              <Link className="navbar-item" to="/project-archive">
                PROJECT ARCHIVE
            </Link>*/}
              <a
                className="navbar-item"
                href="https://shopnawate.stores.jp/"
                target="_blank"
                rel="noreferrer"
              >
                ONLINE SHOP
              </a>
              {/*<Link className="navbar-item" to="/about">
                CONTACT
          </Link>*/}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
