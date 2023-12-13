import Line from "../../assets/Line.svg";
import styles from "./NumberedHeading.module.css";

interface Props {
  number: string;
  heading: string;
}

const NumberedHeading = ({ number, heading }: Props) => {
  return (
    <>
      <div className={styles.box}>
        <span className={styles.number}>{number}</span>
        <h2 className={styles.heading}>{heading}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 656 1"
          className={styles.line}
        >
          <line
            id="Line_33"
            data-name="Line 33"
            x2="656"
            transform="translate(0 0.5)"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            stroke-width="1"
          />
        </svg>
      </div>
    </>
  );
};

export default NumberedHeading;
