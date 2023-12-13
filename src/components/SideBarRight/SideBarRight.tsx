import styles from "./SideBarRight.module.css";
import GmailIcon from "../../assets/gmail.png";

export const SideBarRight = () => {
  return (
    <>
    <div className={styles.box}>
      <a className={styles.email} href="">
        <img src={GmailIcon} alt="" />
        <p>Qodemike@gmail.com</p>
      </a>
    </div>
    </>
  );
};
