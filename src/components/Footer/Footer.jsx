import Navigation from "../Navigation/Navigation";
import dkLogo from "../../assets/dk-logo.png";
import SocialIcons from "../SocialIcons/SocialIcons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__element footer__element--nav">
        <Navigation />
      </div>
      <a href="/">
        <img
          src={dkLogo}
          alt='The initials "D" "K" inside a circle colored blue and grey'
          className="footer__logo"
        />
      </a>
      <div className="footer__element">
        <SocialIcons className="footer__element--social" />
      </div>
    </footer>
  );
};

export default Footer;
