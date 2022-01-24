import "./Frame.css";

import { Link } from "react-router-dom";

export const DisplayCircle = (props) => {
  const styles = {
    image: {
      height: props.height + "px",
      width: props.width + "px",
      borderRadius: "300px",
      border: "10px solid #f5f5f5",
      boxShadow: "12px 12px 2px 1px rgb(0 0 0 / 8%)",
    },
  };
  return (
    <Link className={props.outlineClass} to={props.link}>
      <img
        className={props.imgClass}
        src={props.pic}
        alt=""
        style={styles.image}
      />
    </Link>
  );
};
