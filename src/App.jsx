import React from "react";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/RightSidebar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import AnimatedBackground from "./components/Bg";
import SectionWithBackground from "./components/SectionWithBackground";


import Education from "./pages/Education";
import Certifications from "./pages/Certifications";

function App() {
  return (
    <div className="flex">
           
      

      <Sidebar />
      <div className="flex-1 ml-24">
        <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
      <section id="education"><Education /></section>
        <section id="certifications"><Certifications /></section>
        <Footer />
      </div>
    </div>      

  );
}


export default App;
