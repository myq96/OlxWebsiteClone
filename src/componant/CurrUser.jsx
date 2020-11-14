import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link, useHistory } from "react-router-dom";
import "../asset/css/currUser.css";
import Home from "./Home";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PaymentIcon from "@material-ui/icons/Payment";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import TuneIcon from "@material-ui/icons/Tune";
import GetAppIcon from "@material-ui/icons/GetApp";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Db, storage, facebookProvider } from "../firebase";
const CurrUser = () => {
  const Cuser = JSON.parse(localStorage.getItem("CurrentUser")) || null;
  const { displayName, email, photoURL, uid } = Cuser;
  const history = useHistory();

  const goHome = () => {
    history.push("/OlxWebsiteClone/");
  };

  const logoutUser = () => {
    Db.auth()
      .signOut()
      .then(function () {
        localStorage.clear();
        console.log("logout user");
        goHome();
      })
      .catch(function (error) {});
  };

  return (
    <>
      <Home />
      <Link exact to="/OlxWebsiteClone/">
        <div className="goToHome"></div>
      </Link>
      <div className="User_window">
        <div className="image_name">
          <div className="user_image">
            <img src={photoURL} />
          </div>

          <div className="user_info">
            <div className="hello_user">
              <p>Hello,</p>
            </div>
            <div className="user_name">
              <h6>{displayName}</h6>
            </div>
            <div className="user_view">
              <h6>View and edit profile</h6>
            </div>
          </div>
        </div>

        <div className="steps_section">
          <div className="steps">2 steps left</div>
          <div className="steps_info">
            OLX is built on trust. Help other people get to know you. Tell them
            about the things you like.
          </div>
        </div>

        <div className="ads_section">
          <div className="my_ads">
            <div>
              {" "}
              <LibraryBooksIcon />{" "}
            </div>{" "}
            <div>
              {" "}
              <h6 className="ads_section_heading"> My Ads</h6>{" "}
            </div>
          </div>
          <div className="buy_buss">
            <div>
              {" "}
              <AssignmentIcon />{" "}
            </div>{" "}
            <div>
              {" "}
              <h6 className="ads_section_heading">
                {" "}
                Buy Business Packages
              </h6>{" "}
            </div>
          </div>
          <div className="bought_pkgs">
            <div>
              {" "}
              <PaymentIcon />{" "}
            </div>{" "}
            <div>
              {" "}
              <h6 className="ads_section_heading">
                {" "}
                Bought Packages & Billings
              </h6>{" "}
            </div>
          </div>
        </div>

        <div className="help_setting">
          <div className="help">
            <div>
              {" "}
              <HelpOutlineIcon />{" "}
            </div>{" "}
            <div>
              {" "}
              <h6 className="ads_section_heading"> Help</h6>{" "}
            </div>
          </div>
          <div className="setting">
            <div>
              {" "}
              <TuneIcon />{" "}
            </div>{" "}
            <div>
              {" "}
              <h6 className="ads_section_heading"> Settings</h6>{" "}
            </div>
          </div>
        </div>

        <div className="install">
          <div className="install_app">
            <div>
              {" "}
              <GetAppIcon />{" "}
            </div>{" "}
            <div>
              {" "}
              <h6 className="ads_section_heading">
                {" "}
                Install OLX Lite app
              </h6>{" "}
            </div>
          </div>
        </div>

        <div className="logout" onClick={logoutUser}>
          <div className="logout_user">
            <div>
              {" "}
              <ExitToAppIcon />{" "}
            </div>{" "}
            <div>
              {" "}
              <h6 className="ads_section_heading"> Logout</h6>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrUser;
