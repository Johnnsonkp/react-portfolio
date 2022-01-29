import "./Frame.css";

import { CodeIcon, Customise, Love, Pixel } from "../../utils/icons/icons";

import { Card } from "antd";
import Icon from "@ant-design/icons";
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
  const CodeIconVar = (props) => <Icon component={CodeIcon} {...props} />;
  const CustomiseVar = (props) => <Icon component={Customise} {...props} />;
  const WithLove = (props) => <Icon component={Love} {...props} />;
  const PixelPerfect = (props) => <Icon component={Pixel} {...props} />;

  const CardContainers = (props) => {
    let size = useWindowSize();
    return (
      <div
        style={{
          width: size.width > 570 ? "20%" : "100%",
          height: size.width < 570 && "140px",
          fontSize: size.width <= 900 ? "12px" : "14px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#111",
          padding: "20px",
          border: "1px solid #f9f9f9",
          border: "1px solid #eee",
          background: "#f9f9f9",
          margin: "10px",
        }}
        key={props.key}
      >
        <props.Icon />
        <div style={{ marginTop: "25px" }}>World-Class Development</div>
      </div>
    );
  };

  const trustIcons = [CodeIconVar, CustomiseVar, WithLove, PixelPerfect];
  let trustIconsList = trustIcons.map((Item, index) => {
    return <CardContainers Icon={Item} key={index} />;
  });

  return (
    <>{trustIconsList}</>

    // <>
    //   <Card
    //     bordered={false}
    //     style={{
    //       width: 280,
    //       fontSize: "15px",
    //       textAlign: "center",
    //       fontWeight: "bold",
    //       color: "#111",
    //       // border: "1px solid red",
    //       // borderRadius: "100px",
    //       padding: "20px",
    //       border: "1px solid #f9f9f9",
    //       background: "#f9f9f9",
    //     }}
    //     cover={<CodeIconVar />}
    //   >
    //     <Meta description="World-Class Development" />
    //   </Card>
    //   <Card
    //     bordered={false}
    //     style={{
    //       width: 280,
    //       fontSize: "15px",
    //       textAlign: "center",
    //       fontWeight: "bold",
    //       color: "#111",
    //       // border: "1px solid red",
    //       // borderRadius: "100px",
    //       padding: "20px",
    //       border: "1px solid #f9f9f9",
    //       background: "#f9f9f9",
    //     }}
    //     cover={<CustomiseVar />}
    //   >
    //     <Meta description="Tailored To Your Needs" />
    //   </Card>
    //   <Card
    //     bordered={false}
    //     style={{
    //       width: 280,
    //       fontSize: "15px",
    //       textAlign: "center",
    //       fontWeight: "bold",
    //       color: "#111",
    //       padding: "20px",
    //       border: "1px solid #f9f9f9",
    //       background: "#f9f9f9",
    //     }}
    //     cover={<PixelPerfect />}
    //   >
    //     <Meta description="Pixel-Perfect Code" />
    //   </Card>
    //   <Card
    //     bordered={false}
    //     style={{
    //       width: 280,
    //       fontSize: "15px",
    //       textAlign: "center",
    //       fontWeight: "bold",
    //       color: "#111",
    //       padding: "20px",
    //       border: "1px solid #f9f9f9",
    //       background: "#f9f9f9",
    //     }}
    //     cover={<WithLove />}
    //   >
    //     <Meta description="Built With Love" />
    //   </Card>
    // </>
  );
};
