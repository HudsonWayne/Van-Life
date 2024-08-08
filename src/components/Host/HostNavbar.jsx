
import { Link } from "react-router-dom";

const HostNavbar = () => {
  return (
    <div className="dashboardLinks">
      <ul>
        <li>
          <Link to="/Host">Dashboard</Link>
        </li>
        <li>
          <Link to="/Host/Income">Income</Link>
        </li>
        <li>
          <Link to="../Login.jsx">Vans</Link>
        </li>
        <li>
          <Link to="/Host/Reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};

export default HostNavbar;
