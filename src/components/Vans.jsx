import { useState } from "react";

const vans = [
  {
    id: 1,
    name: "Modest Explorer",
    price: 60,
    type: "Simple",
    description:
      "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
    image: "/src/assets/img/image 2.png",
  },
  {
    id: 2,
    name: "Beach Bum",
    price: 80,
    type: "Rugged",
    description:
      "The Beach Bum is perfect for seaside adventures, featuring a surfboard rack and ample storage for beach gear.",
    image: "/src/assets/img/image 3.png",
  },
  {
    id: 3,
    name: "Reliable Red",
    price: 100,
    type: "Luxury",
    description:
      "Reliable Red offers the utmost comfort and reliability with luxurious interiors and modern amenities.",
    image: "/src/assets/img/image 4.png",
  },
  {
    id: 4,
    name: "Dreamfinder",
    price: 65,
    type: "Simple",
    description:
      "The Dreamfinder is ideal for those looking for a simple, no-frills camping experience with basic amenities.",
    image: "/src/assets/img/image 5.png",
  },
  {
    id: 5,
    name: "The Cruiser",
    price: 120,
    type: "Luxury",
    description:
      "The Cruiser is a top-of-the-line van with high-end features and comfort for the ultimate road trip.",
    image: "/src/assets/img/Rectangle 154.png",
  },
  {
    id: 6,
    name: "Green Wonder",
    price: 70,
    type: "Rugged",
    description:
      "Green Wonder is built for rugged adventures, with off-road capabilities and robust design.",
    image: "/src/assets/img/image 6.png",
  },
];

const VanCard = ({ van, onSelect }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden">
      <button onClick={() => onSelect(van)} className="w-full text-left">
        <img
          src={van.image}
          alt={van.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">{van.name}</h3>
            <span
              className={`tag px-3 py-1 rounded-md ${
                van.type === "Simple"
                  ? "bg-yellow-500 text-white"
                  : van.type === "Luxury"
                  ? "bg-black text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {van.type}
            </span>
          </div>
          <p className="text-gray-500">${van.price}/day</p>
        </div>
      </button>
    </div>
  );
};

const VanListDetail = () => {
  const [filter, setFilter] = useState(null);
  const [selectedVan, setSelectedVan] = useState(null);

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
    <section className="p-8 bg-gray-100 min-h-screen">
      {selectedVan ? (
        <div className="max-w-2xl mx-auto">
          <nav className="mb-4">
            <button
              onClick={() => setSelectedVan(null)}
              className="text-gray-600 hover:underline"
            >
              ← Back to all vans
            </button>
          </nav>
          <img
            src={selectedVan.image}
            alt={selectedVan.name}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <div className="bg-white p-6 rounded-md shadow-md">
            <span
              className={`tag px-3 py-1 rounded-md mb-2 inline-block ${
                selectedVan.type === "Simple"
                  ? "bg-yellow-500 text-white"
                  : selectedVan.type === "Luxury"
                  ? "bg-black text-white"
                  : "bg-green-500 text-white"
              }`}
            >
              {selectedVan.type}
            </span>
            <h1 className="text-3xl font-bold mb-2">{selectedVan.name}</h1>
            <p className="text-xl text-gray-700 mb-4">
              ${selectedVan.price}/day
            </p>
            <p className="text-gray-600 mb-4">{selectedVan.description}</p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md">
              Rent this van
            </button>
          </div>
          <footer className="text-center mt-8 text-gray-600">
            <p>© {new Date().getFullYear()} #VANLIFE</p>
          </footer>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Explore our van options</h2>
          <div className="flex space-x-4 mb-4">
            <button
              className="filter bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
              onClick={() => handleFilterClick("Simple")}
            >
              Simple
            </button>
            <button
              className="filter bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md"
              onClick={() => handleFilterClick("Luxury")}
            >
              Luxury
            </button>
            <button
              className="filter bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              onClick={() => handleFilterClick("Rugged")}
            >
              Rugged
            </button>
            <button
              className="clear-filters text-gray-600 underline"
              onClick={clearFilters}
            >
              Clear filters
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVans.map((van) => (
              <VanCard key={van.id} van={van} onSelect={setSelectedVan} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default VanListDetail;
