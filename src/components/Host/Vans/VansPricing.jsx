import image from "../../../assets/Modest_Explorer rent.jpg";
import HostNavbar from "../HostNavbar";
import "./VansPricing.css";
import VansHome from "./VansHome";
import Navbar from "../HostNavbar";
import { Link } from "react-router-dom";
import Simple from "../../../assets/Modest_Explorer rent.jpg";
import Beach from "../../../assets/Beach_Bum.jpg";
import Reliable from "../../../assets/Reliable_Red.jpg";

const VansPricing = () => {
 

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
                  <Link to="/VansDetails" className="dd">
                    Details
                  </Link>
                </li>
                <li>
                  <Link to="/VansPricing" className="price">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/VansPhotos">Photos</Link>
                </li>
              </ul>
              <div className="prices-tag">
                <h2>
                  <span key={van.id}>${van.price}</span>
                  /day
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VansPricing;

