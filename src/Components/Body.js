import "../Components/Body.css";
import HeroCard from "./HeroCard";
import BestSelling from "./BestSelling";

const Body = () => {
  return (
    <div>
      <div className="homepageBody">
        <HeroCard />
      </div>
      <BestSelling />
    </div>
  );
};

export default Body;
