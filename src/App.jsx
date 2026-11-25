import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LogoStrip from "./components/LogoStrip";
import ScrollToTop from "./components/ScrollToTop";
import TrainingBentoGrid from "./components/TrainingBentoGrid";
import ImpactBand from "./components/ImpactBand";
import { Button, Rich } from "./components/ui";

import HeroSection from "./pages/HeroSection";
import ServicesSection from "./pages/ServiceSection";
import ProgramsSection from "./pages/ProgramsSection";
import PortfolioSection from "./pages/PortfolioSection";
import AboutSection from "./pages/AboutSection";
import TestimonialsSection from "./pages/TestimonialsSection";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetails from "./pages/ProjectDetails";
import SkillsSection from "./pages/SkillsBentoGrid1";
import CertificationsPage from "./pages/Certificationspage";
import ExperienceEducation from "./pages/Experienceeducation";
import ContactSection from "./pages/Contactsection";
import HobbiesPage from "./pages/Hobbiespage";
import Gallery from "./pages/Gallery";
import FAQSection from "./pages/FAQSection";
import ReadyToStart from "./pages/ReadyToStart";

import ComingSoon from "./pages/ComingSoon";
import Loader from "./components/Loader";
import { shouldShowLoader } from "./lib/loader";

import { NOT_FOUND, PROJECT_IMPACT, TRAINED_AT } from "./content";
import { startSmoothScroll } from "./lib/smooth";

/* ═══════════════════════════════════════════════════════════════════════════
   SITE SWITCH
   true  → the full portfolio
   false → the "Coming soon" page (every URL shows it)
   Its text, launch date and countdown live in content.js → COMING_SOON.
═══════════════════════════════════════════════════════════════════════════ */
const SITE_LIVE = true;

/* Each page lists its sections; the FAQ is appended with the next number. */
function Page({ children, faqIndex }) {
  return (
    <>
      {children}
      <FAQSection index={faqIndex} />
    </>
  );
}

function NotFound() {
  return (
    <section className="section-y page-top">
      <div className="container-x">
        <p className="eyebrow border-t border-line pt-5">{NOT_FOUND.eyebrow}</p>
        <h1 className="display t-h1 mt-10 max-w-4xl">
          <Rich text={NOT_FOUND.title} />
        </h1>
        <p className="mt-6 max-w-md text-lg text-ink-soft">{NOT_FOUND.text}</p>
        <Button to={NOT_FOUND.cta.to} className="mt-10">
          {NOT_FOUND.cta.label}
        </Button>
      </div>
    </section>
  );
}

export default function App() {
  return SITE_LIVE ? (
    <Site />
  ) : (
    <>
      <ComingSoon />
      <div className="grain" aria-hidden="true" />
    </>
  );
}

function Site() {
  /* Launch loader — settings in content.js → LOADER */
  const [showLoader, setShowLoader] = useState(shouldShowLoader);
  const hideLoader = useCallback(() => setShowLoader(false), []);

  useEffect(() => {
    startSmoothScroll();
  }, []);

  return (
    <>
      {showLoader && <Loader onDone={hideLoader} />}
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Routes>
          <Route
            path="/"
            element={
              <Page faqIndex="04">
                <HeroSection />
                <ImpactBand data={TRAINED_AT} />
                <ImpactBand data={PROJECT_IMPACT} reverse />
                <LogoStrip />
                <ServicesSection index="01" />
                <ProgramsSection index="02" />
                <PortfolioSection index="03" />
              </Page>
            }
          />
          <Route
            path="/about"
            element={
              <Page faqIndex="03">
                <AboutSection index="01" />
                <TestimonialsSection index="02" />
              </Page>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Page faqIndex="06">
                <PortfolioPage index="01" />
                <TrainingBentoGrid index="02" />
                <SkillsSection index="03" />
                <CertificationsPage index="04" />
                <ExperienceEducation index="05" />
              </Page>
            }
          />
          <Route
            path="/portfolio/:slug"
            element={
              <Page faqIndex="">
                <ProjectDetails />
              </Page>
            }
          />
          <Route
            path="/contact"
            element={
              <Page faqIndex="02">
                <ContactSection index="01" />
              </Page>
            }
          />
          <Route
            path="/others"
            element={
              <Page faqIndex="03">
                <HobbiesPage index="01" />
                <Gallery index="02" />
              </Page>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <ReadyToStart />
      </main>

      <Footer />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
