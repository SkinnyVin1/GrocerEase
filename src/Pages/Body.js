import "./Body.css";
import HeroCard from "./HeroCard";
import BestSelling from "./BestSelling";
import ThirdSectionHomepage from "../Components/ThirdSectionHomepage";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Body = () => {
  return (
    <div>
      <div className="homepageBody">
        <HeroCard />
      </div>
      <BestSelling />
      <ThirdSectionHomepage />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Body;
