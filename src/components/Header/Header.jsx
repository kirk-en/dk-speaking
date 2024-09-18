import { Web, X, LinkedIn, Instagram } from "@mui/icons-material";
import dkLogo from "../../assets/dk-logo.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
import { colors } from "@mui/material";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="/">
          <img
            src={dkLogo}
            alt='The initials "D" "K" inside a circle colored blue and grey'
            className="header__logo"
          />
        </a>
        <nav>
          <div className="header__nav--standard">
            <Navigation />
          </div>
          <div>
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
