"use client";

import dynamic from "next/dynamic";
import Navbar from "../src/components/NavBar";
import Hero from "../src/sections/Hero";
import ShowcaseSection from "../src/sections/ShowcaseSection";
import LogoShowcase from "../src/sections/LogoShowcase";
import FeatureCards from "../src/sections/FeatureCards";
import TechStack from "../src/sections/TechStack";
import Contact from "../src/sections/Contact";
import Footer from "../src/sections/Footer";

// Lazy load below-the-fold sections to reduce initial bundle size
const Experience = dynamic(() => import("../src/sections/Experience"));
const Testimonials = dynamic(() => import("../src/sections/Testimonials"));

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
