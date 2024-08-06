import React from "react";

const vans = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    type: "Simple",
    image: "/src/assets/img/home/iman-back.webp",
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    type: "Simple",
    image: "/src/assets/img/home/iman-back.webp",
    description: "The Beach Bum is perfect for ...",
  },
  {
    id: 3,
    name: "Reliable Red",
    price: 100,
    type: "Luxury",
    image: "/src/assets/img/home/iman-back.webp",
    description: "The Reliable Red is perfect for ...",
  },
  {
    id: 4,
    name: "Dreamfinder",
    price: 65,
    type: "Simple",
    image: "/src/assets/img/home/iman-back.webp",
    description: "The Dreamfinder is perfect for ...",
  },
  {
    id: 5,
    name: "The Cruiser",
    price: 120,
    type: "Luxury",
    image: "/src/assets/img/home/iman-back.webp",
    description: "The Cruiser is perfect for ...",
  },
  {
    id: 6,
    name: "Green Wonder",
    price: 70,
    type: "Rugged",
    image: "/src/assets/img/home/iman-back.webp",
    description: "The Green Wonder is perfect for ...",
  },
];

const Vans = () => {
  const Header = () => {
    return (
      <header>
        <h1>#CarRental</h1>
        <nav>
          <span>About</span>
          <span>Vans</span>
        </nav>
      </header>
    );
  };

  const VanCard = ({ van }) => {
    return (
      <div className="van-card">
        <img src={van.image} alt={van.name} />
        <div>
          <h3>{van.name}</h3>
          <p>${van.price}/day</p>
          <span className={`tag ${van.type}`}>{van.type}</span>
        </div>
      </div>
    );
  };

  const VanDetail = ({ van }) => {
    return (
      <section className="van-detail">
        <img src={van.image} alt={van.name} />
        <div>
          <span className={`tag ${van.type}`}>{van.type}</span>
          <h2>{van.name}</h2>
          <p>${van.price}/day</p>
          <p>{van.description}</p>
          <button className="rent-button">Rent this van</button>
        </div>
      </section>
    );
  };

  const VanList = () => {
    return (
      <section className="van-list">
        <h2>Explore our van options</h2>
        <div className="filters">
          <button className="filter">Simple</button>
          <button className="filter">Luxury</button>
          <button className="filter">Rugged</button>
          <button className="clear-filters">Clear filters</button>
        </div>
        <div className="vans">
          {vans.map((van) => (
            <VanCard key={van.id} van={van} />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div>
      <Header />
      <VanList />
    </div>
  );
};

export default Vans;
