import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="py-10 bg-slate-800 text-white/60 text-center mx-auto">
      <Link href={"/"} className="flex justify-center font-bold pb-6 opacity-40">
        <Image src={"/logo_white.png"} alt="대동정밀" width={140} height={40} className="hidden md:block" />
        <Image src={"/logo_white.png"} alt="대동정밀" width={80} height={40} className="md:hidden block" />
      </Link>

      <p className="text-sm">주소: 서울시 성동구 광나루로 229 1층 (송정동 81-18)</p>
      <p className="text-sm">전화: 02-463-9942 &nbsp;|&nbsp; 휴대폰: 010-5245-4462</p>
      <p className="text-sm">팩스: 02-466-3018</p>
      <p className="text-sm">이메일: dedong4462@naver.com</p>
      <p className="mt-4 text-sm">© 2025 대동정밀. All rights reserved.</p>
      <p className="text-sm">DESIGN & Development BY GLOBAL MIG</p>
    </div>
  );
}
