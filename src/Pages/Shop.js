import Slider from "../Components/ShopSlider";
import SearchBar from "../Components/Search.js";
import Product from "../Components/Products";
import Footer from "../Components/Footer";
import NewsLetter from "../Components/NewsLetter";
import Brands from "../Components/Brands";

const Shop = () => {
    return (
        <div>
            <div className="shop">
                <Slider></Slider>
                <SearchBar></SearchBar>
                <Product></Product>
                <Brands></Brands>
            </div>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div> 
     );
}
 
export default Shop;