import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Achievements } from "./components/sections/Achievements";
import { Services } from "./components/sections/Services";
import { Certifications } from "./components/sections/Certifications";
import { ResumeSection } from "./components/sections/ResumeSection";
import { Contact } from "./components/sections/Contact";
import { MolecularBackground } from "./components/ui/MolecularBackground";
export const App: React.FC = () => {
  return (
    <ThemeProvider>
      {" "}
      <div className="app-shell min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] font-sans transition-colors duration-300">
        {" "}
        {/* Interactive Molecular Background */} <MolecularBackground />{" "}
        {/* Navigation Bar */} <Navbar /> {/* Main Content Sections */}{" "}
        <main className="flex-grow relative z-10">
          {" "}
          <Hero /> <About /> <Projects /> <Skills /> <Experience />{" "}
          <Education /> <Achievements /> <Services /> <Certifications />{" "}
          <ResumeSection /> <Contact />{" "}
        </main>{" "}
        {/* Global Footer */} <Footer />{" "}
      </div>{" "}
    </ThemeProvider>
  );
};
export default App;
