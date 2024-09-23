import { Web, X, LinkedIn, Instagram } from "@mui/icons-material";
import dkLogo from "../../assets/ils-logo.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
import { colors } from "@mui/material";
import NavigationMobile from "../NavigationMobile/NavigationMobile";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img
            src={dkLogo}
            alt='The initials "D" "K" inside a circle colored blue and grey'
            className="header__logo"
          />
        </Link>
        <nav>
          <div className="header__nav--standard">
            <Navigation />
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
