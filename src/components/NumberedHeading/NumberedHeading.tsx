import { useEffect, useRef } from "react";
import styles from "./NumberedHeading.module.css";

interface Props {
  number: string;
  title: string;
}

const NumberedHeading = ({ number, title }: Props) => {

  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver( (entries) => {


    })

  }, [])
  
  return (
    <>
      <div className={styles.box}>
        <span className={styles.number}>{number}</span>
        <h2 className={styles.heading}>{title}</h2>
        <div className={`${styles.line}`}></div>
      </div>
    </>
  );
};

export default NumberedHeading;
