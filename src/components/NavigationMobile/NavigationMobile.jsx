import { Menu } from "@mui/icons-material";
import { useState } from "react";
import "./NavigationMobile.scss";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu
        className="mobile-nav__open"
        onClick={() => {
          setOpen(true);
        }}
        sx={{ width: 35, height: 35 }}
      />
      <Drawer
        open={open}
        anchor="top"
        className="mobile-nav"
        onClose={() => setOpen(false)}
      >
        <ul className="mobile-nav__list">
          <li className="mobile-nav__list-item">
            <Link to="/about" className="mobile-nav__link">
              about
            </Link>
          </li>
          <li className="mobile-nav__list-item">
            <Link to="/coaching" className="mobile-nav__link">
              coaching
            </Link>
          </li>
          <li className="mobile-nav__list-item">
            <Link to="/speaking" className="mobile-nav__link">
              speaking
            </Link>
          </li>
          <li className="mobile-nav__list-item">
            <Link to="/contact" className="mobile-nav__link">
              contact
            </Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default NavigationMobile;
