import React, { useEffect } from "react";
import item1 from "../asset/items/one.jpg";
import "../asset/css/item.css";
import { Route, Switch, Link } from "react-router-dom";

const Items = (props) => {
  console.log(props.adsPhoto);
  return (
    <>
      <Link className="item_main" exact to={props.adId}>
        <div id={props.adId}>
          <div className="item_image">
            <img src={props.adsPhoto} alt="item1" />
          </div>
          <div className="item_price">
            <h5>Rs. {props.price}</h5>
          </div>
          <div className="item_name">
            <h5>{props.adTitle} </h5>
          </div>
          <div className="place_time">
            <div className="item_location">
              <h5>{props.location}</h5>
            </div>
            <div className="item_date">
              <h5>
                {props.month} {props.date}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Items;