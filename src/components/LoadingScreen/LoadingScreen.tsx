import styles from "./LoadingScreen.module.css";
import { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`${styles.loadScreen} ${ isLoading ? "" : styles.moveUp }`}>
      <img src={logo} alt="" className={`${styles.logo}`} />
    </div>
  );
};

export default LoadingScreen;
