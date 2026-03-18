"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

const PHONE = "02-463-9942";

function handlePhoneClick() {
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  if (isMobile) {
    window.location.href = `tel:${PHONE.replace(/-/g, "")}`;
  } else {
    navigator.clipboard.writeText(PHONE).then(() => {
      alert(`전화번호가 복사되었습니다.\n${PHONE}`);
    });
  }
}

export default function ContactSection() {
  const [open, setOpen] = useState<string | null>(null);

  const toggle = (type: string) => {
    setOpen(open === type ? null : type);
  };

  return (
    <div className="relative min-h-[500px] py-16 w-full bg-cover bg-center bg-no-repeat flex flex-col justify-center items-start" style={{ backgroundImage: 'url("/img/bg_contact.jpg")' }}>
      {/* 반투명 오버레이 */}
      <div className="absolute inset-0 bg-sky-950/80"></div>

      <div className="relative px-4 max-w-[1440px] w-full mx-auto text-white">
        <h3 className="text-sky-300 font-semibold text-lg">Contact Us</h3>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">1:1 상담 문의</h2>

        <div className="mt-6 space-y-3 text-gray-100 leading-relaxed">
          <p>1995년 창업 이래 30년 이상 축적된 기술력으로 고객의 요구에 맞는 최적의 제품을 제작합니다.</p>
          <p>금속 시험편, 지그 장비, 호이스트, 컨베어 등 제품에 관한 문의를 남겨주시면 성실히 답변드리겠습니다.</p>
        </div>

        {/* 연락 수단 */}
        <div className="mt-8 flex flex-col gap-4">
          {/* 아이콘 리스트 */}
          <div className="flex gap-6">
            <button onClick={() => toggle("email")} className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${open === "email" ? "bg-white/30" : ""}`} aria-label="이메일">
              <Mail className="w-6 h-6" />
            </button>

            <button onClick={() => toggle("phone")} className={`p-3 rounded-full bg-white/10 hover:bg-white/20 transition ${open === "phone" ? "bg-white/30" : ""}`} aria-label="전화번호">
              <Phone className="w-6 h-6" />
            </button>
          </div>

          {/* 정보 노출 영역 */}
          <div className="mt-4 min-h-[40px]">
            {open === "email" && (
              <a href="mailto:dedong4462@naver.com" className="text-lg font-semibold underline text-sky-500 hover:text-sky-300 animate-fade-slide">
                dedong4462@naver.com
              </a>
            )}
            {open === "phone" && (
              <a href="tel:024639942" className="text-lg font-semibold text-sky-500 hover:text-sky-300 animate-fade-slide">
                02-463-9942
              </a>
            )}
          </div>
        </div>

        {/* 문의 버튼 */}
        <button onClick={handlePhoneClick} className="inline-block rounded-md py-3 px-16 mt-10 bg-white text-zinc-700 hover:bg-sky-300 hover:text-zinc-600 text-center font-bold shadow-sm">
          문의하기
        </button>
      </div>
    </div>
  );
}
