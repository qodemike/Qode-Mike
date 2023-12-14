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
        <div className={styles.line}></div>
      </div>
    </>
  );
};

export default NumberedHeading;
