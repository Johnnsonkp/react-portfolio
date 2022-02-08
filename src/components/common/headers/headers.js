export const CustomTitle = (props) => {
  const styles = {
    setStyles: {
      fontSize: props.size.width > 600 ? "2.5rem" : "1.5rem",
      color: props.mode ? "#474747" : props.lightColor,
      textAlign: "center",
    },
    divSetStyles: {
      margin: "auto",
      width: "100%",
    },
  };
  return (
    <div style={styles.divSetStyles}>
      <h1 style={styles.setStyles}>{props.children || props.content}</h1>
    </div>
  );
};
