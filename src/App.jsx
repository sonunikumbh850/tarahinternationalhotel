import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import NavbarComponents from "./components/NavbarComponents";
import Home from "./pages/Home";
import Services from "./pages/Services";
import RoomRestaurant from "./pages/RoomRestaurant";
import Gallery from "./pages/Gallery";
import PricingPlan from "./pages/PricingPlan";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Support from "./pages/Support";
import DestinationDetail from "./components/DestinationDetail";
import BookingConfirmation from "./components/BookingConfirmation";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <div className="fade-in">
        <NavbarComponents />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rooms" element={<RoomRestaurant />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing-plan" element={<PricingPlan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/supports" element={<Support />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}

export default App;