import image from "../../../assets/Modest_Explorer rent.jpg";
import "./VansPhotos.css";
import { Link } from "react-router-dom";
// import vans from "./vans";
import Vans from "./VansHome";
import HostNavbar from "../HostNavbar";

const VansPhotos = () => {
  {
    vans.map((van) => <vans key={van.id} van={van} />);
  }
  return (
    <div className="container">
      <HostNavbar />
      <div className="back">
        <a href="/Vans">Back to all vans</a>
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
                  <button className="bnt9">{van.category}</button>
                  <h2>{van.name}</h2>
                  <p>
                    <span>{van.price}</span>/day
                  </p>
                </div>
              </div>
            </div>
            <div className="photos-section">
              <ul>
                <a href="/VansDetails" className="dd">
                  Details
                </a>
                <a href="/VansPricing">Pricing</a>
                <li>
                  <Link to="./VansPhotos" className="photo"></Link>Photos
                </li>
              </ul>
              <div className="image">
                key={van.id} ${van.photos}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VansPhotos;
