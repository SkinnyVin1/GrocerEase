import "../Components/Products.css"
import product1 from "../Images/shop-images/Products/cola.jpg"
import ProductCard from "./productCard";

const Product = () => {
    return (
        <div className="product">
            <h1>SHOP NOW</h1>
            <div>
                <ProductCard product1={product1} text1="Coca Cola"></ProductCard>
            </div>
        </div>
    );
}
 
export default Product;