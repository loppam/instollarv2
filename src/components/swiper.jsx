import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar, AiFillBulb } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { BsShieldFillCheck } from "react-icons/bs";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        spaceBetween={40}
        slidesPerView={"auto"}
        modules={[Navigation]}
        className="mySwiper"
      >
          <SwiperSlide>
            <img src="/lp/swiper.png" alt="" />
            <div className="text">
              <h6>Olumide Adeyemi</h6>
              <p>
                <AiFillStar className="col" /> 4.5/5.0
              </p>
            </div>
            <div className="text2">
              <p>Residential Projects</p>
              <p className="align">
                <MdLocationPin />
                Lagos, Nigeria
              </p>
            </div>
            <div className="trusted">
              <div className="shield">
                <BsShieldFillCheck />
                <BsShieldFillCheck />
              </div>
              <AiFillBulb />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/lp/swiper3.png" alt="" />
            <div className="text">
              <h6>Chukwu Okonkwo</h6>
              <p>
                <AiFillStar className="col" /> 4.5/5.0
              </p>
            </div>
            <div className="text2">
              <p>Residential Projects</p>
              <p className="align">
                <MdLocationPin />
                Lagos, Nigeria
              </p>
            </div>
            <div className="trusted">
              <div className="shield">
                <BsShieldFillCheck />
                <BsShieldFillCheck />
              </div>
              <AiFillBulb />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/lp/swiper2.png" alt="" />
            <div className="text">
              <h6>Ibrahim Hassan</h6>
              <p>
                <AiFillStar className="col" /> 4.5/5.0
              </p>
            </div>
            <div className="text2">
              <p>Residential Projects</p>
              <p className="align">
                <MdLocationPin />
                Lagos, Nigeria
              </p>
            </div>
            <div className="trusted">
              <div className="shield">
                <BsShieldFillCheck />
                <BsShieldFillCheck />
              </div>
              <AiFillBulb />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/lp/swiper.png" alt="" />
            <div className="text">
              <h6>Olumide Adeyemi</h6>
              <p>
                <AiFillStar className="col" /> 4.5/5.0
              </p>
            </div>
            <div className="text2">
              <p>Residential Projects</p>
              <p className="align">
                <MdLocationPin />
                Lagos, Nigeria
              </p>
            </div>
            <div className="trusted">
              <div className="shield">
                <BsShieldFillCheck />
                <BsShieldFillCheck />
              </div>
              <AiFillBulb />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/lp/swiper.png" alt="" />
            <div className="text">
              <h6>Olumide Adeyemi</h6>
              <p>
                <AiFillStar className="col" /> 4.5/5.0
              </p>
            </div>
            <div className="text2">
              <p>Residential Projects</p>
              <p className="align">
                <MdLocationPin />
                Lagos, Nigeria
              </p>
            </div>
            <div className="trusted">
              <div className="shield">
                <BsShieldFillCheck />
                <BsShieldFillCheck />
              </div>
              <AiFillBulb />
            </div>
          </SwiperSlide>
      </Swiper>
    </>
  );
}
