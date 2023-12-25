import styles from "./LoadingScreen.module.css";
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/sprite.svg";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
    const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {

    const animate = () => {
        return new Promise( (resolve) => {
            setTimeout( () => {
                if (logoRef.current){
                    logoRef.current.classList.remove(styles.spin);
                    logoRef.current.classList.add(styles.spinSlowdown);
                    // Wait alittle for the animation to finish
                    setTimeout(() => {
                        resolve(null);
                    }, 1500)
                }
            }, 1000)
        })
    }

    const removeLoadingScreen = async() =>{
        await animate();
        setIsLoading(false);
        document.body.style.overflow = 'scroll';   
    }

    removeLoadingScreen();
  },[])



  return (
    <div
      className={`${styles.loadScreen} ${isLoading ? "" : `${styles.moveUp}`}`}
    >
      <svg ref={logoRef}  className={`${styles.logo} ${isLoading ? styles.spin : "" }`}  >
        <use xlinkHref={`${Logo}#Logo`}></use>
      </svg>
    </div>
  );
};

export default LoadingScreen;
