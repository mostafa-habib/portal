import React from "react";
import FawryPic from "../Images/fawryDigital.png";
import ProfilePic from "../Images/profilePic.png";
import InvoicingIcon from "../Icons/invoicing.svg";
import LanguagesIcon from "../Icons/languages.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:"#fff"}}>
      <div className="container">
        {/* brand image */}
        <span className="navbar-brand d-flex align-items-center px-3 py-3">
          <img
            src={FawryPic}
            alt="Logo"
            width="95"
            height="45"
            className="d-inline-block align-text-top"
          />
        </span>

        {/* collapse btn */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* appear after click collapse btn */}
        <div className="collapse navbar-collapse" id="navbarText">
          {/* Invoicing */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <span>
              <img
                src={InvoicingIcon}
                alt="Logo"
                width="25"
                height="25"
                className="d-inline-block mx-1"
              />
            </span>
            <span
              style={{
                fontSize: "1rem",
                fontWeight: 400,
              }}
            >
              Invoicing
            </span>
          </a>

          {/* user pic and mail && language */}
          <div className="ms-auto">
            <div className="row">
              {/* user pic and mail */}
              <div
                className="col-md-9 row py-1 me-2 rounded profile ps-0"
                onClick={() => alert("profile")}
              >
                <div className="col-3 ps-1">
                  <img
                    src={ProfilePic}
                    alt="Logo"
                    width="45"
                    height="45"
                    className="rounded-circle"
                  />
                </div>
                <div className="col-6 p-0 pe-1">
                  <div
                    style={{
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    welcome
                  </div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    <span>Joseph.rashad@smg.com.eg</span>
                  </div>
                </div>
              </div>

              {/* language */}
              <div className=" col-md-3 d-flex align-items-center py-1 rounded profile">
                <span>
                  <img
                    src={LanguagesIcon}
                    alt="Logo"
                    width="20"
                    height="20"
                    className="d-inline-block mx-1"
                  />
                </span>
                eng
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
