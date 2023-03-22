import "../Components/CardSmall.css";
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
          <p>10 Products</p>
          <h1>Milks</h1>
          <p>{props.botCap}</p>
        </div>
      </div>

      <div className="cardSmallBody">
        <img src={Icecream} alt="" />
        <div className="cardSmallContent">
          <p>10 Products</p>
          <h1>Ice Creams</h1>
          <p>{props.botCap}</p>
        </div>
      </div>

      <div className="cardSmallBody">
        <img src={Meat} alt="" />
        <div className="cardSmallContent">
          <p>10 Products</p>
          <h1>Meats</h1>
          <p>{props.botCap}</p>
        </div>
      </div>

      <div className="cardSmallBody">
        <img src={Veggies} alt="" />
        <div className="cardSmallContent">
          <p>10 Products</p>
          <h1>Veggies</h1>
          <p>{props.botCap}</p>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
