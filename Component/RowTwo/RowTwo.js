import React from "react";
import classes from "./RowTwo.module.css";
import Box from "../Box/Box";
import WebIcon from "@material-ui/icons/Web";
import Button from "../UI/Button/Button";

function RowTwo() {
  const iconStyle = { fontSize: 110, color: "#46A6AF", paddingTop: "20" };
  return (
    <div className={classes.row}>
      <Box
        icon={<WebIcon style={iconStyle} />}
        heading={"طراحی سایت"}
        para={"طراحی انواع سایت فروشگاهی،وبلاگی ،شرکتی، خبری همراه با آموزش"}
      />

      <Box
        icon={<WebIcon style={iconStyle} />}
        heading={"پشتیبانی سایت"}
        para={"تعمیر،سفارش سازی،افزایش امنیت،بهینه سازی کردن و رفع خطا"}
      />
      <Box
        icon={<WebIcon style={iconStyle} />}
        heading={"طراحی سایت اختصاصی"}
        para={
          "طراحی سایت با استفاده از فریم ورک محبوب جاوا اسکیرپت به نام ری اکت که پر سرعت ترین سایت ها را به ارمغان می آورد"
        }
      />
      <div className={classes.row}>
        <Box
          icon={<WebIcon style={iconStyle} />}
          heading={"گرافیک سایت"}
          para={
            "با طراحی عناصر گرافیکی زیبا و حرفه ای بازدیدکنندگان و مشتریان وب سایت و سوشال خود مسحور کنید"
          }
        />
        <Box
          icon={<WebIcon style={iconStyle} />}
          heading={"گرافیک سایت"}
          para={
            "با طراحی عناصر گرافیکی زیبا و حرفه ای بازدیدکنندگان و مشتریان وب سایت و سوشال خود مسحور کنید"
          }
        />
        <Box
          icon={<WebIcon style={iconStyle} />}
          heading={"گرافیک سایت"}
          para={
            "با طراحی عناصر گرافیکی زیبا و حرفه ای بازدیدکنندگان و مشتریان وب سایت و سوشال خود مسحور کنید"
          }
        />
      </div>
      <div className={classes.rowTwo}>
        <div className={classes.text}>
          <h3>طراحی وب سایت شما معرف هویت برند شماست</h3>
          <h2>خدمات طراحی سایت اختصاصی (VIP)</h2>
          <p>
            طراحی وب سایت اختصاصی و حرفه ای می تواند تاثیر بسیاری در رونق کسب و
            کار شما داشته باشد و جزء لاینفک تعریف هویت برند شما محسوب گردد. ما
            اینجاییم تا با طراحی وب سایت اختصاصی طی یک فرآیند بهینه و هدفمند،
            شما را از رقبایتان متمایز کنیم.
          </p>
          <Button color={"btnBlue"} width={"100px"}>
            طراحی وب سایت اختصاصی
          </Button>
        </div>
        <div className={classes.img}>
          <img src="/images/rowTwo.png" alt="rowtwo" />
        </div>
      </div>
    </div>
  );
}

export default RowTwo;
