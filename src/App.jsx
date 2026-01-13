import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/index";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import IngredientsSection from "./components/IngredientsSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <IngredientsSection />
    </div>
  );
}

export default App;
