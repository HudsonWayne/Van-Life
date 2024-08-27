
import image from "../../../assets/Modest_Explorer rent.jpg";
import "./VansPhotos.css";
import { Link } from "react-router-dom";
// import vans from "./vans";
import Vans from "./VansHome";
import HostNavbar from "../HostNavbar";
import Simple from "../../../assets/Modest_Explorer rent.jpg";
import Beach from "../../../assets/Beach_Bum.jpg";
import Reliable from "../../../assets/Reliable_Red.jpg";

const VansPhotos = () => {
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

   const vans = [
     {
       id: 1,
       image: Simple,
       name: "Modest ",
       Category: "Simple",
       Description:
         "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
       Visibility: " Public",
     },
     {
       id: 2,

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
        <div className=" image-text ">
          <div className="container">
            <div className="row">
              <div className="first">
                <div className="image-container col-md-6">
                  <img key={van.id} src={van.image} alt="Modest Explorer" />
                </div>
                <div className="text-container col-md-6">
                  <button className="bnt9" key={van.id}>
                    {van.category}
                  </button>
                  <h2 key={van.id}>{van.name}</h2>
                  <p>
                    <span key={van.id}>{van.price}</span>/day
                  </p>
                </div>
              </div>
            </div>
            <div className="photos-section">
              <ul>
                <li>
                  <Link to="/VansDetails">Details</Link>
                </li>
                <li>
                  <Link to="/VansPricing">Pricing</Link>
                </li>

                <li>
                  <Link to="/VansPhotos" className="photo"></Link>Photos
                </li>
              </ul>
              <div className="image" key={van.id}>
                ${van.photos}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VansPhotos;
