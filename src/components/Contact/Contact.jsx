import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

export default function Contact() {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section className={`section ${styles.contact}`} id="contact" ref={ref}>
            <div className="container">
                <div className={`${styles.contactInner} fade-in-up ${isVisible ? 'visible' : ''}`}>
                    <p className="section-label">Say Hello</p>
                    <h2 className="section-title">Get In <span>Touch</span></h2>
                    <div className="section-divider" />
                    <p className={styles.tagline}>
                        Open to professional opportunities and collaborations in the airline domain.
                    </p>

                    {/* Contact links */}
                    <div className={styles.contactLinks}>
                        <a href="mailto:navyathav00@gmail.com" className={styles.contactLink}>
                            <span className={styles.contactLinkIcon}><MdEmail /></span>
                            navyathav00@gmail.com
                        </a>
                        <a href="https://linkedin.com/in/navyatha-vakkalanka" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <span className={styles.contactLinkIcon}><FaLinkedin /></span>
                            linkedin.com/in/navyatha-vakkalanka
                        </a>
                        <a href="#contact" className={styles.contactLink}>
                            <span className={styles.contactLinkIcon}><FaMapMarkerAlt /></span>
                            Tokyo, Japan
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
