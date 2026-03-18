import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Slider from "@/components/Slider";
import Work from "@/components/Work";
import ProductList from "@/components/ProductList";
import React from "react";
import Image from "next/image";

export default function main() {
  return (
    <div>
      <section>
        <Slider />
      </section>
      <section className="py-14 md:py-20">
        <Work />
      </section>
      <section className="py-14 md:py-20 border-t bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="border-l-8 border-sky-700 pl-8 mb-10 md:mb-16">
            <h2 className="opacity-70">주요 거래처</h2>
            <p className="text-black/50 mt-2">Major Clients</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "삼성SDI", src: "/img/logo_samsung_sdi.png" },
              { name: "삼성바이오로직스", src: "/img/logo_samsung_biologics.png" },
              { name: "세종대학교", src: "/img/logo_sejong.png" },
              { name: "건국대학교", src: "/img/logo_konkuk.png" },
            ].map((client) => (
              <div key={client.name} className="flex items-center justify-center border bg-white border-gray-200 rounded-xl px-8 py-10">
                <div className="relative w-full h-16">
                  <Image src={client.src} alt={client.name} fill className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20 border-t ">
        <ProductList />
      </section>

      <section className="max-w-[1440px] mx-auto py-14 md:py-20 mb-4 border-t">
        <h2 className="px-4">오시는 길</h2>
        <GoogleMap />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
