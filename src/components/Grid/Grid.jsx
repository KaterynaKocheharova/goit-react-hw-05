import css from "./Grid.module.css";

const Grid = ({ children }) => {
  return <ul className={css.grid}>{children}</ul>;
};

export default Grid;
