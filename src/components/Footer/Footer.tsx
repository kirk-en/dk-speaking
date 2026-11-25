import Navigation from '../Navigation/Navigation';
import dkLogo from '../../assets/ils-logo.png';
import SocialIcons from '../SocialIcons/SocialIcons';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__element footer__element--nav">
        <Navigation />
      </div>
      <Link to="/">
        <img
          src={dkLogo}
          alt="Ivy Level Speaking shield logo"
          className="footer__logo"
        />
      </Link>
      <div className="footer__element">
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
