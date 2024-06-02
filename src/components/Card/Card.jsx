import css from "./Card.module.css";
import clsx from "clsx";

const Card = ({ children, type }) => {
  return (
    <li className={clsx(css.card, type === "cast" && css["cast-card"])}>
      {children}
    </li>
  );
};

export default Card;
