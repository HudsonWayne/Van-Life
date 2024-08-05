import image from "../../../assets/Modest_Explorer rent.jpg";
import './VansPhotos.css'

const VansPhotos = () => {
  return (
    <div class="container">
        <div class="link">
            <li><Link to='./Dashboard'>Dashboard</Link></li>
            <li><Link to='./Income'>Income</Link></li>
            <li><Link to='./Vans'>Vans</Link></li>
            <li><Link to='./Reviews'>Reviews</Link></li>
          
        </div>
        <div class="back">
          <a href="">Back to all vans</a>
        </div>

        <div class="van-card">
          <div class=" image-text ">
            <div class="container">
              <div class="row">
                <div class="first">
                  <div class="image-container col-md-6">
                      {/* <img src="./image/Rectangle 162.png" alt=""> */}
                    <img src={image} alt="Car" /> 
                  </div>
                  <div class="text-container col-md-6">
                    <button>Simple</button>

                    <h2 class="text">Modest Explorer</h2>
                    <p>
                      <span>$60</span>/day
                    </p>
                  </div>
                </div>

              </div>
              <div class="photos-section">
                
                <ul>
                  <a href="" class="dd">
                    Details
                  </a>
                  <a href="">Pricing</a>
                  <li><Link to="./VansPhotos" class="photo"></Link>Photos</li>
                </ul>
                <div class="image">
                      {/* <img src="./image/Rectangle 162.png" alt=""> */}
                   <img src={image} alt="car" /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
  );
};

export default VansPhotos;
