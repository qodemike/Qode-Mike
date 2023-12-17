import styles from "./SideBarLeft.module.css";
import Socials from "../../assets/sprite-socials.svg";

const SideBarLeft = () => {
  const socials = ["github", "twitter", "instagram", "linkedin-outline"];
  return (
    <>
    <div className={styles.box} >
      {socials.map((s, index) => (
        <a key={index} href="">
        <svg  className={styles.icon} >
          <use xlinkHref={`${Socials}#${s}`}></use>
        </svg>
        </a>
      ))}
    </div>
    </>
  );
};

export default SideBarLeft;
