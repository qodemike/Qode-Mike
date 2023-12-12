import styles from "./SideBarLeft.module.css";
import Socials from '../../assets/socials.svg';

const SideBarLeft = () => {
  const socials = [ "github", ]
  return (
    <>
        <svg className={styles.icon}>
          <use xlinkHref={`${Socials}#twitter`}></use>
        </svg>
        <svg className={styles.icon}>
          <use xlinkHref={`${Socials}#instagram`}></use>
        </svg>
        <svg className={styles.icon}>
          <use xlinkHref={`${Socials}#github`}></use>
        </svg>
        <svg className={styles.icon}>
          <use xlinkHref={`${Socials}#linkedin-outline`}></use>
        </svg>
    </>
  );
};

export default SideBarLeft;
