import React, { useState, useEffect } from 'react';
import image1 from "../Images/shop-images/slider1.jpg";
import image2 from "../Images/shop-images/slider2.jpg";
import image3 from "../Images/shop-images/slider3.jpg";
import image4 from "../Images/shop-images/slider4.jpg";
import image5 from "../Images/shop-images/slider5.jpg";
import "../Components/ShopSlide.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToPreviousImage = () => {
    const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setBackground(
      ['', '', '', '', ''].map((_, i) => (i === prevIndex ? 'green' : ''))
    );
  };
  
  const goToNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
    setBackground(
      ['', '', '', '', ''].map((_, i) => (i === nextIndex ? 'green' : ''))
    );
  };
  
  // For Pagination //

  const [pagibackground, setBackground] = useState(['green', '', '', '', '']);
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % 5; // cycle through the 5 images
      setCurrentImageIndex(nextIndex);
      setBackground(
        ['', '', '', '', ''].map((_, i) => (i === nextIndex ? 'green' : ''))
      );
    }, 5000); // change every 3 seconds

    return () => clearInterval(timer); // clean up the timer on unmount
  }, [currentImageIndex]);

  const theActive = (event) => {
    const btnId = event.target.id;
    switch (btnId){
      case 'firstImg':
        setCurrentImageIndex(0);
        if (currentImageIndex >= 0){
          setBackground(['green','','','','']);
        }
        break;
      case 'secondImg':
        setCurrentImageIndex(1);
        if (currentImageIndex >= 0){
          setBackground(['','green','','','']);
        }
        break;
      case 'thirdImg':
        setCurrentImageIndex(2);
        if (currentImageIndex >= 0){
          setBackground(['','','green','','']);
        }
        break;
      case 'fourthImg':
        setCurrentImageIndex(3);
        if (currentImageIndex >= 0){
          setBackground(['','','','green','']);
        }
        break;
      case 'fifthImg':
        setCurrentImageIndex(4);
        if (currentImageIndex >= 0){
          setBackground(['','','','','green']);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="slider">
        <div className='shopImages'>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />

            <div className="buttons">
                <div className="btnContainer1">
                    <button onClick={goToPreviousImage} className="leftbtn"><i class="fa-solid fa-chevron-left"></i></button>
                </div>
                <div className="btnContainer2">
                    <button onClick={goToNextImage} className="rightbtn"><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
          <div className='pagination'>
            <button id='firstImg' onClick={theActive} style={{background: pagibackground[0]}}></button>
            <button id='secondImg' onClick={theActive} style={{background: pagibackground[1]}}></button>
            <button id='thirdImg' onClick={theActive} style={{background: pagibackground[2]}}></button>
            <button id='fourthImg' onClick={theActive} style={{background: pagibackground[3]}}></button>
            <button id='fifthImg' onClick={theActive} style={{background: pagibackground[4]}}></button>
          </div>
        </div>
    </div>
  );
};

export default Slider;
