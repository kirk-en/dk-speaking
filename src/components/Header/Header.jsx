import { Web, X, LinkedIn } from "@mui/icons-material";
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
        <section className="header__social">
          <a
            href="https://www.instagram.com/stylewithden/"
            className="header__social-icon"
          >
            <X />
          </a>
          <a href="" className="header__social-icon">
            <LinkedIn sx={{ fill: "whitesmoke" }} />
          </a>
          <a href="" className="header__social-icon">
            <Web sx={{ fill: "whitesmoke" }} />
          </a>
        </section>
      </header>
    </>
  );
};

export default Header;
