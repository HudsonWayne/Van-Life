import image from "../../../assets/Modest_Explorer rent.jpg";
import "./VansPricing.css";
import { Link } from "react-router-dom";

const VansPricing = () => {
  return (
    <div className="container">
      <div className="link">
        <ul>
          <li>
            <Link to="./Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="./Income">Income</Link>
          </li>
          <li>
            <Link to="./Vans">Vans</Link>
          </li>
          <li>
            <Link to="./Reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <div className="back">
        <Link to="">Back to all vans</Link>
      </div>

      <div className="van-card">
        <div className="image-text">
          <div className="container">
            <div className="row">
              <div className="first">
                <div className="image-container col-md-6">
                  <img src={image} alt="Modest Explorer" />
                </div>
                <div className="text-container col-md-6">
                  <button>Simple</button>
                  <h2 className="text">Modest Explorer</h2>
                  <p>
                    <span>$60</span>/day
                  </p>
                </div>
              </div>
            </div>
            <div className="photos-section">
              <ul>
                <li>
                  <Link to="" className="dd">
                    Details
                  </Link>
                </li>
                <li>
                  <Link to="" className="price">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="">Photos</Link>
                </li>
              </ul>
              <div className="prices-tag">
                <h2>
                  <span>$60</span>/day
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
