import image from "../../../assets/Modest_Explorer rent.jpg"
import { Link } from "react-router-dom";
import './Vans-Details.css'
const VansDetails = () => {
  return (
        <div className="container">
        <ul className="link">
            <li><Link to="./Dashboard">Dashboard</Link></li>
            <li><Link to="./Income">Income</Link></li>
            <li><Link to="./Vans">Vans</Link></li>
            <li><Link to="./Reviews">Vans</Link></li>
    
        </ul>
        <div className="back">
            <li><Link to="./Vans">Back to all Vans</Link></li>
          
        </div>

        <div className="van-card">
          <div className=" image-text ">
            <div className="container">
              <div className="row">
                <div className="first">
                  <div className="image-container col-md-6">
                    <img src={image} alt="img" />
                  
                  </div>
                  <div className="text-container col-md-6">
                    <button className="bnt9"> Simple</button>

                    <h2>Modest Explorer</h2>
                    <p>
                      <span>$60</span>/day
                    </p>
                  </div>
                </div>
            </div>
            
                            <ul className="link">
            
                              <li><Link to='./VansDetails' class="details">Details</Link></li>
                              <li><Link to='./VansPhotos'>Photos</Link></li>
                              <li><Link to='./VansPricing'>Pricing</Link></li>
                              
                            </ul>
                            <div className="description-text">
                              <p>
                                <span>Name</span>: Modest Explorer
                              </p>
                              <p>
                                <span>Category</span>: Simple
                              </p>
                              <p>
                                <span>Description</span> : The Modest Explorer is a van
                                designed to get you out of the house and into nature. This
                                beauty is equipped with solar panels, a composting toilet, a
                                water tank and kitchenette. The idea is that you can pack up
                                your home and escape for a weekend or even longer
                              </p>
                              <p>
                                <span>Visibility</span>: Public
                              </p>
                            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default VansDetails;