import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './About.module.css';

const STATS = [
    { icon: '⏳', value: '4 Years', label: 'Experience' },
    { icon: '✈️', value: 'Airline', label: 'Domain' },
    { icon: '🏢', value: 'TCS', label: 'Company' },
    { icon: '🌏', value: '2 Years', label: 'Japan' },
    { icon: '📋', value: 'BA', label: 'Current Role' },
    { icon: '🔬', value: '1.5 Yrs', label: 'SW Testing' },
];

export default function About() {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section className={`section ${styles.about}`} id="about" ref={ref}>
            <div className="container">
                <p className="section-label">Who I Am</p>
                <h2 className="section-title">About <span>Me</span></h2>
                <div className="section-divider" />

                <div className={`${styles.aboutGrid} fade-in-up ${isVisible ? 'visible' : ''}`}>

                    {/* Left — Bio */}
                    <div className={styles.bioCard}>
                        <p>
                            A results-driven <strong>Business Analyst</strong> with 4 years of experience in
                            the airline domain at TCS. Started as a <strong>Software Tester</strong> and
                            transitioned into Business Analysis, developing deep expertise in{' '}
                            <strong>Airline PSS systems</strong>, DCS, and Ticketing domains.
                        </p>
                        <br />
                        <p>
                            Currently based in <strong>Japan</strong> with 2 years of valuable onsite
                            experience, collaborating with global clients and cross-functional teams to
                            deliver high-quality solutions in a fast-paced airline environment.
                        </p>
                    </div>

                    {/* Right — Stats */}
                    <div className={styles.statsGrid}>
                        {STATS.map((s, i) => (
                            <div key={s.label} className={`${styles.statCard} fade-in-up delay-${i + 1} ${isVisible ? 'visible' : ''}`}>
                                <div className={styles.statIcon}>{s.icon}</div>
                                <div className={styles.statValue}>{s.value}</div>
                                <div className={styles.statLabel}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
