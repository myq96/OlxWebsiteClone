import React from 'react'
import '../asset/css/header.css'
import { Route, Switch, NavLink, Link } from "react-router-dom";
import Home from './Home'

const ComCat = () => {
    const vehicle = [
        "Tractors & Trailers",
        "Boats",
        "Other Vehicles",
        "Rickshaw & Chingchi",
        "Buses, Vans & Trucks",
        "Spare Parts",
        "Cars Accessories",
        "Cars on Installments",
        "Cars",
      ];
    
      const animal = [
        "Other Animals",
        "Horses",
        "Livestock",
        "Dogs",
        "Cats",
        "Hens & Aseel",
        "Birds",
        "Fish & Aquariums",
      ];
    
      const fashion =[
        "Other Fashion",
        "Couture",
        "Lawn & Pret",
        "Wedding",
        "Watches",
        "Make Up",
        "Jewellery",
        "Footwear",
        "Clothes",
        "Accessories",
      ]
    
      const farm =[
        "Farm & Fresh Food",
        "Catering & Restaurant",
              "Home & Office Repair",
              "Movers & Packers",
              "Maids & Domestic Help",
              "Health & Beauty",
              "Event Services",
              "Electronics & Computer Repair",
              "Other Services",
              "Web Development",
              "Drivers & Taxi",
              "Car Rental",
              "Travel & Visa",
              "Education & Classes",
      ]
    
      const mobiles = [
        "Mobile Phones",
        "Accessories",
        "Tablets"
      ]
    
      const FurnitureHomeDecor =[
        'Other Household Items',
        'Office Furniture',
        'Curtains & Blinds',
        'Rugs & Carpets',
        'Painting & Mirrors',
        'Garden & Outdoor',
        'Tables & Dining',
        'Home Decoration',
        'Beds & Wardrobes',
        'Sofa & Chairs',
        
      ]
    const PropertyforRent =[
      'Land & Plots',
      'Vacation Rentals - Guest Houses',
      'Roommates & Paying Guests',
      'Rooms',
      'Shops - Offices - Commercial Space',
      'Portions & Floors',
      'Apartments & Flats',
      'Houses',
    ]
    
    const BooksSportsHobbies= [
      'Other Hobbies',
      'Gym & Fitness',
      'Sports Equipment',
      'Musical Instruments',
      'Books & Magazines',
    ]
    
    const ElectronicsHomeAppliances =[
      'Washing Machines & Dryers',
      'Fridges & Freezers',
      'AC & Coolers',
      'Kitchen Appliances',
      'Generators, UPS & Power Solutions',
      'Other Home Appliances',
      'Games & Entertainment',
      'Cameras & Accessories',
      'TV - Video - Audio',
      'Computers & Accessories',
    ]
    
    const BusinessIndustrialAgriculture=[
      'Medical & Pharma',
      'Other Business & Industry',
      'Agriculture',
      'Construction & Heavy Machinery',
      'Trade & Industrial',
      'Food & Restaurants',
      'Business for Sale',
    ]
    
    const Jobs=[
      'Other Jobs',
      'Part - Time',
      'Domestic Staff',
      'Medical',
      'Manufacturing',
      'Accounting & Finance',
      'Human Resources',
      'Clerical & Administration',
      'Hotels & Tourism',
      'IT & Networking',
      'Sales',
      'Customer Service',
      'Education',
      'Advertising & PR',
      'Marketing',
      'Online',
    ]
    
    const Kids =[
      'Kids Accessories',
      'Kids Bikes',
      'Swings & Slides',
      'Prams & Walkers',
      'Toys',
      'Kids Furniture',
    ]
    
    const PropertyforSale = [
      'Portions & Floors',
      'Shops - Offices - Commercial Space',
      'Apartments & Flats',
      'Houses',
      'Land & Plots',
    ]
    
    const Bikes= [
      'Scooters',
      'ATV & Quads',
      'Bicycles',
      'Spare Parts',
      'Motorcycles',
    ]
    return (
        <>
        <Home/>
        <Link exact to="/">
            <div className="goToHome"></div>
          </Link>
          <div className="comCategory">
        <div className="vehicle">
          <h5>Vehicles</h5>
          {vehicle.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div>
        
         <div className="animal">
          <h5>Animals</h5>
          {animal.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div>
        
        <div className="FashionBeauty">
          <h5>Fashion & Beauty</h5>
          {fashion.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div>
        <div className="Services">
          <h5>Services</h5>
          {farm.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 
        
        <div className="Mobiles">
          <h5>Mobiles</h5>
          {mobiles.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="FurnitureHomeDecor">
          <h5>Furniture & Home Decor</h5>
          {FurnitureHomeDecor.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="PropertyforRent">
          <h5>Property for Rent</h5>
          {PropertyforRent.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="BooksSportsHobbies">
          <h5>Books, Sports & Hobbies</h5>
          {BooksSportsHobbies.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="ElectronicsHomeAppliances">
          <h5>Electronics & Home Appliances</h5>
          {ElectronicsHomeAppliances.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="BusinessIndustrialAgriculture">
          <h5>Business, Industrial & Agriculture</h5>
          {BusinessIndustrialAgriculture.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="Jobs">
          <h5>Jobs</h5>
          {Jobs.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="Kids">
          <h5>Kids</h5>
          {Kids.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="PropertyforSale">
          <h5>Property for Sale</h5>
          {PropertyforSale.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 

        <div className="Bikes">
          <h5>Bikes</h5>
          {Bikes.map((val, i) => {
            return <h6>{val}</h6>;
          })}
        </div> 


      </div>   
        </>
    )
}
export default ComCat;