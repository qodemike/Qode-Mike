import styles from './NavBar.module.css';
import Button from '../Button';
import Logo from '../../assets/logo.svg';

const NavBar = () => {
  return (
    <>
      <nav className={styles.HStack}>
        <img src={Logo} alt="Qode Mike logo image"/>
        <ul className={styles.navList}>
          <li className={styles.navListItem} ><a className={styles.anchor} href="">About Me</a></li>
          <li className={styles.navListItem} ><a className={styles.anchor} href="">Tools and Technologies</a></li>
          <li className={styles.navListItem} ><a className={styles.anchor} href="">Portfolio</a></li>
          <li className={styles.navListItem} ><a><Button style={{padding: "1.5rem 1.7rem 1.2rem"}}>Say Hello</Button></a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
