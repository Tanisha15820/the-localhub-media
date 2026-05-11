import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import SectionHeader from "./components/SectionHeader";
import AboutPage from "./Pages/AboutPage";
import Footer from "./components/Footer";
import ContactPage from "./Pages/ContactPage";


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

       <Footer/>
    </>
  );
}

export default App;