import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../asset/css/post.css";
import { Db, storage } from "../firebase";
import Footer from "./Footer";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import MotorcycleIcon from "@material-ui/icons/Motorcycle";
import BusinessIcon from "@material-ui/icons/Business";
import BuildIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";
import PetsIcon from "@material-ui/icons/Pets";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import FaceIcon from "@material-ui/icons/Face";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import ChildCareIcon from "@material-ui/icons/ChildCare";
const Post = () => {
  const mobileCat = ["Tablets", "Accessories", "Mobile Phones"];
  const vehiclesCat = [
    "Cars",
    "Cars on Installments",
    "Car Accessories",
    "Spare Parts",
    "Buses, Vans & Trucks",
    "Rickshaw & Chingchi",
    "Other Vehicles",
    "Boats",
    "Tractors & Trailers",
  ];
  const propertySaleCat = [
    "Land & Plots",
    "Houses",
    "Apartments & Flats",
    "Shops - Offices - Commercial Space",
    "Portions & Floors",
  ];
  const propertyRentCat = [
    "Houses",
    "Apartments & Flats",
    "Portions & Floors",
    "Shops - Offices - Commercial Space",
    "Rooms",
    "Roommates & Paying Guests",
    "Vacation Rentals - Guest Houses",
    "Land & Plots",
  ];
  const electronicsCat = [
    "Computers & Accessories",
    "TV - Video - Audio",
    "Cameras & Accessories",
    "Games & Entertainment",
    "Other Home Appliances",
    "Generators, UPS & Power Solutions",
    "AC & Coolers",
    "Fridges & Freezers",
    "Washing Machines & Dryers",
  ];
  const bikesCat = [
    "Motorcycles",
    "Spare Parts",
    "Bicycles",
    "ATV & Quads",
    "Scooters",
  ];
  const businessCat = [
    "Business for Sale",
    "Food & Restaurants",
    "Trade & Industrial",
    "Construction & Heavy Machinery",
    "Agriculture",
    "Other Business & Industry",
  ];
  const servicesCat = [
    "Education & Classes",
    "Travel & Visa",
    "Car Rental",
    "Drivers & Taxi",
    "Web Development",
    "Other Services",
    "Electronics & Computer Repair",
    "Event Services",
    "Health & Beauty",
    "Maids & Domestic Help",
    "Movers & Pickers",
    "Home & Office Repair",
    "Catering & Restaurant",
    "Farm & Fresh Food",
  ];
  const jobsCat = [
    "Online",
    "Marketing",
    "Advertsing & PR",
    "Education",
    "Customer Service",
    "Sales",
    "IT & Networking",
    "Hotels & Tourism",
    "Clerical & Administration",
    "Human Resources",
    "Accounting & Finance",
    "Manufacturing",
    "Medical",
    "Domestic Staff",
    "Part - Time",
    "Other Jobs",
  ];
  const animalsCat = [
    "Fish & Aquariums",
    "Birds",
    "Hens & Aseel",
    "Cats",
    "Dogs",
    "Livestock",
    "Horses",
    "Pet Food & Accessories",
    "Other Animals",
  ];
  const furnitureCat = [
    "Sofa & Chairs",
    "Beds & Wardrobes",
    "Home Decoration",
    "Tables & Dining",
    "Garden & Outdoor",
    "Painting & Mirrors",
    "Rugs & Carpets",
    "Curtains & Blinds",
    "Office Furniture",
    "Other Household Items",
  ];
  const fashionCat = [
    "Accessories",
    "Clothes",
    "Footwear",
    "Jewellery",
    "Make Up",
    "Skin & Hair",
    "Watches",
    "Wedding",
    "Lawn & Pret",
    "Couture",
    "Other Fashion",
  ];
  const bookSportsHobbiesCat = [
    "Books & Magazines",
    "Musical Instruments",
    "Sports Equipment",
    "Gym & Fitness",
    "Other Hobbies",
  ];
  const kidsCat = [
    "Kids Furniture",
    "Toys",
    "Prams & Walkers",
    "Swings & Slides",
    "Kids Bikes",
    "Kids Accessories",
  ];

  const allCat = [
    ...mobileCat,
    ...vehiclesCat,
    ...propertySaleCat,
    ...propertyRentCat,
    ...electronicsCat,
    ...bikesCat,
    ...businessCat,
    ...servicesCat,
    ...jobsCat,
    ...animalsCat,
    ...furnitureCat,
    ...fashionCat,
    ...bookSportsHobbiesCat,
    ...kidsCat,
  ];

  const [category, setCategory] = useState([]);
  const [seletedCat, setSeletedCat] = useState({ mainCat: "", subCat: "" });
  localStorage.setItem("selCat", JSON.stringify(seletedCat));
  const getCat = (cat, name) => {
    setCategory(cat);
    console.log(category);
    setSeletedCat((prevData) => {
      return { mainCat: name };
    });
    console.log(seletedCat);
    localStorage.removeItem("selCat");
    localStorage.setItem("selCat", JSON.stringify(seletedCat));
  };

  const history = useHistory();
  const getSubCat = (e) => {
    let subSelectCat = e.currentTarget.attributes["cat"].value;
    setSeletedCat((prevData) => {
      return { mainCat: prevData.mainCat, subCat: subSelectCat };
    });
    localStorage.setItem("selCat", JSON.stringify(seletedCat));
    setTimeout(() => {
      history.push("/OlxWebsiteClone/post/attributes");
    }, 1000);
  };

  useEffect(() => {
    console.log(seletedCat);
  }, [seletedCat]);

  return (
    <>
      <h1 className="post_add_heading">POST YOUR AD</h1>

      <div className="post_main">
        <div>
          <h3 style={{ margin: "2%", color: "#002F34" }}>CHOOSE A CATEGORY</h3>
        </div>
        <div className="post_menu">
          <div className="ads_main_div">
            <div className="post_cat">
              <div
                className="ads_cat"
                onClick={() => getCat(mobileCat, "Mobile")}
              >
                <div>
                  <PhoneIphoneIcon />
                </div>
                <div>
                  <h4>Mobile</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(vehiclesCat, "Vehicle")}
              >
                <div>
                  <DriveEtaIcon />
                </div>
                <div>
                  <h4>Vehicle</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(propertySaleCat, "Property for Sale")}
              >
                <div>
                  <LoyaltyIcon />
                </div>
                <div>
                  <h4>Property for Sale</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(propertyRentCat, "Property for Rent")}
              >
                <div>
                  <LoyaltyIcon />
                </div>
                <div>
                  <h4>Property for Rent</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() =>
                  getCat(electronicsCat, "Electronics & Home Appliances")
                }
              >
                <div>
                  <DesktopWindowsIcon />
                </div>
                <div>
                  <h4>Electronics & Home Appliances</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(bikesCat, "Bikes")}
              >
                <div>
                  <MotorcycleIcon />
                </div>
                <div>
                  <h4>Bikes</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() =>
                  getCat(businessCat, "Business, Industrial & Agriculture")
                }
              >
                <div>
                  <BusinessIcon />
                </div>
                <div>
                  <h4>Business, Industrial & Agriculture</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(servicesCat, "Services")}
              >
                <div>
                  <BuildIcon />
                </div>
                <div>
                  <h4>Services</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div className="ads_cat" onClick={() => getCat(jobsCat, "Jobs")}>
                <div>
                  <WorkIcon />
                </div>
                <div>
                  <h4>Jobs</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(animalsCat, "Animals")}
              >
                <div>
                  <PetsIcon />
                </div>
                <div>
                  <h4>Animals</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(furnitureCat, "Furniture & Home Decor")}
              >
                <div>
                  <EventSeatIcon />
                </div>
                <div>
                  <h4>Furniture & Home Decor</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() => getCat(fashionCat, "Fashion & Beauty")}
              >
                <div>
                  <FaceIcon />
                </div>
                <div>
                  <h4>Fashion & Beauty</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div
                className="ads_cat"
                onClick={() =>
                  getCat(bookSportsHobbiesCat, "Books, Sports & Hobbies")
                }
              >
                <div>
                  <FitnessCenterIcon />
                </div>
                <div>
                  <h4>Books, Sports & Hobbies</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
              <div className="ads_cat" onClick={() => getCat(kidsCat, "Kids")}>
                <div>
                  <ChildCareIcon />
                </div>
                <div>
                  <h4>Kids</h4>
                </div>
                <ArrowForwardIosIcon />
              </div>
            </div>
          </div>

          <div className="cat_items_list">
            <div className="cat_items">
              {category.map((val, i) => {
                return (
                  <div className="item" cat={val} onClick={getSubCat}>
                    <div>
                      <h4>{val}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Post;
