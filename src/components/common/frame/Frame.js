import "./Frame.css";

import { CodeIcon, Customise, Love, Pixel } from "../../utils/icons/icons";
import { Container, FlexedContainer } from "../containers/container";
import React, { useEffect, useState } from "react";

import { Card } from "antd";
import Icon from "@ant-design/icons";
import LightDark from "../light-dark-mode";
import { Processes } from "../textContent/process";
import { TechStackContainer } from "../../utils/icons/icons";
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
  const propData = {
    lightColor: props.lightColor,
    darkColor: props.darkColor,
    mode: props.mode,
  };

  const initialQuizItem = [
    {
      question: "First quiz item",
      correct_answer: "First quiz answer",
      incorrect_answers: ["incorrect 1", "incorrect 2", "incorrect 3"],
    },
  ];

  const [data, setData] = useState(null);
  const CodeIconVar = (props) => <Icon component={CodeIcon} {...props} />;
  const CustomiseVar = (props) => <Icon component={Customise} {...props} />;
  const WithLove = (props) => <Icon component={Love} {...props} />;
  const PixelPerfect = (props) => <Icon component={Pixel} {...props} />;

  useEffect(async () => {
    await fetch("home.json", {
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
          margin: "10px",
        }}
        key={props.key}
      >
        <props.Icon
          style={{
            border: "3px solid #1890ff",
            background: "#f9f9f9",
            backgroundImage: "url(std-banner.svg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            padding: "15px",
            borderRadius: "50px",
          }}
        />
        <div
          style={{
            marginTop: "10px",
            color: props.mode ? props.darkColor : props.lightColor,
          }}
        >
          {props.titles || null}
        </div>
      </div>
    );
  };

  const trustIcons = [CodeIconVar, CustomiseVar, PixelPerfect, WithLove];
  let trustIconsList = trustIcons.map((Item, index) => {
    console.log("index, Item:", index, Item);
    return (
      <CardContainers
        Icon={Item}
        key={index}
        titles={data !== null && data[0].trustbar_titles[index]}
        {...propData}
      />
    );
  });
  return <>{trustIconsList}</>;
};

export const DisplayBox = (props) => {
  const size = useWindowSize();
  const darkColor = process.env.REACT_APP_DARK_COLOR;
  const styles = {
    box: {
      marginBottom: "70px",
      boxSizing: "inherit",
      maxWidth: "1550px",
      height: props.backgroundHeight
        ? props.backgroundHeight
        : size.width > 1100
        ? "600px"
        : size.width < 630
        ? "1000px"
        : "100%",
      maxHeight: "1000px",
      paddingLeft: "5vw",
      paddingRight: "5vw",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      padding:
        props.boxPadding !== false
          ? size.width < 630
            ? size.width < 400
              ? "0px"
              : "20px"
            : "50px"
          : "0px",
      // padding: "0px",
      borderTopLeftRadius: "30px",
      background: "#f9f9f9",
      color: darkColor,
      display: "flex",
      justifyContent: "space-between",
      backgroundImage: props.backgroundImage
        ? props.backgroundImage
        : props.backgroundImage !== false
        ? "url(std-banner.svg)"
        : null,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: props.backgroundWidth
        ? props.backgroundWidth
        : size.width < 400
        ? "100%"
        : null,
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
      <div
        style={{
          width: props.width || "55%",
          marginRight:
            props.marginAuto !== true
              ? size.width > 600
                ? "30px"
                : "0px"
              : "auto",
          marginLeft: props.marginAuto !== true ? null : "auto",
        }}
      >
        <h1 style={props.titleStyle}>{props.title !== false && props.title}</h1>
        {props.component1}

        {props.component2 ? (
          <div style={{ marginTop: "30px", opacity: 0.8 }}>
            {props.component2}
          </div>
        ) : null}
      </div>
      {props.innerCard ? (
        <div style={styles.pictureBox}>
          <div className="about-pic"></div>
          <div style={{ width: "90%", margin: "auto" }}>
            <h2>John Nkpolukwu</h2>
            <p style={{ fontSize: size.width < 1230 ? "0.8em" : "12px" }}>
              Australian. Nigerian. Fitness obsessed. Technology enthusiast.
              traveler. Owner of the web guy services, a web design and
              development agency, and creator of various projects which you can
              find here.
            </p>
            {props.ButtonIcon}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const TechStackFullWidthContainer = (props) => {
  const styles = {
    fullWidthContainer: {
      width: "100%",
      // height: "180px",
      // paddingTop: "50px",
      // paddingBottom: "50px",
      // marginTop: props.marginTop ? props.marginTop : "auto",
      // marginBottom: props.marginBottom ? props.marginBottom : "auto",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "40px",
      display: props.size.width < 1000 ? "none" : null,
    },
  };
  return (
    <div
      className="gradientBanner fullWidthBanner"
      style={styles.fullWidthContainer}
    >
      <FlexedContainer content={<TechStackContainer />} />
    </div>
  );
};
