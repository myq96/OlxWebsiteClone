import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Db, storage } from "../firebase/index";
import "../asset/css/adspage.css";
import ShareIcon from "@material-ui/icons/Share";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PhoneIcon from "@material-ui/icons/Phone";
import Footer from "./Footer";
const AdsPage = () => {
  const { adId } = useParams();
  const location = useLocation();
  const locationPath = location.pathname;

  const [fbitem, setfbItem] = useState({});

  useEffect(() => {
    var adspostRef = Db.database().ref().child(`adspost/${adId}`);

    adspostRef.once("value", function (snapshot) {
      var adspost;
      var data = snapshot.val();
      setfbItem(data);
    });
  }, []);

  return (
    <>
      <div className="ads_cat_name">
        
        <p>
          {fbitem.mainCat} / {fbitem.SubCat}
        </p>
      </div>
      <div className="adsPage_main">
        <div className="adsPage_details">
          <div className="ads_Category">
            <div className="ads_img">
              
              <img src={fbitem.adsPhoto} />
            </div>
            <div className="ads_details">
              
              <h3 className="details_heading">Details</h3>
              <div className="make">
                <div className="maker">
                  <p>Make</p>
                </div>
                <div className="maker_name">
                  <p>{fbitem.make}</p>
                </div>
              </div>
            </div>
            <div className="ads_description">
              <div className="descriptions_title">
                <h3>Description</h3>
              </div>
              <div className="descriptions">
                <p>{fbitem.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="adsPage_user_details">
          <div className="price_title">
            <div className="price_section">
              <div className="price">Rs. {fbitem.price} </div>
              <div>
                <ShareIcon />
              </div>
              <div>
                <FavoriteBorderIcon />
              </div>
            </div>
            <div className="title">
              <p>{fbitem.title}</p>
            </div>

            <div className="location_date">
              <div className="ad_location">{fbitem.location}</div>
              <div className="ad_date">
                {fbitem.month} {fbitem.date}
              </div>
            </div>
          </div>

          <div className="seller_detailer">
            <div className="seller_title">Seller description</div>
            <div className="seller_photo_name">
              <div className="seller_photo">
                <img src={fbitem.userPhoto} />
              </div>
              <div className="seller_name">
                
                <h5>{fbitem.displayName}</h5>
              </div>
              <div className="forward_arrow">
                
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className="seller_chat">
              
              <h3>Chat with seller</h3>
            </div>
            <div className="seller_number">
              
              <PhoneIcon /> <h3>{fbitem.mobile}</h3>
            </div>
          </div>

          <div className="seller_location_div">
            <div className="seller_location_heading">
              <h4>Posted in</h4>
            </div>
            <div className="seller_location">
              <h6>{fbitem.location}</h6>
            </div>
          </div>

          <div className="ads_id">
            <div className="id">
              <h6>AD ID {fbitem.adId}</h6>
            </div>
            <div className="report">
              <p>REPORT THIS AD</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AdsPage;
