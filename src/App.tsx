import { Routes, Route } from "react-router";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import TheHeartDeepDownPage from "./pages/projects/the-heart-deep-down/TheHeartDeepDownPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="/the-heart-deep-down" element={<TheHeartDeepDownPage />} />
    </Routes>
  );
}