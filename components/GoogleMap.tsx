import React from "react";

export default function GoogleMap() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto mt-10 px-4">
      <iframe
        src="https://maps.google.com/maps?q=서울시+성동구+광나루로+229&output=embed"
        width="1000"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        className="w-full rounded-lg shadow-lg"
      ></iframe>

      {/* 정보 박스 */}
      <div className="absolute top-2 left-6 bg-white p-4 rounded-md shadow-lg w-full max-w-[300px]">
        <h3 className="font-bold text-lg mb-1">대동정밀</h3>
        <p className="text-sm mb-1">
          서울시 성동구 광나루로 229 1층
          <br />
          (송정동 81-18)
        </p>
        <p className="text-sm font-semibold">☎ 02-463-9942</p>
      </div>
    </div>
  );
}
