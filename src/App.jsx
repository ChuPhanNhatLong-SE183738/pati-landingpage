import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/index";
import LogoMarquee from "./components/LogoMarquee";
import ProductJudge from "./components/ProductJudge";
import WhyNothingHasWorked from "./components/WhyNothingHasWorked";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <ProductJudge />
      <WhyNothingHasWorked />
    </div>
  );
}

export default App;
