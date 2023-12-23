import styles from "./NavBar.module.css";
import Button from "../Button";
import Bullet from "../../assets/Bullet Point.png";
import MenuIcon from "../../assets/hamburger-menu-icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import Logo from "../../assets/Logo.svg";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const resizeOnDeviceChange = () => {
    if (window.innerWidth > 768) {
      setCollapsed(false);
    }
  };

  const visibleOnScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  let intialScrollPosition  = window.scrollY;

  const hideOnScroll =  () => {
    const newScrollPosition =  window.scrollY;
    if ( newScrollPosition > intialScrollPosition){
      setIsHidden(true);
    }
    else 
      setIsHidden(false);

    intialScrollPosition = newScrollPosition;
  }
 
  useEffect(() => {
    window.addEventListener("scroll", hideOnScroll);
    window.addEventListener("scroll", visibleOnScroll);
    window.addEventListener("resize", resizeOnDeviceChange);
    return () => {
      window.removeEventListener("scroll", hideOnScroll);
      window.removeEventListener("scroll", visibleOnScroll);
      window.removeEventListener("resize", resizeOnDeviceChange);
    };
  }, []);

  return (
    <>
      <div
        className={`${styles.header} ${isHidden? `${styles.hide}`: ""}  ${isVisible ? `${styles.visible}` : ""} ${collapsed ? `${styles.collapsed}` : ""}`}
      >
        <nav className={styles.nav}>
          <div className={styles.logoWrapper}>
            <Link to={"/"}>
              <svg className={styles.Logo}>
                <use xlinkHref={`${sprite}#Logo`}></use>
              </svg>
            </Link>
          </div>

          <ul
            className={`${styles.navList} ${
              collapsed ? `${styles.collapsed}` : ""
            }`}
          >
            <li className={styles.navListItem}>
              <img src={Bullet} />
              <a className={styles.anchor} href="#AboutMe">
                About Me
              </a>
            </li>
            <li className={styles.navListItem}>
              <img src={Bullet} />
              <a className={styles.anchor} href="#Technologies">
                Tools and Technologies
              </a>
            </li>
            <li className={styles.navListItem}>
              <img src={Bullet} />
              <a className={styles.anchor} href="#MyPortfolio">
                Portfolio
              </a>
            </li>
            <a href="#ContactPage">
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
      </div>
    </>
  );
};

export default NavBar;
