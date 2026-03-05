import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
// import { DotGridBackground } from './components/DotGridBackground'
import { LogoStrip } from "./components/LogoStrip";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./pages/AboutSection";
import CertificationsPage from "./pages/Certificationspage";
import ContactSection from "./pages/Contactsection";
import ExperienceEducation from "./pages/Experienceeducation";
import { FAQSection } from "./pages/FAQSection";
import Gallery from "./pages/Gallery";
import HeroSection from "./pages/HeroSection";
import HobbiesPage from "./pages/Hobbiespage";
import PortfolioPage from "./pages/PortfolioPage";
import { PortfolioSection } from "./pages/PortfolioSection";
// import ProjectDetails from "./pages/ProjectDetails.JSX";
import ReadyToStart from "./pages/ReadyToStart";
import { ServicesSection } from "./pages/ServiceSection";
// import SkillsBentoGrid from "./pages/SkillsBentoGrid";
import SkillsBentoGrid1 from "./pages/SkillsBentoGrid1";
import { TestimonialsSection } from "./pages/TestimonialsSection";
import ScrollToTop from "./components/ScrollToTop";
// import WorkExperience from "./pages/Workexperience";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      {/* <DotGridBackground/> */}
      {/* <SkillsBentoGrid/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <LogoStrip />
              <ServicesSection />
              <PortfolioSection />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutSection />
              <TestimonialsSection />
            </>
          }
        />

        <Route
          path="/portfolio"
          element={
            <>
              <PortfolioPage />

              {/* <ProjectDetails /> */}
              <SkillsBentoGrid1 />
              <CertificationsPage />

              <ExperienceEducation />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <ContactSection />
            </>
          }
        />
        <Route
          path="/others"
          element={
            <>
              <HobbiesPage />
              <Gallery />
            </>
          }
        />
      </Routes>

      <FAQSection />
      <ReadyToStart />
      {/* <WorkExperience /> */}
      <Footer />
    </>
  );
}

export default App;
