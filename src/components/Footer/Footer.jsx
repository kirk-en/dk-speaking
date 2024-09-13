import Navigation from "../Navigation/Navigation";
import dkLogo from "../../assets/dk-logo.png";


const Footer = () => {
  return (
    <footer>
      <Navigation />
      <a href="/">
          <img
            src={dkLogo}
            alt='The initials "D" "K" inside a circle colored blue and grey'
            className="header__logo"
          />
        </a>
    </footer>


export default Footer