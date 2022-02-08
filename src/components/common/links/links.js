import { Link } from "react-router-dom";

export const CustomLink = (props) => {
  return (
    <Link to={props.link} className={props.className} style={props.style}>
      {props.title}
    </Link>
  );
};
