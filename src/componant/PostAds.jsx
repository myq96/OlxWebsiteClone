import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link, useHistory } from "react-router-dom";
import { Db, storage } from "../firebase";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
import "../asset/css/postads.css";
import "css-loading";

const PostAds = () => {
  const history = useHistory();
  const Cuser = JSON.parse(localStorage.getItem("CurrentUser")) || null;
  const { displayName, email, photoURL, uid } = Cuser;
  let selected_cat = JSON.parse(localStorage.getItem("selCat")) || null;
  const { mainCat, subCat } = selected_cat;
  console.log(mainCat);
  console.log(subCat);

  // firebase storage template
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState();
  const [progress, setProgress] = useState(0);
  const [details, setDetails] = useState({
    make: "",
    title: "",
    description: "",
    price: "",
    location: "",
    mobile: "",
    mainCat: mainCat,
    SubCat: subCat,
    displayName: Cuser.displayName,
    email: Cuser.email,
    uid: Cuser.uid,
    userPhoto: Cuser.photoURL,
  });
  const [getdata, setGetdata] = useState([]);
  const [errorimg, setErrorimg] = useState("");

  const inputEvent = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const value = e.target.value;
    const name = e.target.name;

    setDetails((preValue) => {
      console.log(preValue);

      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const handleChange = (e) => {
    if (
      e.target.files[0].type === "image/png" ||
      e.target.files[0].type === "image/jpeg"
    ) {
      setImage(e.target.files[0]);
      setErrorimg("");
      console.log(e.target.files[0]);
      console.log(e.target.files[0].type);
    } else {
      console.log("your file must be image");
      setErrorimg("your file must be png/jpeg image");
    }
  };

  const datafatch = () => {
    Db.database()
      .ref("adspost")
      .once("value")
      .then(function (snapshot) {
        var data = [snapshot.val()];
        setGetdata(data);
      });
  };

  console.log(getdata);

  const newDate = new Date().getDate();
  var m_names = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = m_names[new Date().getMonth()];

  const onSubmit = (e) => {
    e.preventDefault();

    const uploadTask = storage.ref(`ads/${image.name}`).put(image);
    uploadTask.on(
      "state_change",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
        console.log(progress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("ads")
          .child(image.name)
          .getDownloadURL()
          .then(function (downloadURL) {
            setUrl(downloadURL);
            console.log(downloadURL);
            setDetails({ ...details, adsPhoto: downloadURL });
            let key = Math.floor(Math.random() * 100000);

            Db.database()
              .ref()
              .child("adspost/" + key)
              .set({
                ...details,
                adsPhoto: downloadURL,
                adId: key,
                date: newDate,
                month: month,
              });
          });
      }
    );
  };
  if (progress == 100) {
    setTimeout(() => {
      history.push("/");
    }, 2000);
  }

  return (
    <>
      {progress >= 1 ? (
        <div className="pgLoader">
          <div className="loaderAnimate">
            <div data-loader="ball-fade"></div>
          </div>
          <div className="loaderCounter">
            <h4>{progress}%</h4>
          </div>
        </div>
      ) : null}

      <div classNames="main_ads" onLoad={datafatch}>
        <h1 className="post_heading">POST YOUR AD</h1>

        <div className="ads_select_cat">
          <div className="seleted_cat">
            <div className="cat_seleted">SELECTED CATEGORY</div>
            <div className="main_selected_cat">
              {mainCat} / {subCat}
              <Link exact to="/post" className="goToPost">
                <div> Change </div>
              </Link>
            </div>
            <form onSubmit={onSubmit} autoComplete="off">
              <div className="post_details">
                <div className="details">INCLUDE SOME DETAILS</div>
                <div className="input_details">
                  <label for="make">Make/Brand*</label>
                  <input
                    name="make"
                    value={details.make}
                    onChange={inputEvent}
                    type="text"
                    id="make"
                    required
                  />
                  <p>
                    Mention the key features of your item (e.g. brand, model,
                    age, type)
                  </p>
                </div>
                <div className="input_details">
                  <label for="title">Ad title*</label>
                  <input
                    name="title"
                    value={details.title}
                    onChange={inputEvent}
                    type="text"
                    id="title"
                    required
                  />
                  <p>
                    Mention the key features of your item (e.g. brand, model,
                    age, type)
                  </p>
                </div>
                <div className="input_details">
                  <label for="description">Description*</label>
                  <input
                    name="description"
                    value={details.description}
                    onChange={inputEvent}
                    type="text"
                    id="description"
                    required
                  />
                  <p>Include condition, features and reason for selling</p>
                </div>
              </div>

              <div className="post_price">
                <div className="details">SET A PRICE</div>
                <div className="input_details">
                  <label for="price">Price*</label>
                  <input
                    name="price"
                    value={details.price}
                    onChange={inputEvent}
                    type="number"
                    id="price"
                    required
                  />
                </div>
              </div>

              <div className="post_photo">
                <div className="details">UPLOAD PHOTO</div>
                <div>
                  <input
                    className="input_details"
                    type="file"
                    onChange={handleChange}
                    required
                  />
                  <p style={{ color: "red", fontSize: "14px" }}>{errorimg}</p>
                </div>
              </div>

              <div className="post_location">
                <div className="details">CONFIRM YOUR LOCATION</div>
                <div className="input_details">
                  <label for="location">Location*</label>
                  <input
                    name="location"
                    value={details.location}
                    onChange={inputEvent}
                    type="text"
                    id="location"
                    required
                  />
                </div>
              </div>

              <div className="post_Review_Details">
                <div className="details">REVIEW YOUR DETAILS</div>
                <div className="user_photo">
                  <div>
                    <img className="Cuser_photo" src={photoURL} />
                  </div>
                  <div className="Cuser_name">{displayName}</div>
                </div>

                <div className="details">Let's verify your account</div>
                <div className="sms">
                  We will send you a confirmation code by sms on the next step
                </div>
                <div className="input_details">
                  <label for="mobile">Mobile Phone Number*</label>
                  <input
                    name="mobile"
                    value={details.mobile}
                    onChange={inputEvent}
                    type="number"
                    id="mobile"
                    required
                  />
                </div>
              </div>

              <div className="submit_btn">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ backgroundColor: "#002F34" }}
                >
                  Post now
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div style={{ margin: "5% 0" }}></div>

      <Footer />
    </>
  );
};

export default PostAds;
