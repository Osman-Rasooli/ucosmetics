import React from "react";
import classes from "./Hero.module.css";
import hero from "../../assets/hero.png";
import { RiShoppingBag3Fill } from "react-icons/ri";
const Hero = () => {
  return (
    <div className={classes.container}>
      {/* Left Side */}
      <div className={classes.h_sides}>
        <span>skin protection cream</span>
        <div className={classes.text2}>
          <span>Trendy Collections</span>
          <span>
            Seedily say has suitable disposal and boy. Excersie man child
            rejoiced.
          </span>
        </div>
      </div>
      {/* Middle section */}
      <div className={classes.wrapper}>
        <div className={classes.blueCircle}></div>
        <img src={hero} alt="Hero" width={600} />
        <div className={classes.cart2}>
          <RiShoppingBag3Fill />
          <div className={classes.signUp}>
            <span>Best SignUp Offers</span>
            <div></div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className={classes.h_sides}>
        <div className={classes.traffic}>
          <span>100k</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={classes.customers}>
          <span>10k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
