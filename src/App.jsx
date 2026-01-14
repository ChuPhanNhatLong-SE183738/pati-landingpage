import "./App.css";
import FeatureList from "./components/FeatureList";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/index";
import IngredientsList from "./components/IngredientsList";
import LogoMarquee from "./components/LogoMarquee";
import ProductJudge from "./components/ProductJudge";
import ReviewRating from "./components/ReviewRating";
import WhyNothingHasWorked from "./components/WhyNothingHasWorked";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LogoMarquee />
      <ProductJudge />
      <WhyNothingHasWorked />
      <IngredientsList />
      <ReviewRating />
      <FeatureList />
    </div>
  );
}

export default App;
