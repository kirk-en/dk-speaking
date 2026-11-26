import dkLogo from '../../assets/ils-logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.scss';
import SocialIcons from '../SocialIcons/SocialIcons';
import NavigationMobile from '../NavigationMobile/NavigationMobile';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            src={dkLogo}
            alt="Ivy Level Speaking shield logo"
            className="header__logo"
          />
        </Link>
        <nav>
          <div className="header__nav--standard">
            <Navigation withDropdown />
          </div>
          <div className="header__nav--mobile">
            <NavigationMobile />
          </div>
        </nav>

        <div className="header__nav--standard">
          <SocialIcons />
        </div>
      </header>
    </>
  );
};

export default Header;
