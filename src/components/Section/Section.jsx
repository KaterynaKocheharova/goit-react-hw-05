import css from "./Section.module.css";
import clsx from "clsx";

const Section = ({ children, isHeader = false }) => {
  return (
    <section className={clsx(isHeader ? css["header-section"] : css.section)}>
      {children}
    </section>
  );
};

export default Section;
