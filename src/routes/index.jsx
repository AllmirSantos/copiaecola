import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Buttons from "../pages/Buttons";
import Contact from "../pages/Contact";
import Inputs from "../pages/Inputs";
import ThemePage from "../pages/ThemePage";
import Animations from "../pages/Animations";

export default function AplicationRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/botaos" element={<Buttons />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/inputs" element={<Inputs />} />
        <Route path="/theme-page" element={<ThemePage />} />
        <Route path="/animations" element={<Animations />} />
      </Routes>
    </BrowserRouter>
  );
}
