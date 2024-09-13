import { Web, X, LinkedIn, Instagram } from "@mui/icons-material";
import dkLogo from "../../assets/dk-logo.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";
import SocialIcons from "../SocialIcons/SocialIcons";

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
          <Navigation />
        </nav>
        <SocialIcons />
      </header>
    </>
  );
};

export default Header;
