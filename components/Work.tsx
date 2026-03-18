import React from "react";
import Image from "next/image";
import Link from "next/link";

const workItems = [
  {
    title: "정밀 부품 제조",
    imgSrc: "/img/biz_specimens.jpg",
    description: "KS 규격 금속 시험편부터 각종 정밀 가공 부품 제작, 공급",
    link: "/work?type=specimens",
  },
  {
    title: "시험장비 설계·제작",
    imgSrc: "/img/biz_equipment.jpg",
    description: "고속인장시험기기, 자동화기기 등 현장 맞춤형 시험 장비 설계",
    link: "/work?type=equipment",
  },
  {
    title: "이송·물류 장비",
    imgSrc: "/img/biz_hoist.jpg",
    description: "호이스트, 컨베어 벨트(크린롤) 등 제작·납품",
    link: "/work?type=hoist",
  },
  {
    title: "교체·유지보수 장비",
    imgSrc: "/img/biz_reducer.jpg",
    description: "각종 감속기 교체 전용 장비, 소형 각도조절 테이블 등 현장 운영 장비",
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
      <div className="border-l-8 border-sky-700 mb-10 md:mb-20 pl-8">
        <h2 className="mb-4 opacity-70">저희 대동정밀의</h2>
        <h2 className="opacity-70">사업영역을 소개합니다.</h2>
        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">최선의 노력과 믿음을 다하여 제품 품질로 보답하고 있습니다.</p>
      </div>

      <div className="flex md:flex-row flex-col gap-2 w-full">
        {workItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="group grow border border-gray-300 rounded-lg flex-1 hover:flex-[3] duration-700 ease-in-out back relative overflow-hidden h-[480px] md:h-[460px]"
          >
            <Image src={item.imgSrc} alt={item.title} fill className="h-full rounded-md absolute object-cover" />
            <div className="absolute w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="p-4 relative flex flex-col justify-end h-full text-white">
              <h4>{item.title}</h4>
              <p className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 ease-out">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
