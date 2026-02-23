import { MdEmail } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';

const NAV = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
];

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerInner}`}>

                <div className={styles.footerLogo}>
                    <span>N</span>V
                </div>

                <nav className={styles.footerLinks}>
                    {NAV.map(n => (
                        <button key={n.id} className={styles.footerLink} onClick={() => scrollTo(n.id)}>
                            {n.label}
                        </button>
                    ))}
                </nav>

                <div className={styles.footerRight}>
                    <a href="mailto:navyatha.vakkalanka@email.com" className={styles.socialIcon} aria-label="Email">
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
