import "../Components/ThirdSection.css";
import HomepageBanner from "./HomepageBanner";
import AdImg from "../Images/PR.jpg";
import Prods from "./Prods";
import BannerImg1 from "../Images/slider-2-2.jpg";

const ThirdSectionHomepage = () => {
  return (
    <div className="thirdBody">
      <HomepageBanner
        image={BannerImg1}
        title1="Pure Coffe"
        title2="Big Discount"
        caption="Save up to 35% on your first order"
      />
      <div className="prodFilter">
        <div className="prods">
          <Prods />
        </div>
        <div className="ad">
          <h2>Freshly Produce Orange Juice</h2>
          <img src={AdImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionHomepage;
