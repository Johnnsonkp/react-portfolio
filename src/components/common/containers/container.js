import { useWindowSize } from "../../utils/utilFunctions";

export const Container = (props) => {
  return <div style={{ width: "90%", margin: "auto" }}>{props.content}</div>;
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
