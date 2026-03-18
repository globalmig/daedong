import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Hero from "@/components/Hero";
import React from "react";

export default function Map() {
  return (
    <>
      <section className="mb-40">
        <Hero title={"오시는 길"} subtitle={"대동정밀 위치 및 연락처를 안내해드립니다."} img={"/img/bg_hero_factory.jpg"} priority />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 mb-20">
        <div className="border-l-8 border-sky-700 pl-8 mb-10">
          <h2>찾아오시는 길</h2>
          <p className="text-black/50">Location & Contact</p>
        </div>

        <GoogleMap />

        <div className="grid grid-cols-1 md:grid-cols-2 border rounded-xl overflow-hidden mt-10">
          {[
            { label: "주소", value: "서울시 성동구 광나루로 229 1층 (송정동 81-18)" },
            { label: "대표", value: "홍찬국" },
            { label: "전화", value: "02-463-9942" },
            { label: "휴대폰", value: "010-5245-4462" },
            { label: "팩스", value: "02-466-3018" },
            { label: "이메일", value: "dedong4462@naver.com" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-6 px-6 py-4 border-b border-r last:border-b-0 odd:last:border-b">
              <span className="w-20 text-sm font-semibold text-sky-700 shrink-0">{item.label}</span>
              <span className="text-gray-700">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
}
