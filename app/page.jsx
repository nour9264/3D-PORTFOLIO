import Navbar from "../src/components/NavBar";
import Hero from "../src/sections/Hero";
import ShowcaseSection from "../src/sections/ShowcaseSection";
import LogoShowcase from "../src/sections/LogoShowcase";
import FeatureCards from "../src/sections/FeatureCards";
import Experience from "../src/sections/Experience";
import TechStack from "../src/sections/TechStack";
import Testimonials from "../src/sections/Testimonials";
import Contact from "../src/sections/Contact";
import Footer from "../src/sections/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <ShowcaseSection />
            <LogoShowcase />
            <FeatureCards />
            <Experience />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}
