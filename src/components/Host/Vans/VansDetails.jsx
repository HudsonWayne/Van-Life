import React, { useState } from "react";
import Simple from "../../../assets/Modest_Explorer rent.jpg";
import Reliable from "../../../assets/Reliable_Red.jpg";
import Luxury from "../../../assets/The_Cruiser.jpg";

const VansDetails = () => {
  const prices = [
    {
      id: 1,
      price: 60,
    },
    {
      id: 2,
      price: 80,
    },
    {
      id: 3,
      price: 100,
    },
  ];

  const van = [
const VanCard = ({ van }) => {
  const [activeTab, setActiveTab] = useState("details");

  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="mt-4 w-full">
            <p>
              <span className="font-semibold">Name:</span> {van.name}
            </p>
            <p>
              <span className="font-semibold">Category:</span> {van.category}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {van.description}
            </p>
            <p>
              <span className="font-semibold">Visibility:</span>{" "}
              {van.visibility}
            </p>
          </div>
        );
      case "pricing":
        return (
          <div className="mt-4">
            <p className="text-2xl">
              ${van.price.toFixed(2)}
              <span className="text-sm font-light">/day</span>
            </p>
          </div>
        );
      case "photos":
        return (
          <div className="mt-4">
            {van.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${van.name} photo ${index + 1}`}
                className="rounded-sm mb-2 w-full" 
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <img src={van.mainImage} alt={van.name} className="rounded-t-lg w-full" />{" "}
      {/* Added w-full class here */}
      <div className="mt-4">
        <span className="text-sm bg-orange-200 text-orange-700 px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
          {van.category}
        </span>
        <h2 className="text-xl font-bold mt-2">{van.name}</h2>
        <p className="text-lg font-semibold mt-1">${van.price}/day</p>
      </div>
      <div className="mt-4 flex border-b">
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "details" ? "border-b-2 border-black font-bold" : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          Details
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "pricing" ? "border-b-2 border-black font-bold" : ""
          }`}
          onClick={() => setActiveTab("pricing")}
        >
          Pricing
        </button>
        <button
          className={`flex-1 py-2 text-center ${
            activeTab === "photos" ? "border-b-2 border-black font-bold" : ""
          }`}
          onClick={() => setActiveTab("photos")}
        >
          Photos
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

const VanList = () => {
  const vans = [
    {
      name: "Modest Explorer",
      category: "Simple",
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank, and a kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      visibility: "Public",
      price: 60.0,
      mainImage: Simple,
      photos: [Simple],
    },
    {
      name: "Reliable Red",
      category: "Reliable",
      description:
        "The Reliable Red is perfect for long journeys and rough terrains. It’s equipped with a robust engine and all the necessary safety features.",
      visibility: "Public",
      price: 90.0,
      mainImage: Reliable,
      photos: [Reliable],
    },
    {
      name: "Luxury Cruiser",
      category: "Luxury",
      description:
        "The Luxury Cruiser is built for those who want to explore in style. It features a high-end interior, a powerful engine, and all the amenities you could need for a long journey.",
      visibility: "Public",
      price: 120.0,
      mainImage: Luxury,
      photos: [Luxury],
    },
  ];

  return (
    <div className="container">
      <HostNavbar />
      <div className="back">
        <li>
          <Link to="/Vans">Back to all vans</Link>
        </li>
      </div>
      <div className="van-card">
        <div className="image-text">
          <div className="container">
            <div className="row">
              <div className="first">
                <div className="image-container col-md-6">
                  <img key={van.id} src={van.image} alt="Modest Explorer" />
                </div>
                <div className="text-container col-md-6">
                  <button className="bnt9">{van.category}</button>
                  <h2 key={van.id}>{van.name}</h2>
                  <p>
                    <span key={van.id}>{van.price}</span>/day
                  </p>
                </div>
              </div>
            </div>

            <ul className="link">
              <li>
                <Link to="/VansDetails" className="details">
                  Details
                </Link>
              </li>
              <li>  
                <Link to="/VansPhotos">Photos</Link>
              </li>
              <li>
                <Link to="/VansPricing">Pricing</Link>
              </li>
            </ul>

            <div className="details-section">
              <h2 className="van-name " key={van.id}>
                <span>Name:</span>
                {van.name}
              </h2>
              <p className="van-category" key={van.id}>
                <span>Category:</span>Category: {van.category}
              </p>
              <p className="van-description" key={van.id}>
                <span>Description:</span>
                {van.description}
              </p>
              <p className="van-price" key={van.id}>
                <span>Visibility:</span>
                {van.Visibility}
              </p>
            </div>
          </div>
        </div>
      </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vans.map((van, index) => (
        <VanCard key={index} van={van} />
      ))}
    </div>
  );
};

export default VanList;
