import React from "react";
import classes from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
        <span>Amazon</span>
      </div>
      <div className={classes.right}>
        <div className={classes.menu}>
          <ul className={classes.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={classes.search} />
        <RiShoppingCart2Fill className={classes.cart} />
      </div>
    </div>
  );
};

export default Header;
