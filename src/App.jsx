import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SectionHeader from "./components/SectionHeader";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;