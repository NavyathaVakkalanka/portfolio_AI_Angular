import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Experience.module.css';

const EXPERIENCE = [
    {
        side: 'left',
        role: 'Software Tester',
        company: 'Tata Consultancy Services (TCS)',
        duration: '2020 – 2021 · 1.5 Years',
        japan: false,
        highlights: [
            'Manual and functional testing of airline applications',
            'Test case creation and execution in Airline PSS environment',
            'Defect tracking, reporting, and root-cause analysis',
            'Gained foundational knowledge of Altea PSS systems',
        ],
    },
    {
        side: 'right',
        role: 'Business Analyst',
        company: 'Tata Consultancy Services (TCS)',
        duration: '2022 – Present · 2.5 Years',
        japan: true,
        highlights: [
            'Transitioned from Testing into Business Analysis',
            'Stakeholder & client interaction for requirement gathering',
            'Query resolution for Altea PSS and Web Services',
            'Working across TKT and DCS domains',
            'Onsite collaboration with Japanese airline clients 🇯🇵',
            'Expertise in AAL, XPP, CM, and ARD Web tools',
        ],
    },
];

export default function Experience() {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section className={`section ${styles.experience}`} id="experience" ref={ref}>
            <div className="container">
                <p className="section-label">Career Journey</p>
                <h2 className="section-title">My <span>Experience</span></h2>
                <div className="section-divider" />

                <div className={styles.timeline}>
                    {EXPERIENCE.map((entry, i) => (
                        <div
                            key={entry.role}
                            className={`${styles.timelineItem} ${entry.side === 'right' ? styles.right : ''} fade-in-up delay-${i + 1} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className={styles.dot} />
                            <div className={styles.timelineCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.role}>{entry.role}</div>
                                    {entry.japan && <span className={styles.japanBadge}>🇯🇵 Japan Onsite</span>}
                                </div>
                                <div className={styles.company}>{entry.company}</div>
                                <div className={styles.duration}>{entry.duration}</div>
                                <ul className={styles.highlights}>
                                    {entry.highlights.map(h => <li key={h}>{h}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
