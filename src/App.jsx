import "./App.css";
import ExpertAdvice from "./components/ExpertAdvice";
import FAQs from "./components/FAQs";
import FeatureList from "./components/FeatureList";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection/index";
import IngredientsList from "./components/IngredientsList";
import LogoMarquee from "./components/LogoMarquee";
import PercentageProduct from "./components/PercetageProduct";
import ProductJudge from "./components/ProductJudge";
import ReviewRating from "./components/ReviewRating";
import StopMasking from "./components/StopMasking";
import VideoList from "./components/VideoList";
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
      <ExpertAdvice />
      <VideoList />
      <FAQs />
      <PercentageProduct />
      <StopMasking />
    </div>
  );
}

export default App;
