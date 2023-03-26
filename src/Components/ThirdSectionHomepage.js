import "../Components/ThirdSection.css";
import HomepageBanner from "./HomepageBanner";
import ProdCat from "./ProductCategory";
import Prods from "./Prods";

const ThirdSectionHomepage = () => {
  return (
    <div className="thirdBody">
      <HomepageBanner />
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
