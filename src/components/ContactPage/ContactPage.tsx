import styles from "./ContactPage.module.css";
import NumberedHeading from "../NumberedHeading";
import Button from "../Button";
import { useEffect, useState } from "react";
import LightBanner from "../../assets/LightBanner.svg";
import DarkBanner from "../../assets/DarkBanner.svg";

const ContactPage = () => {
  const [isAtEnd, setIsAtEnd] = useState(false);

  const email = "qodemike@gmail.com";
  const subject = "Initiate QodeMike";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section id="ContactPage" className={styles.contactPage}>
        <header className={styles.header}>
          <NumberedHeading number="04." title="Intiate Qode Mike" />
        </header>
        <article className={styles.contactDetails}>
          <picture className={styles.imgWrapper}>
            <img src={DarkBanner} />
            <img
              src={LightBanner}
              className={`${styles.img} ${isAtEnd ? styles.appear : ""}`}
            />
          </picture>
          <p className={styles.text}>
            <span>Got something in mind?</span> Let's bring it to life
          </p>
          <a
            href={`mailto:${encodeURIComponent(
              email
            )}?subject=${encodeURIComponent(subject)}`}
          >
            <Button>Get In Touch</Button>
          </a>
        </article>
      </section>
    </>
  );
};

export default ContactPage;
