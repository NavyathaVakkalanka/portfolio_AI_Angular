import { useState, useEffect, useRef } from 'react';

/**
 * Returns a ref and a boolean indicating if the element is visible in the viewport.
 * Used to trigger CSS animations on scroll.
 */
export function useIntersectionObserver(options = {}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // trigger once
                }
            },
            { threshold: 0.12, ...options }
        );

        const current = ref.current;
        if (current) observer.observe(current);
        return () => { if (current) observer.unobserve(current); };
    }, []);

    return { ref, isVisible };
}
