import image from "../../../assets/Modest_Explorer rent.jpg";

const VansPhotos = () => {
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
          <div className=" image-text ">
            <div className="container">
              <div className="row">
                <div className="first">
                  <div className="image-container col-md-6">
                    <img src={image} alt="Car" />
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
                  <a href="">Pricing</a>
                  <a href="">Photos</a>
                </ul>
                <div className="image">
                  <img src={image} alt="" />
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
