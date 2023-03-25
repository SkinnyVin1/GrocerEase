import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Item from "./Item";
import Cart from "../Images/146-basket-trolley-shopping-card-outline.png";
import "../Components/CardSwiper.css";
import Milk from "../Images/milk.png";

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
        spaceBetween={10}
        slidesPerView={6}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="item">
          <Item
            image={Milk}
            stat="In Stock"
            prodName="Fresh Bottled Natural Milk"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={Milk}
            stat="In Stock"
            prodName="Fresh Bottled Natural Milk"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={Milk}
            stat="In Stock"
            prodName="Fresh Bottled Natural Milk"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={Milk}
            stat="In Stock"
            prodName="Fresh Bottled Natural Milk"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={Milk}
            stat="In Stock"
            prodName="Fresh Bottled Natural Milk"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={Milk}
            stat="In Stock"
            prodName="Fresh Bottled Natural Milk"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
        <SwiperSlide className="item">
          <Item
            image={Milk}
            stat="In Stock"
            prodName="Fresh Bottled Natural Milk"
            price="179.18"
            cart={Cart}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSwiper;
