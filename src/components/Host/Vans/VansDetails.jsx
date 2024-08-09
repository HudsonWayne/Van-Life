import image from "../../../assets/Modest_Explorer rent.jpg";
import { Link } from "react-router-dom";
import "./Vans-Details.css";
import "./vans";
import HomeVan from "./VansHome";
import HostNavbar from "../HostNavbar";
import Simple from "../../../assets/Modest_Explorer rent.jpg";
import Beach from "../../../assets/Beach_Bum.jpg";
import Reliable from "../../../assets/Reliable-Red.jpg";

const VansDetails = () => {
  

  const vans = [
    {
      id: 1,
      price: 60,
      image: Simple,
      name: "Modest ",
      Category: "Simple",
      Description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      Visibility: " Public",
    },
    {
      id: 2,
      price: 80,
      image: Beach,
      name: "Beach Bum ",
      Category: "Rugged",
      Description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      Visibility: " Public",
    },
    {
      id: 3,
      image: Reliable,
      name: "Reliable Red ",
      Category: "Luxury",
      price: 100,
      Description:
        "Reliable Red is a van that was made for traveling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      Visibility: " Public",
    },
  ];
  {
    vans.map((van) => <vans key={van.id} van={van} />);
  }
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
                    <span key={van.id}>${van.price}</span>/day
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
    </div>
  );
};

export default VansDetails;
