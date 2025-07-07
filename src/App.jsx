import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "/src/Components/Home.jsx";
import Pointer from "./Components/Pointer";
import InnerProject from "./Components/InnerProject";

function App() {
  return (
    
    <BrowserRouter>
    <Pointer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<InnerProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
