import { Link } from 'react-router-dom';
import './Navigation.scss';

export const coachingLinks = [
  { to: '/coaching', label: 'All coaching' },
  { to: '/coaching/presentations', label: 'Presentations and pitches' },
  { to: '/coaching/academic', label: 'Academic job talks' },
  { to: '/coaching/nyc', label: 'New York City' },
  { to: '/coaching/boston', label: 'Boston area' },
  { to: '/coaching/students', label: 'Students' },
];

const Navigation = ({ withDropdown = false }: { withDropdown?: boolean }) => {
  return (
    <>
      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/about" className="nav__link">
            about
          </Link>
        </li>
        <li
          className={`nav__list-item${withDropdown ? ' nav__list-item--has-menu' : ''}`}
        >
          <Link to="/coaching" className="nav__link">
            coaching
          </Link>
          {withDropdown && (
            <ul className="nav__menu" aria-label="Coaching pages">
              {coachingLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="nav__menu-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
