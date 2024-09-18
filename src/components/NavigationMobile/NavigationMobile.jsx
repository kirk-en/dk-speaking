import { Menu } from "@mui/icons-material";
import { useState } from "react";
import "./NavigationMobile.scss";
import { Drawer } from "@mui/material";
import Navigation from "../Navigation/Navigation";

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
            <a href="#" className="mobile-nav__link">
              about
            </a>
          </li>
          <li className="mobile-nav__list-item">
            <a href="#" className="mobile-nav__link">
              speaking
            </a>
          </li>
          <li className="mobile-nav__list-item">
            <a href="#" className="mobile-nav__link">
              coaching
            </a>
          </li>
          <li className="mobile-nav__list-item">
            <a href="#" className="mobile-nav__link">
              contact
            </a>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default NavigationMobile;
