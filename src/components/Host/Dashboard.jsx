import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Beach from "../../assets/Beach_Bum photos.jpg";
import Green from "../../assets/Green_Wonder photos.jpg";
import Modest from "../../assets/Modest_Explorer photos.jpg";

const Dashboard = () => {
  const vans = [
    {
      image: Modest,
      name: "Modest Explorer",
      price: "$60/day",
    },
    {
      image: Beach,
      name: "Beach Bum",
      price: "$80/day",
    },
    {
      image: Green,
      name: "Green Wonder",
      price: "$70/day",
    },
  ];
  return (
    <div className="dashboard sm:block md:hidden">
      <main className="dashboardContent">
        <div className="dashboardContainer">
          <div className="dashboardLinks">
            <ul>
              <li>Dashboard</li>
              <li>Income</li>
              <li>Vans</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div className="dashboardMain">
            <div className="dashboardHeading container">
              <h1>Welcome!</h1>
              <div className="div">
                <p>
                  Income last <span>30 days</span>
                </p>
                <button
                  className="errorBtn"
                  onClick={() => {
                    window.location.href = "/";
                  }}
                >
                  Details
                </button>
              </div>
              <h2>$2,280</h2>
            </div>
            <div className="dashboardReview container">
              <div className="dashboardReviewScore">
                <h3>Review score</h3>
                <h5 className="review">
                  5.0<span>/5</span>
                </h5>
              </div>
              <button
                className="errorBtn"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                Details
              </button>
            </div>
            <div className="dashboardListedVans container">
              <h3>Your listed vans</h3>
              <button
                className="errorBtn"
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                View all
              </button>
            </div>
            {vans.map((van, index) => (
              <div className="dashboardVan">
                <div className="dashboardPictureDetails">
                  <img
                    src={van.image}
                    alt={van.name}
                    className="dashboardImages"
                  />
                  <div className="dashboardVanDetails">
                    <h3>{van.name}</h3>
                    <p>{van.price}</p>
                  </div>
                </div>
                <button>Edit</button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard
