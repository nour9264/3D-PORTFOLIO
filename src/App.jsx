import { lazy, Suspense } from "react";

// Eagerly load critical above-the-fold components
import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import LoadingFallback from "./components/LoadingFallback";

// Lazy load below-the-fold sections for better performance
const ShowcaseSection = lazy(() => import("./sections/ShowcaseSection"));
const LogoShowcase = lazy(() => import("./sections/LogoShowcase"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const Experience = lazy(() => import("./sections/Experience"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Testimonials = lazy(() => import("./sections/Testimonials"));
const Contact = lazy(() => import("./sections/Contact"));
const Footer = lazy(() => import("./sections/Footer"));

const App = () => (
  <>
    <Navbar />
    <Hero />

    {/* Wrap lazy-loaded components in Suspense with loading fallback */}
    <Suspense fallback={<LoadingFallback />}>
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </Suspense>
  </>
);

export default App;
