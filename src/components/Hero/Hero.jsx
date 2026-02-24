import styles from './Hero.module.css';
import HeroIllustration from './HeroIllustration';

export default function Hero() {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className={styles.hero} id="home">
            <div className={`container ${styles.heroInner}`}>

                {/* Left — content */}
                <div className={styles.heroContent}>
                    <p className={styles.heroLabel}>Business Analyst · TCS</p>

                    <h1 className={styles.heroName}>
                        Navyatha<br />Vakkalanka
                    </h1>

                    <span className={styles.heroAccent} />

                    <p className={styles.heroTitle}>
                        <strong>Business Analyst</strong> · Airline Domain ·{' '}
                        <strong>4 Years Experience</strong>
                    </p>

                    <div className={styles.heroCta}>
                        <button className="btn-primary" onClick={() => scrollToSection('experience')}>
                            View My Journey
                        </button>
                        <button className="btn-outline" onClick={() => scrollToSection('contact')}>
                            Get In Touch
                        </button>
                    </div>
                </div>

                {/* Right — illustration */}
                <div className={styles.heroImageWrap}>
                    <div className={styles.illustrationWrap}>
                        <HeroIllustration />

                        {/* Floating badges */}
                        <div className={`${styles.badge} ${styles.badge1}`}>
                            Japan
                        </div>
                        <div className={`${styles.badge} ${styles.badge2}`}>
                            ✈️ Airline PSS Expert
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className={styles.scrollIndicator}>
                <span className={styles.scrollLine} />
                <span className={styles.scrollText}>Scroll</span>
            </div>
        </section>
    );
}
