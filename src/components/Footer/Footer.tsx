import styles from './Footer.module.css';
import Socials from '../../assets/sprite-socials.svg';

const Footer = () => {

    const socials = ["twitter", "github", "instagram", "linkedin-outline"];
  return (
    <>
    <div className={styles.footer}>
        <ul className={styles.iconList}>
            {socials.map((s, index) => (
                <li key={index} className={styles.iconListItem}>
                    <svg>
                        <use xlinkHref={`${Socials}#${s}`}/>
                    </svg>
                </li>
            )
            )}
        </ul>
        <p className={styles.copyright} >Copyright @ 2022 Qode Mike</p>
    </div>
    </>
  )
}

export default Footer;