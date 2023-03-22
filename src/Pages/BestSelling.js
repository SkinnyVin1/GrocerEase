import "./BestSelling.css";
import Beverage from "../Images/beverage.png";
import Vegetable from "../Images/vegetable.png";
import Meat from "../Images/meat.png";
import Beauty from "../Images/beauty.png";
import Bread from "../Images/bread.png";
import Accessories from "../Images/accesories.png";
import Supplies from "../Images/supplies.png";

import Category from "./Category";

const BestSelling = () => {
  return (
    <div className="bestSellingBody">
      <h1>Shop by Categories</h1>
      <div className="categ">
        <Category image={Beverage} title="Beverages" />
        <Category image={Vegetable} title="Vegetable" />
        <Category image={Meat} title="Meat" />
        <Category image={Beauty} title="Beauty" />
        <Category image={Bread} title="Bread" />
        <Category image={Accessories} title="Accessories" />
        <Category image={Supplies} title="Supplies" />
      </div>
    </div>
  );
};

export default BestSelling;
