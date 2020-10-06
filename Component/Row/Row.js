import React from "react";
import classes from "./Row.module.css";
import Button from "../UI/Button/Button";
function Row() {
  return (
    <div className={classes.row}>
      <div className={classes.rowRight}>
        <h2>
          در خانه بمانید و از طریق وبسایت کسب و کار آنلاین خود را با قدرت ادامه
          دهید
        </h2>
        <p>
          وبسایت شما دفتر کار مجازی و ویترین محصولات و خدمات شماست. کسب و کار
          خود همیشه در دسترس و فعال نگه دارید
        </p>
        <div className={classes.btns}>
          <Button color={"btnRed"} width={"250px"}>
            درخواست طراحی سایت
          </Button>
          <Button color={"btnBlue"} width={"200px"}>
            مشاوره رایگان
          </Button>
        </div>
      </div>
      <div className={classes.rowImg}>
        <img src="/images/rowImage.png" alt="طراحی سایت تاپ دیزاین" />
      </div>
    </div>
  );
}

export default Row;
