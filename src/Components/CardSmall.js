import '../Components/CardSmall.css'
import Image1 from '../Images/cardbg1.jpg'


const CardSmall = (props) => {
    return ( 
        <div className="cardSmallWrapper">
        <div className='cardSmallBody'>
            <img src={Image1} alt="" />
            <div className="cardSmallContent">
            <p>10 Products</p>
            <h1>Ice Cream</h1>
            <p>{props.botCap}</p>
            </div>
        </div>

        <div className='cardSmallBody'>
            <img src={props.image} alt="" />
            <div className="cardSmallContent">
            <p>{props.topCap}</p>
            <h1>{props.title}</h1>
            <p>{props.botCap}</p>
            </div>
        </div>

        <div className='cardSmallBody'>
            <img src={props.image} alt="" />
            <div className="cardSmallContent">
            <p>{props.topCap}</p>
            <h1>{props.title}</h1>
            <p>{props.botCap}</p>
            </div>
        </div>

        <div className='cardSmallBody'>
            <img src={props.image} alt="" />
            <div className="cardSmallContent">
            <p>{props.topCap}</p>
            <h1>{props.title}</h1>
            <p>{props.botCap}</p>
            </div>
        </div>
        </div>
    );
}
 
export default CardSmall;