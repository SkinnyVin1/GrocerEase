import React, { useState, useEffect } from "react";
import image1 from "../Images/shop-images/slider1.jpg";
import image2 from "../Images/shop-images/slider2.jpg";
import image3 from "../Images/shop-images/slider3.jpg";
import image4 from "../Images/shop-images/slider4.jpg";
import image5 from "../Images/shop-images/slider5.jpg";
import "../Components/ShopSlide.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const images = [image1, image2, image3, iymage4, image5];

const sentences = [
  "Coffee Lover's",
  "Healthy Snacking",
  "From Farm To",
  "Indulge Without",
  "Fuel Your Body",
];

//------------------------For Images------------------------------//
const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);
//----------------------------------------------------------------//


//------------------------For Sentences--------------------------------//
  const [sentenceIndex, setSentenceIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [sentenceIndex]);

  const firstSentence = sentenceIndex === 0;
  const secondSentence = sentenceIndex === 1;
  const thirdSentence = sentenceIndex === 2;
  const fourthSentence = sentenceIndex === 3;
  const lastSentence = sentenceIndex === 4;
//---------------------------------------------------------------------//
  

//------------------------For Next and Prev Buttons--------------------------------//
  const goToPreviousImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    const sentencePrev = sentenceIndex == 0 ? sentences.length -1 : sentenceIndex - 1;
    setSentenceIndex(sentencePrev);
    setCurrentImageIndex(prevIndex);
    setBackground(
      ["", "", "", "", ""].map((_, i) => (i === prevIndex ? "green" : ""))
    );
  };

  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    const sentenceNext = (sentenceIndex + 1) % sentences.length;
    setSentenceIndex(sentenceNext);
    setCurrentImageIndex(nextIndex);
    setBackground(
      ["", "", "", "", ""].map((_, i) => (i === nextIndex ? "green" : ""))
    );
  };
//----------------------------------------------------------------------------------//


//----------------------------For Pagination---------------------------------//
  const [pagibackground, setBackground] = useState(['green', '', '', '', '']);
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % 5; // cycle through the 5 images
      setCurrentImageIndex(nextIndex);
      setBackground(
        ["", "", "", "", ""].map((_, i) => (i === nextIndex ? "green" : ""))
      );
    }, 5000); // change every 3 seconds
    return () => clearInterval(timer); // clean up the timer on unmount
  }, [currentImageIndex]);

  const theActive = (event) => {
    const btnId = event.target.id;
    switch (btnId) {
      case "firstImg":
        setCurrentImageIndex(0);
        setSentenceIndex(0);
        if (currentImageIndex >= 0){
          setBackground(['green','','','','']);
        }
        break;
      case "secondImg":
        setCurrentImageIndex(1);
        setSentenceIndex(1);
        if (currentImageIndex >= 0){
          setBackground(['','green','','','']);
        }
        break;
      case "thirdImg":
        setCurrentImageIndex(2);
        setSentenceIndex(2);
        if (currentImageIndex >= 0){
          setBackground(['','','green','','']);
        }
        break;
      case "fourthImg":
        setCurrentImageIndex(3);
        setSentenceIndex(3);
        if (currentImageIndex >= 0){
          setBackground(['','','','green','']);
        }
        break;
      case "fifthImg":
        setCurrentImageIndex(4);
        setSentenceIndex(4);
        if (currentImageIndex >= 0){
          setBackground(['','','','','green']);
        }
        break;
      default:
        break;
    }
  }
//------------------------------------------------------------------------//

  return (
    <div className="slider">
        <div className='shopImages'>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className='slider-wrapper' />

            <div className="buttons">
                <div className="btnContainer1">
                    <button onClick={goToPreviousImage} className="leftbtn"><i class="fa-solid fa-circle-arrow-left"></i></button>
                </div>
                <div className="btnContainer2">
                    <button onClick={goToNextImage} className="rightbtn"><i class="fa-solid fa-circle-arrow-right"></i></button>
                </div>
            </div>
          <div className='pagination'>
            <button id='firstImg' onClick={theActive} style={{background: pagibackground[0]}}></button>
            <button id='secondImg' onClick={theActive} style={{background: pagibackground[1]}}></button>
            <button id='thirdImg' onClick={theActive} style={{background: pagibackground[2]}}></button>
            <button id='fourthImg' onClick={theActive} style={{background: pagibackground[3]}}></button>
            <button id='fifthImg' onClick={theActive} style={{background: pagibackground[4]}}></button>
          </div>
          <div className='sentence'>
            <h1 className={`${firstSentence ? "first-sentence" : ""} ${secondSentence ? "second-sentence" : ""} ${thirdSentence ? "third-sentence" : ""} ${fourthSentence ? "fourth-sentence" : ""} ${lastSentence ? "last-sentence" : ""}`}>{sentences[sentenceIndex]}</h1>
            {firstSentence && <h1 className='first-sentence delight'>Delight!</h1>}
            {firstSentence && <p className='coffeeP'>Enjoy Discounted Coffee with Our Latest Offer</p>}
            {secondSentence && <h1 className='second-sentence madeEasy'>Made Easy</h1>}
            {secondSentence && <p className='healthSnack'>Save Big on Our Selection of Premium Fruits</p>}
            {thirdSentence && <h1 className='third-sentence yourTable'>Your Table</h1>}
            {thirdSentence && <p className='stockUp'>Stock Up on Our Selection of Premium Produce</p>}
            {fourthSentence && <h1 className='fourth-sentence guilt'>The Guilt</h1>}
            {fourthSentence && <p className='getYour'>Get Your Favorite Snacks with Exciting Deals</p>}
            {lastSentence && <h1 className='last-sentence withTheBest'>with the Best</h1>}
            {lastSentence && <p className='enjoyDis'>Enjoy Discounts on Our Range of Healthy Foods</p>}
          </div>
        </div>
    </div>
  );
};

export default Slider;
