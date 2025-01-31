import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaInicial from "./pages/Home/PaginaInicial";
import AdicionarVisita from "./pages/AddVisit/AdicionarVisita";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="/adicionar-visita" element={<AdicionarVisita />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
