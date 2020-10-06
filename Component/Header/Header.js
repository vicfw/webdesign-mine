import React from "react";
import classes from "./Header.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PersonIcon from "@material-ui/icons/Person";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import HeadsetIcon from "@material-ui/icons/Headset";
import EmailIcon from "@material-ui/icons/Email";
import Button from "../UI/Button/Button";
import HeaderItems from "./HeaderItems/HeaderItems";
import Logo from "../UI/Logo/Logo";

function Header(props) {
  return (
    <React.StrictMode>
      <div className={classes.headerTop}>
        <div className={classes.shop}>
          <ShoppingCartIcon />
        </div>
        <div className={classes.login}>
          <PersonIcon />
        </div>
        <div className={classes.contact}>
          <p>۰۹۰۲۱۳۶۷۶۹۲</p>
          <PhoneAndroidIcon />
        </div>
        <div className={classes.contact}>
          <p> ۰۲۱-۲۲۸۹۹۰۸۷</p>
          <HeadsetIcon />
        </div>
        <div className={classes.contact}>
          <p>Support@Farid.com </p>
          <EmailIcon />
        </div>
      </div>

      <div className={classes.headerMain}>
        <Logo />

        <ul className={classes.headerList}>
          <HeaderItems>خانه</HeaderItems>
          <HeaderItems>مقالات </HeaderItems>
          <HeaderItems>خدمات</HeaderItems>
          <HeaderItems>تعرفه و امکانات</HeaderItems>
          <HeaderItems>نمونه کارها</HeaderItems>
        </ul>
        <Button color={"btnRed"} width={"200px"} height={"35px"}>
          درخواست طراحی سایت
        </Button>
      </div>
    </React.StrictMode>
  );
}

export default Header;
