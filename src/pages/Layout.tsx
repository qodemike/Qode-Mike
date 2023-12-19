import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from './Layout.module.css';
import { SideBarRight } from "../components/SideBarRight";
import SideBarLeft from "../components/SideBarLeft";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div className={styles.grid}>
        <header className={styles.nav}>
          <NavBar />
        </header>
        <aside className={styles.left}>
          <SideBarLeft />
        </aside>
        <aside className={styles.right}>
          <SideBarRight />
        </aside>
        <main className={styles.main}>
            <Outlet/>
        </main>
        <footer className={styles.footer}>
          <Footer/>
        </footer>
    </div>
    </>
  );
};

export default Layout;
