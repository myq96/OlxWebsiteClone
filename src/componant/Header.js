import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import "../asset/css/header.css";
import logo from "../asset/images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import AddIcon from "@material-ui/icons/Add";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Main from "./Main";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [comMenu, setcomMenu] = useState(false);
  const [loginBtn, setloginBtn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const openLogin = () => {
    setloginBtn(true);
  };
  const closeLogin = () => {
    setloginBtn(false);
  };

  const Cuser = JSON.parse(localStorage.getItem("CurrentUser")) || null;
  const location = useLocation();
  console.log(Cuser);

  const openMenu = () => {
    setcomMenu(true);
    console.log(comMenu);
  };
  const closeMenu = () => {
    setcomMenu(false);
    console.log(comMenu);
  };

  const anyCloseMenu = () => {
    setcomMenu(false);
  };

  useEffect(() => {}, [comMenu]);

  useEffect(() => {}, [loginBtn]);

  useEffect(() => {
    setCurrentUser(Cuser);
    console.log(Cuser);
  }, [location.pathname]);

  return (
    <>
      <div className="header" onClick={anyCloseMenu}>
        <Link exact to="/OlxWebsiteClone/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="location">
          <div className="icon_search">
            <SearchIcon className="citySrchIcon" />
            <input
              className="citySearch"
              placeholder="Search city, area or local"
              value="Karachi,Sindh"
            />
            <button>
              <KeyboardArrowDownIcon className="cityDropDown" />
            </button>
          </div>
        </div>

        <div className="searchItem ">
          <input
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
            className="query"
          />
          <div className="SearchItemIcon">
            <div className="Search">
              <SearchIcon className="ItemSearchIcon" />
            </div>
          </div>
        </div>

        {Cuser === null ? (
          <>
            <Link exact to="/OlxWebsiteClone/main">
              <div className="login">
                <button>Login</button>
              </div>
            </Link>

            <Link exact to="/OlxWebsiteClone/main">
              <div className="signUp">
                <div className="signUpStyle">
                  <button>
                    <div>
                      <AddIcon />
                    </div>
                    <div>
                      <h1 className="sell">Sell</h1>
                    </div>
                  </button>
                </div>
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link exact to="/OlxWebsiteClone/">
              <div className="ChatIcon">
                <ChatIcon />
              </div>
            </Link>

            <Link exact to="/OlxWebsiteClone/">
              <div className="NotificationIcon">
                <NotificationsNoneIcon />
              </div>
            </Link>

            <Link exact to="/OlxWebsiteClone/logout">
              <div className="UserInfo">
                <img
                  src={
                    Cuser.photoURL ||
                    "https://www.tridentconsultant.com/wp-content/uploads/2019/07/user-dummy-200x200.png"
                  }
                  alt=""
                  style={{ borderRadius: "50%" }}
                />
                <KeyboardArrowDownIcon />
              </div>
            </Link>

            <Link exact to="/OlxWebsiteClone/post">
              <div className="signUp">
                <div className="signUpStyle">
                  <button>
                    <div>
                      <AddIcon />
                    </div>
                    <div>
                      <h1 className="sell">Sell</h1>
                    </div>
                  </button>
                </div>
              </div>
            </Link>
          </>
        )}
      </div>

      <div className="main_category">
        <Link exact to="/OlxWebsiteClone/cat" style={{ textDecoration: "none", color: "#000" }}>
          <div className="allCategory">
            all category
            <KeyboardArrowDownIcon />
          </div>
        </Link>
        <div className="top_cat_heading">mobile phones</div>
        <div className="top_cat_heading">cars</div>
        <div className="top_cat_heading">motorcycles</div>
        <div className="top_cat_heading">houses</div>
        <div className="top_cat_heading">TV-Video-Audio</div>
        <div className="top_cat_heading">tablets</div>
        <div className="top_cat_heading">land & plots</div>
        <div></div>
      </div>
    </>
  );
};

export default Header;
