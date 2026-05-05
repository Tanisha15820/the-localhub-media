import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Header fixed hai — har page par dikhega */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/services"  element={<ServicesPage />} /> */}
        {/* <Route path="/about"     element={<AboutPage />} /> */}
        {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
        {/* <Route path="/contact"   element={<ContactPage />} /> */}
      </Routes>
    </>
  );
}

export default App;