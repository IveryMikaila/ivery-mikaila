import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

//import css
import '../styles/Work.css'

export default function Slides() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className="card1">
       <Link to={'#'} target="_blank" className="link">Waist Away by Moojy (old site)</Link>
        </SwiperSlide>
        <SwiperSlide className="card2">
        <Link className="link" to={'https://boyblondey.com/'} target="_blank">View</Link>
            </SwiperSlide>
        <SwiperSlide className="card3">
        <Link to={'https://brooklynhouseofhairllc.com/'} target="_blank" className="link">View</Link>
        </SwiperSlide>
        <SwiperSlide className="card4">
        <Link to={'https://candyl.netlify.app/'} target="_blank" className="link">View</Link>
        </SwiperSlide>
        <SwiperSlide className="card5">
          <Link to={'https://expo.dev/@mdesigns/joblist-react?serviceType=classic&distribution=expo-go'} target="_blank" className="link">View</Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}