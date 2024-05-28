import css from "./FlexItem.module.css";

const FlexItem = ({ children }) => {
  return <div className={css["flex-item"]}>{children}</div>;
};

export default FlexItem;
