import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "/src/Components/Header.jsx";
import ScrollToTop from "/src/components/ScrollToTop";
import Home from "/src/Components/Home.jsx";
import About from "/src/Pages/AboutPage.jsx";
import Pointer from "/src/Components/Pointer";
import InnerProject from "/src/Components/InnerProject";
import ContactPage from "/src/Pages/ContactPage";
// import ProjectsPage from "/src/Pages/ProjectsPage";
import ProjectsPage from "/src/Components/Projects.jsx";

function App() {
  return (
    
    <BrowserRouter>
    <Pointer />
    <ScrollToTop /> {/* Always keep this above <Routes /> */}
    <Header />
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:id" element={<InnerProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
