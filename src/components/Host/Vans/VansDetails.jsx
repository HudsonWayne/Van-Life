import VansPhotos from "./VansPhotos";
import VansPricing from "./VansPricing";
import './Vans-Details.css'
const VansDetails = () => {
  return (
    <div>
      <div className="container">
        <ul>
          <Link to="./Dashboard">Dashboard</Link>
          <Link to="./Income">Income</Link>
          <Link to="./Vans">Vans</Link>
          <Link to="./Reviews">Reviews</Link>

          <a href="">Reviews</a>
        </ul>
        <div className="back">
          <li>
            <Link to="./Vans">Back to all vans</Link>
          </li>
        </div>

        <div className="van-card">
          <div className=" image-text ">
            <div className="container">
              <div className="row">
                <div className="first">
                  <div className="image-container col-md-6">
                    <img src={Image} alt="Car" />
                  </div>
                  <div className="text-container col-md-6">
                    <button>Simple</button>

                    <h2>Modest Explorer</h2>
                    <p>
                      <span>$60</span>/day
                    </p>
                  </div>
                </div>

                <ul>
                  <a href="" className="dd">
                    Details
                  </a>
                  <li>
                    <Link to="./VansPricing">VansDetails</Link>
                  </li>
                  <li>
                    <Link to="./VansPhotos">VansPhotos</Link>
                  </li>
                  <li>
                    <Link to="./VansPhotos">VansPhotos</Link>
                  </li>
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
      </div>
    </div>
  );
};

export default VansDetails;
