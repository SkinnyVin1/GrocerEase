import "./CardSmall.css";
import Image1 from "../Images/cardbg1.jpg";
import Icecream from '../Images/icecream.jpg'
import Milk from '../Images/milk (2).jpg';
import Meat from '../Images/meat.jpg'
import Veggies from '../Images/veggie.jpg'

const CardSmall = (props) => {
  return (
    <div className="cardSmallWrapper">
      <div className="cardSmallBody">
        <img src={Milk} alt="" />
        <div className="cardSmallContent">
          
          <h1>Beverages</h1>
          <p>Refreshing drinks to choose from.</p>
        </div>
      </div>

      <div className="cardSmallBody">
        <img src={Icecream} alt="" />
        <div className="cardSmallContent">
          
          <h1>Ice Creams</h1>
          <p>Frosty delight selection.</p>
        </div>
      </div>

      <div className="cardSmallBody">
        <img src={Meat} alt="" />
        <div className="cardSmallContent">
          
          <h1>Meats</h1>
          <p>Tender, juicy, delicious meats.</p>
        </div>
      </div>

      <div className="cardSmallBody">
        <img src={Veggies} alt="" />
        <div className="cardSmallContent">
          
          <h1>Produce</h1>
          <p>Farm-fresh produce daily.</p>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
