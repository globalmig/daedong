"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

const slides = [
  {
    src: "/img/hero1.jpg",
    alt: "Slide 1",
    title: "30년 이상의 기술력과 신뢰, 대동정밀",
    desc: "1995년 창업 이래, 최선의 노력과 믿음으로 우수한 제품을 제공합니다.",
    priority: true,
  },
  {
    src: "/img/hero_factory.jpg",
    alt: "Slide 2",
    title: "정밀 가공부터 자동화 장비까지, 대동정밀",
    desc: "금속 시험편, 호이스트, 컨베어, 각종 감속기 등 다양한 산업 장비를 제작합니다.",
    priority: false,
  },
  {
    src: "/img/bg_slider03.jpg",
    alt: "Slide 3",
    title: "삼성SDI, 삼성바이오로직스가 신뢰하는 파트너",
    desc: "국내 주요 기업 및 대학교와 함께하는 검증된 정밀 제조 전문 기업입니다.",
    priority: false,
  },
];

export default function Slider() {
  return (
    <div className="relative w-full h-screen md:h-[640px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper white-text w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.alt} className="relative">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={slide.priority}
              sizes="100vw"
              quality={80}
              className="object-cover"
            />
            <div className="bg-black/40 absolute inset-0" />
            <div className="relative px-4 break-keep">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 스크롤 다운 아이콘 */}
      <button
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        aria-label="스크롤 다운"
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors md:hidden"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <span className="scroll-down-arrow" />
      </button>
    </div>
  );
}
