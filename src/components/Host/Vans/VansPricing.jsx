import image from '../../../assets/Modest_Explorer rent.jpg'

const VansPricing = () => {
  return (
    <div>
      <div className="container">
        <ul>
          <a href="">Dashboard</a>
          <a href="">Income</a>
          <a href="" className="vans-link">
            Vans
          </a>
          <a href="">Reviews</a>
        </ul>
        <div className="back">
          <a href="">Back to all vans</a>
        </div>

        <div className="van-card">
          <div className=" image-text container">
            <div className="row">
              <div className="image-container col-md-6">
                <img src={image}alt="Car" />
              </div>

              <div className="pricing">
                <p>
                  <span>$60</span>/day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VansPricing;
