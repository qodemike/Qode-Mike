import styles from "./NavBar.module.css";
import Button from "../Button";
import Logo from "../../assets/logo.svg";
import Bullet from "../../assets/Bullet Point.png";
import MenuIcon from "../../assets/hamburger-menu-icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setCollapsed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header}  ${isVisible ? `${styles.visible}` : ""} ${
          collapsed ? `${styles.collapsed}` : ""
        }`}
      >
        <nav className={styles.nav}>
          <Link to={"/"}>
            <img
              className={styles.Logo}
              src={Logo}
              alt="Qode Mike logo image"
            />
          </Link>
          <ul
            className={`${styles.navList} ${
              collapsed ? `${styles.collapsed}` : ""
            }`}
          >
            <li className={styles.navListItem}>
              {" "}
              <img src={Bullet} />{" "}
              <a className={styles.anchor} href="">
                About Me
              </a>
            </li>
            <li className={styles.navListItem}>
              {" "}
              <img src={Bullet} />{" "}
              <a className={styles.anchor} href="">
                Tools and Technologies
              </a>
            </li>
            <li className={styles.navListItem}>
              {" "}
              <img src={Bullet} />{" "}
              <a className={styles.anchor} href="">
                Portfolio
              </a>
            </li>
            <a>
              <Button style={{ padding: "var(--padding-small)" }}>
                Say Hello
              </Button>
            </a>
          </ul>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={styles.collapsibleIcon}
          >
            <img src={MenuIcon} alt="hamburger menu icon" />
          </button>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
