import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import Remision from "./pages/Remision";
import Home from "./pages/Home";
import SidebarMenu from "./components/navegacion/SidebarMenu";

function App() {
  return (
    <Router>
      <SidebarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/remision/" element={<Remision />} />
        <Route path="/remision/clientes" element={<Clientes />} />
        <Route path="/remision/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}

export default App;
