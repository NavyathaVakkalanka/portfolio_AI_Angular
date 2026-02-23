import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const NAV_LINKS = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Responsibilities', id: 'responsibilities' },
    { label: 'Contact', id: 'contact' },
];

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLink = (id) => {
        scrollTo(id);
        setMenuOpen(false);
    };

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navInner}`}>

                {/* Logo */}
                <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span>N</span>V
                </div>

                {/* Desktop links */}
                <ul className={styles.navLinks}>
                    {NAV_LINKS.map(link => (
                        <li key={link.id}>
                            <button className={styles.navLink} onClick={() => handleLink(link.id)}>
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Hamburger */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine} />
                    <span className={styles.hamburgerLine} />
                    <span className={styles.hamburgerLine} />
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
                {NAV_LINKS.map(link => (
                    <button key={link.id} className={styles.mobileLink} onClick={() => handleLink(link.id)}>
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}
