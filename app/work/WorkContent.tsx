"use client";
import Contact from "@/components/Contact";
import Figure01 from "@/components/Figure01";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";

type WorkType = "specimens" | "equipment" | "hoist" | "reducer" | "fabrication";

const allowed: WorkType[] = ["specimens", "equipment", "hoist", "reducer", "fabrication"];

export default function WorkContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const typeParam = searchParams.get("type") as WorkType | null;
  const isType: WorkType = typeParam && allowed.includes(typeParam) ? typeParam : "specimens";

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  const SelectType = useCallback(
    (value: WorkType) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("type", value);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [router, pathname, searchParams],
  );

  const btnBase = "border-[1.2px] border-gray-300 shadow-md rounded-xl py-6 transition break-keep";
  const btnClass = (active: boolean) =>
    active
      ? `${btnBase} bg-black text-white`
      : `${btnBase} bg-white hover:bg-blue-50 hover:text-black`;

  const options: { value: WorkType; label: string }[] = [
    { value: "specimens", label: "시험편 제작" },
    { value: "equipment", label: "시험기기" },
    { value: "hoist", label: "호이스트 / 컨베어 / 화물 리프트" },
    { value: "reducer", label: "지그 장비" },
    { value: "fabrication", label: "판금 / 가공 / 용접" },
  ];

  const currentLabel = options.find((o) => o.value === isType)?.label ?? "";

  return (
    <>
      {/* 모바일: 커스텀 드롭다운 */}
      <div ref={dropdownRef} className="relative md:hidden max-w-[1440px] mx-auto mt-10 px-4 z-30">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          className="w-full flex items-center justify-between gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-5 shadow-sm text-base font-medium text-gray-800 active:bg-gray-50 transition-colors"
          aria-expanded={dropdownOpen}
          aria-haspopup="listbox"
        >
          <span className="break-keep text-left">{currentLabel}</span>
          <ChevronDown
            className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        <div
          className={`absolute left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden transition-all duration-200 ease-out origin-top ${
            dropdownOpen
              ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-y-95 -translate-y-1 pointer-events-none"
          }`}
          role="listbox"
          aria-label="제품 분류"
        >
          {options.map((opt, index) => (
            <button
              key={opt.value}
              role="option"
              aria-selected={isType === opt.value}
              onClick={() => {
                SelectType(opt.value);
                setDropdownOpen(false);
              }}
              className={`w-full flex items-center justify-between px-5 py-5 text-left break-keep transition-colors
                ${index < options.length - 1 ? "border-b border-gray-100" : ""}
                ${isType === opt.value ? "bg-gray-50 font-semibold text-black" : "text-gray-600 active:bg-gray-50"}`}
            >
              <span className="text-base">{opt.label}</span>
              {isType === opt.value && <Check className="w-4 h-4 flex-shrink-0 text-sky-600" />}
            </button>
          ))}
        </div>
      </div>

      {/* md+: 버튼 탭 */}
      <div className="hidden md:grid md:grid-cols-5 gap-4 max-w-[1440px] mx-auto mt-20 px-4">
        {options.map((opt) => (
          <button
            key={opt.value}
            className={btnClass(isType === opt.value)}
            aria-pressed={isType === opt.value}
            onClick={() => SelectType(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* 시험편 제작 */}
      {isType === "specimens" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01 direction="left" title="시험편 제작" description="각종 금속 인장,충격 경도 굽힘 시험편 제작 전문 업체 입니다." imgSrc="/img/product_specimens.jpg" />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-gray-600">Specimen Manufacturing</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>금속 인장시험편 — KS 규격에 따른 다양한 형상 제작</li>
              <li>충격 시험편 — KS3, KS4, KS5호 규격으로 제작</li>
              <li>압축·굽힘 시험편 — 각종 재질, 규격별 맞춤 제작</li>
              <li>기타 각종 시험편 — 고객 도면 및 요구 사양에 맞춰 제작</li>
            </ul>
          </div>
        </section>
      )}

      {/* 시험기기 */}
      {isType === "equipment" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01 direction="left" title="시험기기" description="고속인장충격시험기기 현재 세종대 건축토목과에서 사용중 입니다." imgSrc="/img/product_equipment.jpg" />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-gray-600">Testing Equipment</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>고속인장충격시험기기 — 압력 200t</li>
            </ul>
          </div>
        </section>
      )}

      {/* 호이스트 / 컨베어 / 화물 리프트 */}
      {isType === "hoist" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01
            direction="left"
            title="호이스트 / 컨베어 / 화물 리프트"
            description="5,000kg급 호이스트 및 컨베어 벨트를 제작·납품합니다. 다양한 하중 및 환경 조건에 맞는 맞춤 제작이 가능합니다."
            imgSrc="/img/product_hoist.jpg"
          />

          <div className="px-4">
            <div className="border-l-8 border-sky-700 my-0 md:my-20 pl-8">
              <h2>제작 품목</h2>
              <p className="text-gray-600">Hoist & Conveyor</p>
            </div>

            <ul className="border-2 p-10 md:px-24 my-10 rounded-xl list-disc leading-loose gap-6 flex flex-col break-keep">
              <li>호이스트 — 현장 필요 사용에 따라 설정 및 설치</li>
              <li>컨베어 벨트 — 현장 위치에 따라 제작 설치</li>
              <li>설치 및 유지보수 — 제작 설치</li>
            </ul>
          </div>
        </section>
      )}

      {/* 지그 장비 */}
      {isType === "reducer" && (
        <section className="pt-10 mb-32 max-w-[1440px] mx-auto flex flex-col gap-20">
          <Figure01 direction="left" title="크린룸내 로봇트 감속기 교체 전용 장비" description="크린룸내 로봇트 감속기 교체 전용 장비 입니다." imgSrc="/img/product_reducer.jpg" />
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
              <p className="text-gray-600">Sheet Metal / Machining / Welding</p>
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
