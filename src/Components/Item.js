import "../Components/Item.css";
import { useState } from "react";

const Item = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState('none');

  const modalOpen = () =>{
    setOpen(open === 'none' ? 'block' : 'none');
  }

  function toggleModal() {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  return (
    <div className="itemBody">
      <div className="imgContainer">
        <img src={props.image} />
      </div>
      <div className="prodName">
        <p className="stat">{props.stat}</p>
        <h1>{props.prodName}</h1>
        <div className="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          (4.0)
        </div>
      </div>
      <div className="btnContainer">
        <h1>₱{props.price}</h1>
        <div>
          <button onClick={() => {toggleModal(); modalOpen()}}>
            <img src={props.cart} /> Buy
          </button>
          <div className="modal" style={{display: open}}>
            <div className="modal-content">
              <h1>Basta modal to</h1>
              <button onClick={() => {toggleModal(); modalOpen()}}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
