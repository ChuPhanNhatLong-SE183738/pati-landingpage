import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/index";
import LogoMarquee from "./components/LogoMarquee";
import ProductJudge from "./components/ProductJudge";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <ProductJudge />
    </div>
  );
}

export default App;
