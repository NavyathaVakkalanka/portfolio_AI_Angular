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
                        <a href="mailto:navyatha.vakkalanka@email.com" className={styles.contactLink}>
                            <span className={styles.contactLinkIcon}><MdEmail /></span>
                            navyatha.vakkalanka@email.com
                        </a>
                        <a href="https://linkedin.com/in/navyatha-vakkalanka" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                            <span className={styles.contactLinkIcon}><FaLinkedin /></span>
                            linkedin.com/in/navyatha-vakkalanka
                        </a>
                        <a href="#contact" className={styles.contactLink}>
                            <span className={styles.contactLinkIcon}><FaMapMarkerAlt /></span>
                            Tokyo, Japan 🇯🇵
                        </a>
                    </div>

                    {/* Static contact form */}
                    <form className={styles.form} onSubmit={e => e.preventDefault()}>
                        <div className={styles.formRow}>
                            <input className={styles.formInput} type="text" placeholder="Your Name" />
                            <input className={styles.formInput} type="email" placeholder="Your Email" />
                        </div>
                        <textarea className={styles.formTextarea} placeholder="Your Message" />
                        <button className="btn-primary" type="submit" style={{ justifySelf: 'center' }}>
                            Send Message
                        </button>
                        <p className={styles.formNote}>
                            * Contact form is currently for display — please reach me directly via email or LinkedIn.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
