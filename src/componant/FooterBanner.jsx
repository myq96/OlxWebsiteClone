import React from "react";
import "../asset/css/footerBanner.css";
import mobileImage from "../asset/images/olx app.png";
import appStore from "../asset/images/app store.png";
import playStore from "../asset/images/play store.png";

const FooterBanner = () => {
  return (
    <>
      <div className="footer_banner">
        <div className="footerBannerImg">
          <img src={mobileImage} />
        </div>

        <div className="footerBannerText">
          <div>
            <h1>TRY THE OLX APP</h1>
          </div>
          <div>
            <h2>
              Buy, sell and find just about anything using the app on your
              mobile.
            </h2>
          </div>
        </div>

        <div className="footerStoreImg">
          <div>
            <h4>GET YOUR APP TODAY</h4>
          </div>
          <div className="storeImg">
            <div>
              <img src={appStore} />
            </div>
            <div>
              <img src={playStore} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBanner;
