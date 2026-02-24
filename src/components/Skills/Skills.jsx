import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './Skills.module.css';

const SKILLS = [
    { icon: '🎫', name: 'TKT (Ticketing)', category: 'Core Domain', desc: 'Airline ticketing workflows, fare construction, and end-to-end ticketing processes.' },
    { icon: '🛬', name: 'DCS', category: 'Core Domain', desc: 'Departure Control System — passenger check-in, boarding, and seat allocation.' },
    { icon: '🌐', name: 'Altea PSS', category: 'Platform', desc: 'Altea Passenger Service System — deep functional expertise across airline operations.' },
    { icon: '🔗', name: 'API & Web Services', category: 'Technical', desc: 'REST/SOAP API testing, integration validation, and web service query resolution.' },
    { icon: '🚀', name: 'AAL', category: 'Tools', desc: 'Amadeus Application Launcher — configuration and workflow management.' },
    { icon: '⚙️', name: 'XPP', category: 'Tools', desc: 'XPP system — in-depth technical knowledge and support.' },
    { icon: '📁', name: 'CM', category: 'Tools', desc: 'Configuration Management — system config, parameter setup, and maintenance.' },
    { icon: '🌍', name: 'ARD Web', category: 'Tools', desc: 'ARD Web platform — expertise in platform operations and client support.' },
    { icon: '🤝', name: 'Stakeholder Mgmt', category: 'Soft Skill', desc: 'Cross-functional communication, requirement gathering, and client management.' },
];

export default function Skills() {
    const { ref, isVisible } = useIntersectionObserver();

    return (
        <section className={`section ${styles.skills}`} id="skills" ref={ref}>
            <div className="container">
                <p className="section-label">What I Do</p>
                <h2 className="section-title">Skills &amp; <span>Expertise</span></h2>
                <div className="section-divider" />

                <div className={styles.skillsGrid}>
                    {SKILLS.map((skill, i) => (
                        <div
                            key={skill.name}
                            className={`${styles.skillCard} fade-in-up delay-${(i % 6) + 1} ${isVisible ? 'visible' : ''}`}
                        >
                            <div className={styles.skillIcon}>{skill.icon}</div>
                            <div className={styles.categoryTag}>{skill.category}</div>
                            <div className={styles.skillName}>{skill.name}</div>
                            <p className={styles.skillDesc}>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
