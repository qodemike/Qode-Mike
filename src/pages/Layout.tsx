import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from './Layout.module.css';
import { SideBarRight } from "../components/SideBarRight";
import SideBarLeft from "../components/SideBarLeft";

const Layout = () => {
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
            <Outlet/>
        </main>
    </div>
    </>
  );
};

export default Layout;
