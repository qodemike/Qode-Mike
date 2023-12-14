import styles from "./SideBarRight.module.css";
import Socials from "../../assets/sprite-socials.svg";

export const SideBarRight = () => {
  return (
    <>
      <div className={styles.box}>
        <a className={styles.email} href="">
          <svg>
            <use xlinkHref={`${Socials}#gmail`} />
          </svg>
        </a>
      </div>
    </>
  );
};
