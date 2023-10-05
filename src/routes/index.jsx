import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Buttons from "../pages/Buttons";
import Contact from "../pages/Contact";

export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/botaos" element={<Buttons />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
