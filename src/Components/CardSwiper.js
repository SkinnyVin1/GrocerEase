
import Item from "./Item";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import "../Components/CardSwiper.css";
import popular from "../Images/shop-images/Products/s2.png"
import popular1 from "../Images/shop-images/Products/d2.png"
import popular2 from "../Images/shop-images/Products/c2.png"
import popular3 from "../Images/shop-images/Products/p5.png"
import popular4 from "../Images/shop-images/Products/s4.png"
import popular5 from "../Images/shop-images/Products/c4.png"
import popular6 from "../Images/shop-images/Products/d3.png"

const CardSwiper = () => {
  return (
    <div className="cardSwiperBody">
      <h1>Popular Products</h1>
      <div className="popular">
          <Item
            image={popular}
            stat="In Stock"
            prodName="Nivea"
            price="100"
            cart={Cart}
          />
          <Item
            image={popular1}
            stat="In Stock"
            prodName="Purfiltre"
            price="250"
            cart={Cart}
          />
          <Item
            image={popular2}
            stat="In Stock"
            prodName="Oishi"
            price="40"
            cart={Cart}
          />
          <Item
            image={popular6}
            stat="In Stock"
            prodName="Magnolia"
            price="290"
            cart={Cart}
          />
          <Item
            image={popular3}
            stat="In Stock"
            prodName="Monster"
            price="90"
            cart={Cart}
          />
          <Item
            image={popular4}
            stat="In Stock"
            prodName="Garnier"
            price="299"
            cart={Cart}
          />
      </div>
    </div>
  );
};

export default CardSwiper;
