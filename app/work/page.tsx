"use client";
import Contact from "@/components/Contact";
import Figure01 from "@/components/Figure01";
import Hero from "@/components/Hero";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

type WorkType = "specimens" | "equipment" | "hoist" | "reducer" | "fabrication";

export default function WorkPage() {
  const router = useRouter();
  const pathname = usePathname();

  const [isType, setType] = useState<WorkType>("specimens");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type") as WorkType | null;
    const allowed: WorkType[] = ["specimens", "equipment", "hoist", "reducer", "fabrication"];

    if (typeParam && allowed.includes(typeParam)) {
      setType(typeParam);
    }
  }, []);

  const SelectType = useCallback(
    (value: WorkType) => {
      setType(value);

      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        params.set("type", value);
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [router, pathname],
  );

  const btnBase = "border-[1.2px] border-gray-300 shadow-md rounded-xl py-6 transition break-keep";
  const btnClass = (active: boolean) => (active ? `${btnBase} bg-black text-white hover:bg-black hover:text-white` : `${btnBase} bg-white hover:bg-blue-50 hover:text-black`);

  return (
    <>
      <section>
        <Hero title={"제품소개"} subtitle={"대동정밀의 제품 및 서비스를 소개합니다."} img={"/img/콘베어밸트.jpg"} priority />
      </section>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-[1440px] mx-auto mt-10 md:mt-20 px-4">
        <button className={btnClass(isType === "specimens")} aria-pressed={isType === "specimens"} onClick={() => SelectType("specimens")}>
          시험편 제작
        </button>
        <button className={btnClass(isType === "equipment")} aria-pressed={isType === "equipment"} onClick={() => SelectType("equipment")}>
          시험기기
        </button>
        <button className={btnClass(isType === "hoist")} aria-pressed={isType === "hoist"} onClick={() => SelectType("hoist")}>
          호이스트 / 컨베어
        </button>
        <button className={btnClass(isType === "reducer")} aria-pressed={isType === "reducer"} onClick={() => SelectType("reducer")}>
          감속기 / 지그 장비
        </button>
        <button className={btnClass(isType === "fabrication")} aria-pressed={isType === "fabrication"} onClick={() => SelectType("fabrication")}>
          판금 / 가공 / 용접
        </button>
      </div>

      {/* 시험편 제작 */}
      {isType === "specimens" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="시험편 제작"
            description="금속 인장시험편, 충격(샤르피) 시험편 KS3·4·5호, 압축·굽힘 시험편 등 각종 시험편을 KS 규격에 맞춰 정밀하게 제작합니다."
            imgSrc="/img/product_specimens.jpg"
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-black/50">Specimen Manufacturing</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>금속 인장시험편 — KS 규격에 따른 다양한 형상 제작</li>
              <li>충격(샤르피) 시험편 — KS3·4·5호 규격 제작</li>
              <li>압축·굽힘 시험편 — 각종 재질, 규격별 맞춤 제작</li>
              <li>기타 각종 시험편 — 고객 도면 및 요구 사양에 맞춰 제작</li>
            </ul>
          </div>
        </section>
      )}

      {/* 시험기기 */}
      {isType === "equipment" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="시험기기"
            description="고속인장시험기기 및 각종 자동화기기를 설계·제작·납품합니다. 삼성SDI, 삼성바이오로직스 등 주요 기관에 공급한 이력이 있습니다."
            imgSrc="/img/product_equipment.jpg"
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-black/50">Testing Equipment</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>고속인장시험기기 — 고속 인장 특성 측정용 시험 장비 제작</li>
              <li>자동화기기 — 공정 자동화를 위한 전용 장비 설계 및 제작</li>
              <li>고객 맞춤 시험장비 — 도면 및 사양 기반 특수 시험기기 제작</li>
            </ul>
          </div>
        </section>
      )}

      {/* 호이스트 / 컨베어 */}
      {isType === "hoist" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="호이스트 / 컨베어(크린롤)"
            description="5,000kg급 호이스트 및 컨베어 벨트(크린롤)를 제작·납품합니다. 다양한 하중 및 환경 조건에 맞는 맞춤 제작이 가능합니다."
            imgSrc="/img/product_hoist.jpg"
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-black/50">Hoist & Conveyor</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>호이스트 — 5,000kg급 이하 각종 하중 조건 맞춤 제작</li>
              <li>컨베어 벨트(크린롤) — 클린룸 및 일반 환경용 컨베어 제작</li>
              <li>설치 및 유지보수 — 납품 후 설치 지원 및 유지보수 서비스 제공</li>
            </ul>
          </div>
        </section>
      )}

      {/* 감속기 / 지그 장비 */}
      {isType === "reducer" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="감속기 / 지그 장비"
            description="로봇 및 자동화 라인용 각종 감속기 교체용 장비와 소형 각도조절 테이블을 제작합니다. 고객 설비에 맞는 맞춤 제작이 가능합니다."
            imgSrc="/img/product_reducer.jpg"
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-black/50">Reducer & Jig Equipment</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>각종 감속기 교체용 장비(크린롤) — 로봇·자동화 라인용 감속기 교체 전용 장비</li>
              <li>소형 각도조절 테이블 — 정밀 각도 세팅이 필요한 작업용 테이블 제작</li>
              <li>전용 지그 — 고객 공정에 맞는 시험지그 및 작업용 지그 설계·제작</li>
            </ul>
          </div>
        </section>
      )}

      {/* 판금 / 가공 / 용접 */}
      {isType === "fabrication" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="판금 / 가공 / 용접"
            description="판금 가공, 반자동 알곤 용접, 시험지그 제작 등 금속 가공 전반에 걸친 서비스를 제공합니다. 도면 기반 제작부터 조립까지 일괄 대응합니다."
            imgSrc="/img/product_welding.jpg"
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-black/50">Sheet Metal / Machining / Welding</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>판금 가공 — 각종 금속 판재 절단·절곡·성형 가공</li>
              <li>반자동 알곤(MIG/TIG) 용접 — 정밀 용접이 필요한 부품 및 구조물 용접</li>
              <li>시험지그 제작 — 검사·시험 공정용 전용 지그 설계 및 제작</li>
              <li>기타 가공 — 고객 도면 기반 범용 선반·밀링 가공</li>
            </ul>
          </div>
        </section>
      )}

      <section>
        <Contact />
      </section>
    </>
  );
}
