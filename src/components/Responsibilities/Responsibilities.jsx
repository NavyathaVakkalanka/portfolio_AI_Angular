import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Responsibilities.module.css';

const RESPONSIBILITIES = [
    { icon: '🤝', title: 'Stakeholder Management', desc: 'Engage with internal and external stakeholders to gather requirements, manage expectations, and ensure smooth project delivery.' },
    { icon: '💬', title: 'Client Interaction', desc: 'Serve as the primary point of contact for clients, addressing their queries and providing timely, accurate solutions.' },
    { icon: '✈️', title: 'Altea PSS Support', desc: 'Provide expert guidance and query resolution related to the Amadeus Altea Passenger Services System.' },
    { icon: '🌐', title: 'Web Services Consultation', desc: 'Clarify and support integration queries related to REST/SOAP APIs and Web Services in the airline domain.' },
    { icon: '📋', title: 'Requirement Analysis', desc: 'Analyze and document functional and non-functional requirements from client discussions and stakeholder sessions.' },
    { icon: '🔄', title: 'Workflow Optimization', desc: 'Identify gaps in existing workflows and recommend process improvements for smoother airline operations.' },
];

export default function Responsibilities() {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section className={`section ${styles.responsibilities}`} id="responsibilities" ref={ref}>
            <div className="container">
                <p className="section-label">What I Deliver</p>
                <h2 className="section-title">Key <span>Responsibilities</span></h2>
                <div className="section-divider" />

                <div className={styles.cardsGrid}>
                    {RESPONSIBILITIES.map((r, i) => (
                        <div
                            key={r.title}
                            className={`${styles.card} fade-in-up delay-${(i % 6) + 1} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className={styles.cardIcon}>{r.icon}</div>
                            <div className={styles.cardTitle}>{r.title}</div>
                            <p className={styles.cardDesc}>{r.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
