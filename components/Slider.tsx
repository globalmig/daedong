"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="relative w-full h-80 md:h-[640px]">
      <Swiper
        slidesPerView={1} // ← 여기!
        spaceBetween={0} // ← 간격 0
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ type: "progressbar" }}
        navigation
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper white-text w-full h-full"
      >
        <SwiperSlide className="relative">
          <Image src="/img/hero1.jpg" alt="Slide 1" fill priority sizes="100vw" quality={85} className="object-cover" />
          <div className="bg-black/40 w-full h-full absolute"></div>
          <div className="relative px-4 break-keep">
            <h2>30년 이상의 기술력과 신뢰, 대동정밀</h2>
            <p>1995년 창업 이래, 최선의 노력과 믿음으로 우수한 제품을 제공합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image src="/img/car.jpg" alt="Slide 2" fill priority sizes="100vw" quality={85} className="object-cover" />
          <div className="bg-black/40 w-full h-full absolute"></div>
          <div className="relative px-4 break-keep">
            <h2>정밀 가공부터 자동화 장비까지, 대동정밀</h2>
            <p>금속 시험편, 호이스트, 컨베어, 각종 감속기 등 다양한 산업 장비를 제작합니다.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image src="/img/bg_slider03.jpg" alt="Slide 3" fill priority sizes="100vw" quality={85} className="object-cover" />
          <div className="bg-black/40 w-full h-full absolute"></div>
          <div className="relative px-4 break-keep">
            <h2>삼성SDI, 삼성바이오로직스가 신뢰하는 파트너</h2>
            <p>국내 주요 기업 및 대학교와 함께하는 검증된 정밀 제조 전문 기업입니다.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
