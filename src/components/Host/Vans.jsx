import React, { useState } from "react";

const vans = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    type: "Simple",
    image: "/src/assets/Modest_explorer.jpg",
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    type: "Rugged",
    image: "/src/assets/Beach_bum.jpg",
  },
  {
    id: 3,
    name: "Reliable Red",
    price: 100,
    type: "Luxury",
    image: "/src/assets/Reliable_Red.jpg",
  },
  {
    id: 4,
    name: "Dreamfinder",
    price: 65,
    type: "Simple",
    image: "/src/assets/Dreamfinder.jpg",
  },
  {
    id: 5,
    name: "The Cruiser",
    price: 120,
    type: "Luxury",
    image: "/src/assets/The_Cruiser.jpg",
  },
  {
    id: 6,
    name: "Green Wonder",
    price: 70,
    type: "Rugged",
    image: "/src/assets/Green_Wonder.jpg",
  },
];

const VanCard = ({ van }) => {
  return (
    <div className="van-card">
      <a href={`/vans/${van.id}`}>
        <img src={van.image} alt={van.name} />
      </a>
      <div className="text">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
      <span className={`tag ${van.type}`}>{van.type}</span>
    </div>
  );
};

const VanList = () => {
  const [filter, setFilter] = useState(null);

  const handleFilterClick = (type) => {
    setFilter(type);
  };

  const clearFilters = () => {
    setFilter(null);
  };

  const filteredVans = filter
    ? vans.filter((van) => van.type === filter)
    : vans;

  return (
    <section className="van-list">
      <h2>Explore our van options</h2>
      <div className="filters">
        <button
          className="filter filter-Simple"
          onClick={() => handleFilterClick("Simple")}
        >
          Simple
        </button>
        <button
          className="filter filter-Luxury"
          onClick={() => handleFilterClick("Luxury")}
        >
          Luxury
        </button>
        <button
          className="filter filter-Rugged"
          onClick={() => handleFilterClick("Rugged")}
        >
          Rugged
        </button>
        <button className="clear-filters" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
      <div className="vans">
        {filteredVans.map((van) => (
          <VanCard key={van.id} van={van} />
        ))}
      </div>
    </section>
  );
};

export default VanList;
