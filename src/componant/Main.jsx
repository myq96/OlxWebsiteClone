import React, { useState } from "react";
import "../asset/css/main.css";
import { Db, storage, facebookProvider } from "../firebase";
import FacebookIcon from "@material-ui/icons/Facebook";
import CloseIcon from "@material-ui/icons/Close";
// import Header from './Header';
import { Route, Switch, NavLink, Link, useHistory } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  const [login, setLogin] = useState(true);
  const history = useHistory();

  const goHome = () => {
    history.push("/OlxWebsiteClone/");
  };

  const closeSigup = () => {
    setLogin(false);
  };

  //   facebook auth start code here
  const fbLogin = () => {
    Db.auth()
      .signInWithPopup(facebookProvider)
      .then(function (result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var displayName = result.user.displayName;
        var email = result.user.email;
        var photoURL = result.user.photoURL;
        var uid = result.user.uid;
        // setLogin(false);
        Db.database()
          .ref()
          .child("users/" + result.user.uid)
          .set({
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            uid: uid,
          });

        localStorage.setItem(
          "CurrentUser",
          JSON.stringify({
            displayName: displayName,
            email: email,
            photoURL: photoURL,
            uid: uid,
          })
        );

        goHome();
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(error);
      });
  };

  //   facebook auth end code here

  return (
    <>
      {login === true ? (
        <>
          <Home />
          <Link exact to="/OlxWebsiteClone/">
            <div className="main_login"></div>
          </Link>
          <div className="login_window">
            <Link exact to="/OlxWebsiteClone/">
              <div className="close_login" onClick={closeSigup}>
                <CloseIcon />
              </div>
            </Link>
            <div className="login_phone">Continue with phone</div>
            <div className="login_facebook" onClick={fbLogin}>
              <FacebookIcon /> Continue with facebook
            </div>
            <div className="login_google">
              <i class="fa fa-google" aria-hidden="true"></i> Continue with
              google
            </div>
            <div className="login_email"> Continue with email</div>
            <div className="share_Personal">
              We won't share your personal details with anyone
            </div>
            <div className="terms_condition">
              If you continue, you are accepting
              <span style={{ color: "#76A1FF", marginLeft: "3px" }}>
                OLX Terms and Conditions and Privacy Policy
              </span>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Main;
