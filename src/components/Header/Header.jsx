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
      </header>
    </>
  );
};

export default Header;
