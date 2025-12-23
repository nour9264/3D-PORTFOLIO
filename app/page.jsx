"use client";

import dynamic from "next/dynamic";
import Navbar from "../src/components/NavBar";
import ShowcaseSection from "../src/sections/ShowcaseSection";
import LogoShowcase from "../src/sections/LogoShowcase";
import FeatureCards from "../src/sections/FeatureCards";
import Experience from "../src/sections/Experience";
import Testimonials from "../src/sections/Testimonials";
import Footer from "../src/sections/Footer";

// Dynamic imports with ssr: false for components containing 3D models
// This prevents SSR errors during build
const Hero = dynamic(() => import("../src/sections/Hero"), { ssr: false });
const TechStack = dynamic(() => import("../src/sections/TechStack"), { ssr: false });
const Contact = dynamic(() => import("../src/sections/Contact"), { ssr: false });

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
