import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
const feedback = () => {
  return (
    <div className="feedback">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="feedback_flex">
          <img src="/lp/review3.png" alt="" />
          <h3>Joe Peters</h3>
          <p>
            This is the first freelancing company for sollar installers I have
            worked with. The journey has been fine so far with little hiccups.
          </p>
          <div className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback_flex">
          <img src="/lp/review2.png" alt="" />
          <h3>Mark Anthony</h3>
          <p>
            It's been a wonderful experience working with Instollar. Though
            their are some works in progress due to location.
          </p>
          <div className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback_flex">
          <img src="/lp/review1.png" alt="" />
          <h3>Matthew Sam</h3>
          <p>
            The platform is user-friendly and makes it easy for me to find new
            clients and grow my business.
          </p>
          <div className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </SwiperSlide>
        <SwiperSlide className="feedback_flex">
          <img src="/lp/review3.png" alt="" />
          <h3>Joe Peters</h3>
          <p>
            This is the first freelancing company for sollar installers I have
            worked with. The journey has been fine so far with little hiccups.
          </p>
          <div className="star">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default feedback;
