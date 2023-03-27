import Slider from "../Components/ShopSlider";
import SearchBar from "../Components/Search.js";
import Product from "../Components/Products";

const Shop = () => {
    return ( 
        <div className="shop">
            <Slider></Slider>
            <SearchBar></SearchBar>
            <Product></Product>
        </div>
     );
}
 
export default Shop;