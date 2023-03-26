import "../Components/ThirdSection.css";
import HomepageBanner from "./HomepageBanner";
import ProdCat from "./ProductCategory";
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
        <div className="filter">
          <ProdCat
            heading="Product Categories"
            category1="Beverages"
            category2="Chips & Snaks"
            category3="Health & Beauty"
            category4="Meats"
            category5="Milks & Daries"
            category6="Vegetables"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdSectionHomepage;
