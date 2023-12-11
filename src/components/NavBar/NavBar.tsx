import styles from './NavBar.module.css';
import Button from '../Button';
import Logo from '../../assets/logo.svg';
import Bullet from '../../assets/Bullet Point.png';

const NavBar = () => {
  return (
    <>
      <nav className={styles.HStack}>
        <img className={styles.Logo} src={Logo} alt="Qode Mike logo image"/>
        <ul className={styles.navList}>
          <li className={styles.navListItem}> <img src={Bullet}/> <a className={styles.anchor} href="">About Me</a></li>
          <li className={styles.navListItem}> <img src={Bullet}/> <a className={styles.anchor} href="">Tools and Technologies</a></li>
          <li className={styles.navListItem}> <img src={Bullet}/> <a className={styles.anchor} href="">Portfolio</a></li>
          <a><Button style={{padding: "var(--padding-small)"}}>Say Hello</Button></a>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
