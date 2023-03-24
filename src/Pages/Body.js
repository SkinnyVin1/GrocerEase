import "./Body.css";
import HeroCard from "./HeroCard";
import BestSelling from "./BestSelling";
import ThirdSectionHomepage from "../Components/ThirdSectionHomepage";
const Body = () => {
  return (
    <div>
      <div className="homepageBody">
        <HeroCard />
      </div>
      <BestSelling />
      <ThirdSectionHomepage />
    </div>
  );
};

export default Body;
