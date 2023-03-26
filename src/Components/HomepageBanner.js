import "../Components/HomepageBanner.css";
import BannerImg1 from "../Images/slider-2-2.jpg";

const HomepageBanner = (props) => {
  return (
    <div className="bannerBod">
      <div className="container">
        <img src={props.image} />
        <div className="bannerContent">
          <h1>
            {props.title1} <br /> {props.title2}
          </h1>
          <p>{props.caption}</p>
        </div>
      </div>
    </div>
  );
};

export default HomepageBanner;
