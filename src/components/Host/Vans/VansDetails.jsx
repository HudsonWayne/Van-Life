import React, { useState } from "react";

const VanCard = ({ van }) => {
  const [activeTab, setActiveTab] = useState("details");

  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="mt-4">
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
                className="rounded-md mb-2"
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
      <img src={van.mainImage} alt={van.name} className="rounded-t-lg" />
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
      mainImage: "https://via.placeholder.com/300", // Replace with actual image URLs
      photos: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      name: "Adventure Seeker",
      category: "Luxury",
      description:
        "The Adventure Seeker is built for those who want to explore in style. It features a high-end interior, a powerful engine, and all the amenities you could need for a long journey.",
      visibility: "Public",
      price: 120.0,
      mainImage: "https://via.placeholder.com/300", // Replace with actual image URLs
      photos: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
    {
      name: "Family Cruiser",
      category: "Comfort",
      description:
        "Perfect for family road trips, the Family Cruiser comes equipped with ample seating, entertainment options, and plenty of storage space.",
      visibility: "Public",
      price: 90.0,
      mainImage: "https://via.placeholder.com/300", // Replace with actual image URLs
      photos: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {vans.map((van, index) => (
        <VanCard key={index} van={van} />
      ))}
    </div>
  );
};

export default VanList;
