import { Link } from 'react-router-dom';
import './Navigation.scss';

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
          <Link to="/coaching" className="nav__link">
            coaching
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/speaking" className="nav__link">
            for organizations
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/book" className="nav__link">
            my book
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/testimonials" className="nav__link">
            testimonials
          </Link>
        </li>
        <li className="nav__list-item">
          <Link to="/contact" className="nav__link">
            contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigation;
