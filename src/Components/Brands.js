import brand1 from "../Images/shop-images/coke_logo.png";
import brand2 from "../Images/shop-images/delmonte.png";
import brand3 from "../Images/shop-images/lays_logo.png";
import brand4 from "../Images/shop-images/nestle_logo.png";
import brand5 from "../Images/shop-images/smc_logo.png";
import brand6 from "../Images/shop-images/Tyson.png";
import "../Components/Brands.css"

const Brands = () => {
    return (
        <div className="brands">
            <div>
                <img src={brand1} alt="" />
            </div>
            <div>
                <img src={brand2} alt="" />
            </div>
            <div>
                <img src={brand3} alt="" />
            </div>
            <div>
                <img src={brand4} alt="" />
            </div>
            <div>
                <img src={brand5} alt="" />
            </div>
            <div>
                <img src={brand6} alt="" />
            </div>
        </div>
    );
}
 
export default Brands;