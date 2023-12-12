import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { SideBarRight } from "./components/SideBarRight/SideBarRight";
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";


function App() {
  return (
    <>
      <div className={styles.grid}>
        <nav className={styles.nav}>
          <NavBar />
        </nav>
        <div className={styles.left}>
          <SideBarLeft />
        </div>
        <div className={styles.right}>
          <SideBarRight />
        </div>
        <div className={styles.main}>
        </div>
      </div>
    </>
  );
}

export default App;
