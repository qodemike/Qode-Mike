import styles from "./SideBarLeft.module.css";
import Socials from "../../assets/socials.svg";

const SideBarLeft = () => {
  const socials = ["github", "twitter", "instagram", "linkedin-outline"];
  return (
    <>
      {socials.map((s, index) => (
        <a href="">
        <svg key={index} className={styles.icon} >
          <use xlinkHref={`${Socials}#${s}`}></use>
        </svg>
        </a>
      ))}
    </>
  );
};

export default SideBarLeft;
