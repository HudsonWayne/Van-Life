import image from "../../../assets/Modest_Explorer rent.jpg";
import { Link } from "react-router-dom";
import "./Vans-Details.css";
import "./vans"
import HomeVan from "./VansHome"
import HostNavbar from "../HostNavbar";

const VansDetails = () => {
   {
     vans.map((van) => <vans key={van.id} van={van} />);
   }
  return (
    <div className="container">
      <HostNavbar />
      <div className="back">
        <Link to="/Vans">Back to all vans</Link>
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
                  <h2>{van.name}</h2>
                  <p>
                    <span>{van.price}</span>/day
                  </p>
                </div>
              </div>
            </div>

            <ul className="link">
              <li>
                <Link to="./VansDetails" className="details">
                  Details
                </Link>
              </li>
              <li>
                <Link to="./VansPhotos">Photos</Link>
              </li>
              <li>
                <Link to="./VansPricing">Pricing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VansDetails;
