import React from "react";
import { Route, Switch, NavLink, Link, useHistory } from "react-router-dom";
import oops from "../asset/images/oops.png";
import Footer from "./Footer";
import "../asset/css/notfound.css";

const Notfound = () => {
  return (
    <>
      <div className="error_page">
        <div className="oops_text">
          <h1>Oops!</h1>
          <h6>
            We can't seem to find that <br /> Try searching for it.
          </h6>
          <p>Error 404</p>
          <div className="goToHomeLink">
            <div>Here are some helpful links:</div>
            <Link exact to="/OlxWebsiteClone/" className="home">
              <div>Home</div>
            </Link>
            <Link exact to="/OlxWebsiteClone/" className="goTohelp">
              <div>Help</div>
            </Link>
          </div>
        </div>

        <div className="oops_image">
          <img src={oops} />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Notfound;
