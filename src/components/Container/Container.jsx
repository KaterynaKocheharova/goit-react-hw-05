import css from "./Container.module.css";
import clsx from "clsx";

const Container = ({ children, isHeader = false }) => {
  return (
    <div className={clsx(isHeader ? css["header-container"] : css.container)}>
      {children}
    </div>
  );
};

export default Container;
