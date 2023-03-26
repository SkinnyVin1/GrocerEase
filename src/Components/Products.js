import "../Components/Products.css"
import product1 from "../Images/shop-images/Products/cola.jpg"
import Item from "./Item";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import ProdCat from "./ProductCategory";
import prodAd from "../Images/shop-images/Products/PR.jpg"

const Product = () => {
    return (
        <div className="product">
            <h1 className="shopHead">SHOP NOW</h1>
            <div className="shopNow">
                <div className="ProductItems">
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                </div>
                <div className="ProductsCategs">
                    <ProdCat heading="Product Categories"
                    category1="Beverages"
                    category2="Chips & Snaks"
                    category3="Health & Beauty"
                    category4="Meats"
                    category5="Milks & Daries"
                    category6="Vegetables"
                    />
                </div>
            </div>
            <div className="nextProd">
                <div className="nextProdImage">
                    <img src={prodAd} alt="" />
                </div>
                <div className="ProductItems prodItems2">
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                </div>
            </div>
            <hr />
            <div>
                <div className="ProductItems prodItems3">
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                    <Item image={product1} stat="IN STOCK" prodName="Cola" price="50" cart={Cart}></Item>
                </div>
            </div>
        </div>
    );
}
 
export default Product;