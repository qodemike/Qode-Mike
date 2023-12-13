import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import { SideBarRight } from "./components/SideBarRight/SideBarRight";
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";
import Hero from "./components/Hero/Hero";


function App() {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.nav}>
          <NavBar />
        </div>
        <div className={styles.left}>
          <SideBarLeft />
        </div>
        <div className={styles.right}>
          <SideBarRight />
        </div>
        <main className={styles.main}>
          <Hero/>
        </main>
      </div>
    </>
  );
}

export default App;
