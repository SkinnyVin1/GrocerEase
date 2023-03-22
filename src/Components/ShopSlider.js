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
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

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
        </div>
    </div>
  );
};

export default Slider;
