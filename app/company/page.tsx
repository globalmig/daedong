import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import React from "react";
import Image from "next/image";

export default function company() {
  return (
    <>
      <section>
        <Hero title={"회사소개"} subtitle={"대동정밀을 소개합니다."} img={"/img/hero1.jpg"} priority />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 py-14 md:py-20">
        <div className="border-l-8 border-sky-700 pl-8 mb-10">
          <h2 className="opacity-70">대표 소개</h2>
          <p className="text-black/50 mt-2">홍 찬 국</p>
        </div>
        <ul className="border-2 p-10 md:px-24 rounded-xl list-disc leading-loose flex flex-col gap-4 break-keep text-gray-700">
          <li>1995년 7월 8일 대동정밀 창업</li>
          <li>30년 이상 정밀 부품 제작 경력</li>
          <li>금속 인장·충격 시험편 전문 제조</li>
          <li>호이스트·컨베어·감속기 장비 납품</li>
          <li>삼성SDI, 삼성바이오로직스 납품</li>
          <li>세종대학교, 건국대학교 납품</li>
          <li>판금·가공·용접 일괄 제작 서비스</li>
        </ul>
      </section>

      <section className="relative min-h-[720px] md:min-h-[800px] text-white py-14 md:py-20 flex items-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 overflow-hidden">
          <Image src="/img/bg_ceo.jpg" alt="Hero Image" fill sizes="100vw" className="object-cover object-top blur-sm" />
          {/* 반투명 오버레이 */}
          <div className="absolute inset-0 bg-[#1b2030]/80 md:bg-[#1b2030]/70 pointer-events-none" />
          {/* 하단 가독성 보강용 그라디언트(선택) */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6">
          <h2 className="leading-snug text-3xl md:text-4xl border-l-4 px-4 mb-10 md:mb-20">30년 이상의 기술과 믿음으로, 고객의 요구에 최선을 다합니다.</h2>

          <pre className="whitespace-pre-wrap break-words text-base sm:text-[17px] md:text-lg leading-relaxed md:leading-8 text-white/90 tracking-wide mx-auto md:mx-0 w-full">
            저희 대동정밀은 1995년 7월 8일 개업하여 30년 이상 닦아온 기술과 오랜 경험을 바탕으로
            {"\n"}우수한 제품과 각종 지그 장비를 최선의 노력과 믿음을 다하여 제품 품질로 보답하고 있습니다.
            {"\n\n"}
            금속 인장시험편, 충격(샤르피) 시험편, 압축·굽힘 시험편 등 KS 규격에 맞는 각종 시험편을 정밀하게 제작하며,
            {"\n"}고속인장시험기기, 자동화기기, 호이스트, 컨베어(크린롤), 각종 감속기 교체용 장비,
            {"\n"}소형 각도조절 테이블, 시험지그, 판금 가공, 반자동 알곤 용접까지 일괄 제작·납품합니다.
            {"\n\n"}
            삼성SDI, 삼성바이오로직스, 세종대학교, 건국대학교 등 국내 주요 기관 및 기업과 지속적인 거래를 이어오고 있으며,
            {"\n"}앞으로도 고객의 신뢰에 보답하는 정밀 제조 파트너가 되겠습니다.
            {"\n\n"}
            <span className="block mt-8 md:mt-10 text-right font-semibold">
              대동정밀 대표 <strong>홍 찬 국</strong>
            </span>
          </pre>
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}
