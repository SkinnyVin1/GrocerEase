import Item from "./Item";

import c1 from "../Images/shop-images/Products/c3.png"
import c2 from "../Images/shop-images/Products/s2.png"
import c3 from "../Images/shop-images/Products/aa.png"
import c4 from "../Images/shop-images/Products/s3.png"
import c5 from "../Images/shop-images/Products/c2.png"
import c6 from "../Images/shop-images/Products/bb.png"
import c7 from "../Images/shop-images/Products/m5.png"
import c8 from "../Images/shop-images/Products/v1.png"
import c9 from "../Images/shop-images/Products/m3.png"
import c10 from "../Images/shop-images/Products/c1.png"

import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import "../Components/Prods.css";

const Prods = () => {
  return (
    <div className="prodsItem">
      <Item
        image={c1}
        stat="In Stock"
        prodName="Ruffles"
        price="60"
        cart={Cart}
      />
      <Item
        image={c2}
        stat="In Stock"
        prodName="Nivea"
        price="100"
        cart={Cart}
      />
      <Item
        image={c3}
        stat="In Stock"
        prodName="Nescafe"
        price="150"
        cart={Cart}
      />
      <Item
        image={c4}
        stat="In Stock"
        prodName="Cetaphil"
        price="350"
        cart={Cart}
      />
      <Item
        image={c5}
        stat="In Stock"
        prodName="Oishi"
        price="40"
        cart={Cart}
      />
      <Item
        image={c6}
        stat="In Stock"
        prodName="Nutella"
        price="199"
        cart={Cart}
      />
      <Item
        image={c7}
        stat="In Stock"
        prodName="Bacon"
        price="150"
        cart={Cart}
      />
      <Item
        image={c8}
        stat="In Stock"
        prodName="Milk"
        price="99"
        cart={Cart}
      />
      <Item
        image={c9}
        stat="In Stock"
        prodName="Chili"
        price="50"
        cart={Cart}
      />
      <Item
        image={c10}
        stat="In Stock"
        prodName="Meat"
        price="199"
        cart={Cart}
      />
    </div>
  );
};

export default Prods;
