import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "/src/Components/Header.jsx";
import Home from "/src/Components/Home.jsx";
import Pointer from "/src/Components/Pointer";
import InnerProject from "/src/Components/InnerProject";
import ContactPage from "/src/Pages/ContactPage";

function App() {
  return (
    
    <BrowserRouter>
    <Pointer />
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project/:id" element={<InnerProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
