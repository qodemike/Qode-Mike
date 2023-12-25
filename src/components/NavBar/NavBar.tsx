import styles from "./NavBar.module.css";
import Button from "../Button";
import Bullet from "../../assets/Bullet Point.png";
import MenuIcon from "../../assets/hamburger-menu-icon.svg";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {scroller} from 'react-scroll';
import sprite from "../../assets/sprite.svg";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = async (section: string) => {

    await navigate('/');

    scroller.scrollTo(section,{
      smooth: true,
      duration:500
    })
  }

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
        className={`${styles.header} ${isHidden? `${styles.moveUp}`: ""}  ${isVisible ? `${styles.visible}` : ""} ${collapsed ? `${styles.collapsed}` : ""}`}
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
              <a onClick={() => handleNavigate("AboutMe")} className={styles.anchor}>
                About Me
              </a>
            </li>
            <li className={styles.navListItem}>
              <img src={Bullet} />
              <a onClick={() => handleNavigate("Technologies")} className={styles.anchor} >
                Tools and Technologies
              </a>
            </li>
            <li className={styles.navListItem}>
              <img src={Bullet} />
              <a onClick={() => handleNavigate("MyPortfolio")} className={styles.anchor}>
                Portfolio
              </a>
            </li>
            <a onClick={() => handleNavigate("ContactPage")}>

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
