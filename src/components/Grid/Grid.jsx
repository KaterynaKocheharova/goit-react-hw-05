import css from "./Grid.module.css";
import clsx from "clsx";

const Grid = ({ children, isMovieCast = false }) => {
  return (
    <ul
      className={
        isMovieCast ? clsx(css["movie-cast-grid"], css.grid) : css.grid
      }
    >
      {children}
    </ul>
  );
};

export default Grid;
