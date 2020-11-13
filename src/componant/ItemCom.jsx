import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Items from "./Items";
import "../asset/css/item.css";
import { Db, storage } from "../firebase/index";

const ItemCom = () => {
  const [fbitem, setfbItem] = useState([]);

  useEffect(() => {
    var adspostRef = Db.database().ref("/adspost");

    adspostRef.once("value", function (snapshot) {
      var adspost;

      snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var data = childSnapshot.val();

        setfbItem((prevState) => {
          return [
            ...prevState,
            {
              adId: key,
              title: data.title,
              description: data.description,
              SubCat: data.SubCat,
              mainCat: data.mainCat,
              adsPhoto: data.adsPhoto,
              date: data.date,
              displayName: data.displayName,
              email: data.email,
              location: data.location,
              make: data.make,
              mobile: data.mobile,
              month: data.month,
              price: data.price,
              uid: data.uid,
              userPhoto: data.userPhoto,
            },
          ];
        });
      });
    });
  }, []);

  return (
    <>
      <div className="feature">
        <div className="feacture_heading">
          <div>
            <h2>Based on your last search</h2>
          </div>
          <div>
            <p>View more</p>
          </div>
        </div>

        <div className="items_div">
          {fbitem.slice(0, 4).map((val, i) => {
            return (
              <Items
                adId={val.adId}
                adsPhoto={val.adsPhoto}
                location={val.location}
                key={val.adId}
                adTitle={val.title}
                price={val.price}
                month={val.month}
                date={val.date}
              />
            );
          })}
        </div>
      </div>

      <div className="fresh">
        <div className="fresh_heading">
          <div>
            <h2>Fresh recommendations</h2>
          </div>
        </div>

        <div className="items_div">
          {fbitem.map((val, i) => {
            return (
              <Items
                adId={val.adId}
                adsPhoto={val.adsPhoto}
                location={val.location}
                key={val.adId}
                adTitle={val.title}
                price={val.price}
                month={val.month}
                date={val.date}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ItemCom;
