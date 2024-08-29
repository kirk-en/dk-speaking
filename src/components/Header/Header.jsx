import { Instagram } from "@mui/icons-material";
import dkLogo from "../../assets/dk-logo.png";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

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
        {/* <div>social media icons</div> */}
        <a href="https://www.instagram.com/stylewithden/">
          <Instagram></Instagram>
        </a>
      </header>
    </>
  );
};

export default Header;
