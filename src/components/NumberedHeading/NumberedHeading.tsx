import { useEffect, useRef } from "react";
import styles from "./NumberedHeading.module.css";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface Props {
  number: string;
  title: string;
}

const NumberedHeading = ({ number, title }: Props) => {

  const lineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {

  useIntersectionObserver(lineRef.current, () => {
    lineRef.current?.classList.add(styles.action);
  })
  
  }, [])
  
  return (
    <>
      <div className={styles.box}>
        <span className={styles.number}>{number}</span>
        <h2 className={styles.heading}>{title}</h2>
        <div ref={lineRef} className={`${styles.line}`}></div>
      </div>
    </>
  );
};

export default NumberedHeading;
