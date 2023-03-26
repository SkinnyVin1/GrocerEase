import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Breakpoints } from "swiper";
// SwiperCore.use([Breakpoints]);

import Item from "./Item";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import "../Components/CardSwiper.css";
import popular from "../Images/shop-images/Products/s2.png"
import popular1 from "../Images/shop-images/Products/d2.png"
import popular2 from "../Images/shop-images/Products/c2.png"
import popular3 from "../Images/shop-images/Products/p5.png"
import popular4 from "../Images/shop-images/Products/s4.png"
import popular5 from "../Images/shop-images/Products/c4.png"
import popular6 from "../Images/shop-images/Products/d3.png"


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardSwiper = () => {
  return (
    <div className="cardSwiperBody">
      <h1>Popular Products</h1>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={6}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        breakpoints={{
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
          885: {
            slidesPerView: 3,
            // spaceBetween: 40,
          },
          1023: {
            slidesPerView: 6,
            // spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide className="item">
          <Item
            image={popular}
            stat="In Stock"
            prodName="Nivea"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={popular1}
            stat="In Stock"
            prodName="Purfiltre"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={popular2}
            stat="In Stock"
            prodName="Oishi"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={popular6}
            stat="In Stock"
            prodName="Magnolia"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={popular3}
            stat="In Stock"
            prodName="Monster"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={popular4}
            stat="In Stock"
            prodName="Garnier"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={popular5}
            stat="In Stock"
            prodName="Cheetos"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSwiper;
