import "../Components/NewsLetterContent.css";
import PaperPlane from "../Images/paper-plane-regular.png";

const NewsLetterContent = (props) => {
  return (
    <div className="newscontainer">
      <div className="textContent">
        <h1>{props.newsTitle1}</h1>
        <h1>{props.newsTitle2}</h1>
        <p>{props.caption}</p>
        <div className="formContainer">
          <img src={PaperPlane} />
          <button id="inputBtn">Subscribe</button>
          <input type="text" id="inputText" placeholder="Your Email" />
        </div>
      </div>
      <img src={props.img} />
    </div>
  );
};

export default NewsLetterContent;
