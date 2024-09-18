import { Menu } from "@mui/icons-material";
import { useState } from "react";
import "./NavigationMobile.scss";

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Menu
        className="mobile-nav__open"
        onClick={() => {
          console.log("mobile menu button clicked!!!");
        }}
      />
    </>
  );
};

export default NavigationMobile;
