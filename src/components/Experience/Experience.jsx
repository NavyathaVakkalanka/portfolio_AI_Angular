import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Experience.module.css';

const EXPERIENCE = [
    {
        id: 'tester-india',
        side: 'left',
        role: 'Software Tester',
        company: 'Tata Consultancy Services (TCS)',
        duration: '2022 – 2023 · 1 Year',
        india: true,
        japan: false,
        highlights: [
            'Manual and functional testing of airline applications',
            'Test case creation and execution in Altea PSS environment',
            'Defect tracking, reporting, and root-cause analysis',
            'Gained foundational knowledge of Altea Passenger Service System',
        ],
    },
    {
        id: 'ba-india',
        side: 'right',
        role: 'Business Analyst',
        company: 'Tata Consultancy Services (TCS)',
        duration: '2023 – 2024 · 1 Year',
        india: true,
        japan: false,
        highlights: [
            'Transitioned from Testing into Business Analysis',
            'Stakeholder & client interaction for requirement gathering',
            'Query resolution for Altea PSS and Web Services',
            'Working across TKT and DCS domains',
            'Expertise in AAL, XPP, CM, and ARD Web tools',
        ],
    },
    {
        id: 'ba-japan',
        side: 'left',
        role: 'Business Analyst',
        company: 'Tata Consultancy Services (TCS)',
        duration: '2024 – Present · 1+ Year',
        india: false,
        japan: true,
        highlights: [
            'Onsite collaboration with Japanese airline clients',
            'Cross-cultural stakeholder management and requirement gathering',
            'Query resolution for Altea PSS, TKT and DCS domains',
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
                            key={entry.id}
                            className={`${styles.timelineItem} ${entry.side === 'right' ? styles.right : ''} fade-in-up delay-${i + 1} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className={styles.dot} />
                            <div className={styles.timelineCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.role}>{entry.role}</div>
                                    {entry.india && <span className={styles.indiaBadge}>India</span>}
                                    {entry.japan && <span className={styles.japanBadge}>Japan</span>}
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
