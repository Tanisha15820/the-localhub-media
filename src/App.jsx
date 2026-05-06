import Header from "./components/Header";
import ServicesSection from "./components/ServicesSection";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesSection />} />
      </Routes>
    </>
  );
}

export default App;