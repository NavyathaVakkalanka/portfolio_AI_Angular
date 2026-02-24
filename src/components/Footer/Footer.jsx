import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>

                <div className={styles.footerLogo}>
                    <span>N</span>V
                </div>


                <div className={styles.footerRight}>
                    <a href="mailto:navyathav00@gmail.com" className={styles.socialIcon} aria-label="Email">
                        <MdEmail />
                    </a>
                    <a href="https://linkedin.com/in/navyatha-vakkalanka" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                    <span className={styles.copyright}>© 2026 Navyatha Vakkalanka</span>
                </div>
            </div>
        </footer>
    );
}
