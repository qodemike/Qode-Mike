import styles from "./SideBarRight.module.css";
import Sprite from "../../assets/sprite.svg";

export const SideBarRight = () => {

  const email = 'qodemike@gmail.com'
  const subject = 'Initate QodeMike'

  return (
    <>
      <div className={styles.box}>
        <a className={styles.email} href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}`}>
          <svg>
            <use xlinkHref={`${Sprite}#email`} />
          </svg>
        </a>
        <div className={styles.line}></div>
      </div>
    </>
  );
};
