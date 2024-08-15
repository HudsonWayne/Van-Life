
import image from "../../../assets/Modest_Explorer rent.jpg";
import "./VansPhotos.css";
import { Link } from "react-router-dom";
import Vans from "./VansHome";
import HostNavbar from "../HostNavbar.jsx";
import Simple from "../../../assets/Modest_Explorer rent.jpg";
import Beach from "../../../assets/Beach_Bum.jpg";
import Reliable from "../../../assets/Reliable_Red.jpg";
import './VansPhotos.css'

const VansPhotos = () => {
 
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

                  <div className="link">
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
                  </div>
                  <div className="back">
                    <a href="">Back to all vans</a>
                  </div>

                  <div className="van-card">
                    <div className=" image-text ">
                      <div className="container">
                        <div className="row">
                          <div className="first">
                            <div className="image-container col-md-6">
                              {/* <img src="./image/Rectangle 162.png" alt=""> */}
                              <img src={image} alt="Car" />
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
                            <Link to="/VansPhotos" className="photo"></Link>
                            Photos
                          </li>
                        </ul>
                        <div className="image" key={van.id}>
                          ${van.photos}
                          <div className="photos-section">
                            <ul>
                              <a href="" className="dd">
                                Details
                              </a>
                              <a href="">Pricing</a>
                              <li>
                                <Link
                                  to="./VansPhotos"
                                  className="photo"
                                ></Link>
                                Photos
                              </li>
                            </ul>
                            <div className="image">
                              {/* <img src="./image/Rectangle 162.png" alt=""> */}
                              <img src={image} alt="car" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VansPhotos;