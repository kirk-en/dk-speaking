import { Link } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <>
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/about" className="nav__link">
            about
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="" className="nav__link">
            speaking
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="" className="nav__link">
            coaching
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="#" className="nav__link">
            contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
