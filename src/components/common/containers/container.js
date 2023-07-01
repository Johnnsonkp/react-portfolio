import { useWindowSize } from "../../utils/utilFunctions";

export const Container = (props) => {
  return (
    <div
      style={{
        width: props.width || "90%",
        marginLeft: "auto",
        marginRight: "auto",
        color: props.color,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        maxWidth: props.maxWidth,
      }}
    >
      {props.content}
    </div>
  );
};
export const FlexedContainer = (props) => {
  const size = useWindowSize();
  return (
    <div
      style={{
        width: "95%",
        display: "flex",
        flexDirection: size.width > 570 ? "row" : "column",
        alignItems: size.width > 570 ? null : "center",
        margin: "auto",
        justifyContent: "space-around",
      }}
    >
      {props.content}
    </div>
  );
};

export const TextBoxContainer = (props) => {
  const styles = {
    setStyles: {
      fontSize: props.size.width > 475 ? "1rem" : "0.9rem",
      fontWeight: "300",
      marginTop: "25px",
      color: props.mode ? props.darkFontColor : props.lightColor,
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
      lineHeight: "2",
      textAlign: "center",
      marginBottom: "35px",
    },
  };

  return (
    <div>
      <p style={styles.setStyles}>{props.children || props.content}</p>
    </div>
  );
};
