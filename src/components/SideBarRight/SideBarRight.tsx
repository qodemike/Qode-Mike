import styles from "./SideBarRight.module.css";
import Sprite from "../../assets/sprite.svg";

export const SideBarRight = () => {
  return (
    <>
      <div className={styles.box}>
        <a className={styles.email} href="">
          <svg>
            <use xlinkHref={`${Sprite}#email`} />
          </svg>
        </a>
        <div className={styles.line}></div>
      </div>
    </>
  );
};
