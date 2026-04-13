import React from "react";
import Image from "next/image";
import Link from "next/link";

const workItems = [
  {
    title: "시험편 제작",
    imgSrc: "/img/biz_specimens.jpg",
    description: "각종 금속 인장,충격 경도 굽힘 시험편 제작 전문 업체",
    link: "/work?type=specimens",
  },
  {
    title: "시험장비 설계·제작",
    imgSrc: "/img/biz_equipment.jpg",
    description: "고속인장충격시험기기",
    link: "/work?type=equipment",
  },
  {
    title: "이송·물류 장비",
    imgSrc: "/img/biz_hoist.jpg",
    description: "호이스트, 컨베어 등 제작 납품",
    link: "/work?type=hoist",
  },
  {
    title: "교체·유지보수 장비",
    imgSrc: "/img/biz_reducer.jpg",
    description: "크린룸내 로봇트 감속기 교체 전용 장비",
    link: "/work?type=reducer",
  },
  {
    title: "판금·용접·가공",
    imgSrc: "/img/biz_welding.jpg",
    description: "반자동 알곤 용접, 판금 절단·절곡, 시험지그 제작 등 다양한 가공 서비스",
    link: "/work?type=fabrication",
  },
];

export default function Work() {
  return (
    <div className="px-4 max-w-[1440px] mx-auto flex flex-col justify-center">
      <div className="border-l-8 border-sky-700 mb-10 md:mb-20 pl-4">
        <h2 className="mb-0 opacity-70">저희 대동정밀의</h2>
        <h2 className="opacity-70 mb-4">사업영역을 소개합니다.</h2>

        <p className="text-gray-600 text-base">최선의 노력과 믿음을 다하여 제품 품질로 보답하고 있습니다.</p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:justify-center lg:flex-nowrap w-full">
        {workItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group border border-gray-300 rounded-lg relative overflow-hidden
              w-full h-56
              md:w-[calc(33.333%-0.5rem)] md:h-[400px]
              lg:flex-1 lg:w-auto lg:h-[460px] lg:hover:flex-[3]
              duration-700 ease-in-out"
          >
            <Image src={item.imgSrc} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw" className="h-full rounded-md absolute object-cover" />
            <div className="absolute w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="p-4 relative flex flex-col justify-end h-full text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-0 group-hover:mb-3 transition-all duration-500">{item.title}</h3>
              <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 ease-out">
                <p>{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
