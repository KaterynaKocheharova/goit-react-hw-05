import { Link } from "react-router-dom";
import { IoPlayBack } from "react-icons/io5";
import css from "./BackLink.module.css";

const BackLink = ({ to, children }) => {
  return (
    <Link className={css["back-link"]} to={to}>
      <IoPlayBack className={css["back-icon"]} />
      {children}
    </Link>
  );
};

export default BackLink;
