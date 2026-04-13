import React from "react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "금속 각종 시험편",
    detail: "각종 금속 인장,충격 경도 굽힘 시험편 제작 전문 업체 입니다.",
    link: "/work?type=specimens",
    imgSrc: "/img/product_specimens.jpg",
  },
  {
    title: "고속인장충격시험기기",
    detail: "고속 인장 특성 측정 전용 시험 장비 제작·납품",
    link: "/work?type=equipment",
    imgSrc: "/img/product_equipment.jpg",
  },
  // {
  //   title: "자동화기기",
  //   detail: "공정 자동화를 위한 전용 장비 설계 및 제작",
  //   link: "/work?type=equipment",
  //   imgSrc: "/img/product_equipment.jpg",
  // },
  {
    title: "호이스트",
    detail: "5,000kg급 이하 각종 하중 조건 맞춤 제작",
    link: "/work?type=hoist",
    imgSrc: "/img/product_hoist.jpg",
  },
  {
    title: "컨베어 / 화물 리프트",
    detail: "클린룸 및 일반 환경용 컨베어 제작·납품",
    link: "/work?type=hoist",
    imgSrc: "/img/product_conveyor.png",
  },
  {
    title: "크린룸내 로봇트 감속기 교체 전용 장비",
    detail: "로봇·자동화 라인용 감속기 교체 전용 장비",
    link: "/work?type=reducer",
    imgSrc: "/img/product_reducer.jpg",
  },
  {
    title: "소형 각도조절 테이블",
    detail: "정밀 각도 세팅이 필요한 작업용 테이블 제작",
    link: "/work?type=reducer",
    imgSrc: "/img/product_table.jpg",
  },
  {
    title: "반자동 알곤 용접",
    detail: "MIG/TIG 정밀 용접 부품 및 구조물 용접",
    link: "/work?type=fabrication",
    imgSrc: "/img/product_welding.jpg",
  },
  {
    title: "시험지그 · 판금 · 가공",
    detail: "전용 지그 설계·제작, 판금 절단·절곡, 선반·밀링 가공",
    link: "/work?type=fabrication",
    imgSrc: "/img/product_overview.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="max-w-[1440px] mx-auto px-4">
      <div className="border-l-8 border-sky-700 mb-10 md:mb-16 pl-8 opacity-70">
        <h2 className="mb-2">제품 소개</h2>
        <p className="text-black/90 text-base">대동정밀 제품을 소개합니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link key={index} href={product.link} className="flex flex-col bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-sky-400 transition group overflow-hidden">
            <div className="relative w-full h-64">
              <Image src={product.imgSrc} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover rounded-t-xl" />
            </div>
            <div className="flex flex-col gap-2 p-5">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-sky-700 transition break-keep mb-0">{product.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed break-keep">{product.detail}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
