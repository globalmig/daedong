import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Image from "next/image";
import React from "react";

const clients = [
  {
    name: "Samsung SDI",
    nameKo: "삼성SDI",
    category: "대기업",
    description: "2차전지 및 에너지 솔루션 분야의 글로벌 선도 기업. 시험편 및 시험기기 납품.",
    logoSrc: "/img/logo_samsung_sdi.png",
  },
  {
    name: "Samsung Biologics",
    nameKo: "삼성바이오로직스",
    category: "대기업",
    description: "글로벌 바이오의약품 위탁생산(CMO) 전문기업. 정밀 장비 납품.",
    logoSrc: "/img/logo_samsung_biologics.png",
  },
  {
    name: "Sejong University",
    nameKo: "세종대학교",
    category: "대학교",
    description: "서울 소재 종합대학교. 실험실 및 연구용 시험편·시험기기 납품.",
    logoSrc: "/img/logo_sejong.png",
  },
  {
    name: "Konkuk University",
    nameKo: "건국대학교",
    category: "대학교",
    description: "서울 소재 종합대학교. 실험 및 연구 목적의 정밀 시험편 납품.",
    logoSrc: "/img/logo_konkuk.png",
  },
];

export default function ClientsPage() {
  return (
    <>
      <section>
        <Hero title={"주요거래처"} subtitle={"대동정밀의 주요 납품처를 소개합니다."} img={"/img/bg_slider03.jpg"} priority />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 py-16 md:py-24">
        <div className="border-l-8 border-sky-700 pl-8 mb-16">
          <h2>주요거래처</h2>
          <p className="text-black/50">Major Clients</p>
        </div>

        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-16 break-keep">
          대동정밀은 1995년 창업 이래 삼성SDI, 삼성바이오로직스, 세종대학교, 건국대학교 등 국내 주요 대기업 및 대학교·연구기관에 정밀 시험편과 각종 장비를 납품해 왔습니다.
          <br className="hidden md:block" />
          오랜 신뢰 관계를 바탕으로 고객의 요구에 맞는 최고의 품질을 제공하겠습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center gap-6 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition bg-white">
              {/* 로고 영역 */}
              <div className="w-full h-28 flex items-center justify-center bg-gray-50 rounded-xl p-4">
                <Image src={client.logoSrc} alt={client.nameKo} width={180} height={100} className="object-contain w-full h-full" />
              </div>

              {/* 텍스트 영역 */}
              <div className="flex flex-col items-center text-center gap-1 w-full">
                <span className="text-xs text-sky-600 font-semibold uppercase tracking-wide">{client.category}</span>
                <h3 className="text-lg font-bold text-slate-800">{client.nameKo}</h3>
                <p className="text-xs text-gray-400">{client.name}</p>
                <p className="text-sm text-gray-600 leading-relaxed break-keep mt-2">{client.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 추가 설명 */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-10 md:p-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">더 많은 거래처와 함께하고 있습니다.</h3>
          <p className="text-gray-600 leading-relaxed break-keep">
            위 주요 거래처 외에도 다양한 제조업체·연구기관과 꾸준히 협력하고 있습니다.
            <br />
            제품 및 납품에 관한 문의는 아래 문의하기를 이용해 주세요.
          </p>
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}
