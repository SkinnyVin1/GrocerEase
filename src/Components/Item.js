import "../Components/Item.css";

const Item = (props) => {
  return (
    <div className="itemBody">
      <div className="imgContainer">
        <img src={props.image} />
      </div>
      <p>{props.stat}</p>
      <h1>{props.prodName}</h1>
      <p>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
        (4.0)
      </p>
      <div className="btnContainer">
        <h1>₱{props.price}</h1>
        <button>
          <img src={props.cart} /> Add
        </button>
      </div>
    </div>
  );
};

export default Item;
