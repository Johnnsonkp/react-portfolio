import "./Frame.css";

import { CodeIcon, Customise, Love, Pixel } from "../../utils/icons/icons";
import React, { useEffect, useState } from "react";

import { Card } from "antd";
import Icon from "@ant-design/icons";
import LightDark from "../light-dark-mode";
import { Processes } from "../textContent/process";
import { TechStackContainer } from "../../utils/icons/icons";
// import bannerBackgroundImage from "public/std-banner.svg";
import { useWindowSize } from "../../utils/utilFunctions";

export const DisplayCircle = (props) => {
  const styles = {
    image: {
      height: props.height + "px",
      width: props.width + "px",
      borderRadius: "300px",
      border: "10px solid #f5f5f5",
      boxShadow: props.boxShodow ? "12px 12px 2px 1px rgb(0 0 0 / 8%)" : null,
    },
  };
  return (
    <a className={props.outlineClass} href={props.link}>
      <img
        className={props.imgClass}
        src={props.pic}
        alt=""
        style={styles.image}
      />
    </a>
  );
};

export const TrustBar = (props) => {
  const { Meta } = Card;

  const initialQuizItem = [
    {
      question: "First quiz item",
      correct_answer: "First quiz answer",
      incorrect_answers: ["incorrect 1", "incorrect 2", "incorrect 3"],
    },
  ];

  const [data, setData] = useState(initialQuizItem);
  const CodeIconVar = (props) => <Icon component={CodeIcon} {...props} />;
  const CustomiseVar = (props) => <Icon component={Customise} {...props} />;
  const WithLove = (props) => <Icon component={Love} {...props} />;
  const PixelPerfect = (props) => <Icon component={Pixel} {...props} />;

  useEffect(() => {
    fetch("home.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const CardContainers = (props) => {
    let size = useWindowSize();
    console.log("props:", props);
    return (
      <div
        style={{
          width: size.width > 570 ? "20%" : "100%",
          height: size.width < 570 && "160px",
          fontSize: size.width <= 900 ? "12px" : "14px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#111",
          padding: "20px",
          border: "1px solid #f9f9f9",
          border: "1px solid #eee",
          background: "#f9f9f9",
          backgroundImage: "url(std-banner.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          margin: "10px",
        }}
        key={props.key}
      >
        <props.Icon />
        <div style={{ marginTop: "25px" }}>World-Class Development</div>
      </div>
    );
  };

  // const trustIcons = [CodeIconVar, CustomiseVar, WithLove, PixelPerfect];
  // const trustIcons = {
  //   "World-Class Development": CodeIconVar,
  //   "Tailored To Your Needs": CustomiseVar,
  //   "Pixel-Perfect Code": WithLove,
  //   "Built With Love": PixelPerfect,
  // };

  const trustIcons = [CodeIconVar, CustomiseVar, WithLove, PixelPerfect];
  let trustIconsList = trustIcons.map((Item, index) => {
    console.log("index, Item:", index, Item);
    return <CardContainers Icon={Item} key={index} />;
  });

  // let trustIconsList = Object.entries(trustIcons).forEach(([key, Value]) => {
  //   console.log(`key: ${key} value: ${Value}`);
  //   return <CardContainers Icon={Value} title={key} />;
  // });

  return <>{trustIconsList}</>;
};
// data[0].trustbar_titles.forEach((title) => console.log("title:", title));
export const DisplayBox = (props) => {
  const size = useWindowSize();
  const darkColor = process.env.REACT_APP_DARK_COLOR;
  const styles = {
    box: {
      marginTop: "70px",
      boxSizing: "inherit",
      maxWidth: "1550px",
      height: size.width > 1100 ? "600px" : size.width < 630 ? "1000" : "700px",
      paddingLeft: "5vw",
      paddingRight: "5vw",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      padding: "50px",
      borderTopLeftRadius: "30px",
      background: "#f9f9f9",
      color: darkColor,
      display: "flex",
      justifyContent: "space-between",
      backgroundImage: "url(std-banner.svg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
    pictureBox: {
      boxSizing: "border-box",
      margin: "0px",
      padding: "25px",
      border: "0px",
      fontSize: "14px",
      verticalAlign: "baseline",
      background: "rgb(243, 243, 243)",
      boxShadow: "12px 12px 2px 1px rgb(0 0 0 / 8%)",
      background: "#fff",
      position: "relative",
      marginBottom: "25px",
      width: "400px",
      maxHeight: "500px",
      display: size.width > 1000 ? "block" : "none",
    },
  };

  return (
    <div style={styles.box}>
      <div style={{ width: props.width || "55%", marginRight: "30px" }}>
        {/* <h1 style={{ fontSize: props.titleFontSize || null, props.titleStyle }}> */}
        <h1 style={props.titleStyle}>{props.title !== false && props.title}</h1>
        {props.component1}
        {props.component2}
      </div>
      <div style={styles.pictureBox}>
        <div className="about-pic"></div>
        <div style={{ width: "90%", margin: "auto" }}>
          <h2>John Nkpolukwu</h2>
          <p style={{ fontSize: size.width < 1230 ? "0.8em" : "12px" }}>
            Greek. Amateur F1 driver. Technology enthusiast. Single parent.
            Liar. Founder of Stochastic Technologies, a software development
            agency, and creator of various products which you can find in the
          </p>
          {/* {ButtonIcon} */}
          {props.ButtonIcon}
        </div>
      </div>
    </div>
  );
};
