import React from "react";
import "../asset/css/footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import appStore from "../asset/images/app store.png";
import playStore from "../asset/images/play store.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer_category">
        <div>
          <h1>POPULAR CATEGORIES</h1>
          <p>Cars</p>
          <p>Flats for rent</p>
          <p>Jobs</p>
          <p>Mobile Phones</p>
        </div>
        <div>
          <h1>TRENDING SEARCHES</h1>
          <p>Bikes</p>
          <p>Watches</p>
          <p>Books</p>
          <p>Dogs</p>
        </div>
        <div>
          <h1>ABOUT US</h1>
          <p>About OLX Group</p>
          <p>OLX Blog</p>
          <p>Contact Us</p>
          <p>OLX for Businesses</p>
        </div>
        <div>
          <h1>OLX</h1>
          <p>Help</p>
          <p>Sitemap</p>
          <p>Legal & Privacy information</p>
          <p></p>
        </div>
        <div>
          <h1>FOLLOW US</h1>
          <div className="socialIcons">
            <p>
              <FacebookIcon />
            </p>
            <p>
              <TwitterIcon />
            </p>
            <p>
              <YouTubeIcon />
            </p>
            <p>
              <InstagramIcon />
            </p>
          </div>
          <div className="footerSocial">
            <img src={appStore} />
            <img src={playStore} />
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="countries">
          <h3>Other Countries </h3>
          <h4>India - South Africa - Indonesia</h4>
        </div>
        {/* <div></div> */}
        <div className="copyRight">
          <h3>Free Classifieds in Pakistan</h3>
          <h4>. © 2006-{year} OLX</h4>
        </div>
      </div>
    </>
  );
};

export default Footer;
