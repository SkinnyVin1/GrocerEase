import "../Components/HomepageBanner.css";
import BannerImg1 from "../Images/slider-2-2.jpg";

const HomepageBanner = () => {
  return (
    <div className="bannerBod">
      <div className="container">
        <img src={BannerImg1} />
        <div className="bannerContent">
          <h1>
            Pure Coffe <br /> Big Discount
          </h1>
          <p>Save up to 35% on your first order</p>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
