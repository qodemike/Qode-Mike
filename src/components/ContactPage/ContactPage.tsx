import styles from "./ContactPage.module.css";
import NumberedHeading from "../NumberedHeading";
import Button from "../Button";
import sprite from '../../assets/sprite.svg';
import { useEffect, useState } from "react";

const ContactPage = () => {

  const [isAtEnd, setIsAtEnd] = useState(false);

  const email = 'qodemike@gmail.com';
  const subject = 'Initiate QodeMike';

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight){
        setIsAtEnd(true);
      } else{
        setIsAtEnd(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  
  return (
    <>
      <section id="ContactPage" className={styles.contactPage}>
        <header className={styles.header}>
          <NumberedHeading number="04." title="Intiate Qode Mike" />
        </header>
        <article className={styles.contactDetails}>
          <svg className={`${styles.banner} ${isAtEnd ? `${styles.glow}`: ""}`}>
            <use xlinkHref={`${sprite}#Banner`}/>
          </svg>
          <p className={styles.text}>
            <span>Got something in mind?</span>{" "}Let's bring it to life
          </p>
          <a href={`mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(subject)}`}><Button>Get In Touch</Button></a>
        </article>
      </section>
    </>
  );
};

export default ContactPage;
