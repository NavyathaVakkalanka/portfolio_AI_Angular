import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Responsibilities from './components/Responsibilities/Responsibilities';
import Contact from './components/Contact/Contact';

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Responsibilities />
                <Contact />
            </main>
        </>
    );
}
