import Contact from "@/components/Contact";
import GoogleMap from "@/components/GoogleMap";
import Work from "@/components/Work";
import ProductList from "@/components/ProductList";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "@/components/Slider";

export default function Home() {
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
          <div className="border-l-8 border-sky-700 pl-4 mb-10 md:mb-16">
            <h2 className="opacity-70">주요 거래처</h2>
            <p className="text-gray-600 mt-2">Major Clients</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "삼성SDI", src: "/img/logo_samsung_sdi.png" },
              { name: "삼성바이오로직스", src: "/img/logo_samsung_biologics.png" },
              { name: "서울대학교", src: "/img/logo_snu.png" },
              { name: "한국과학기술원", src: "/img/logo_kaist.png" },
              { name: "한양대학교", src: "/img/logo_hanyang.png" },
              { name: "중앙대학교", src: "/img/logo_chungang.png" },
              { name: "홍익대학교", src: "/img/logo_hongik.png" },
              { name: "세종대학교", src: "/img/logo_sejong.png" },
              { name: "건국대학교", src: "/img/logo_konkuk.png" },
              // { name: "단국대학교", src: "/img/logo_dankook.png" },
              { name: "순천향대학교", src: "/img/logo_soonchunhyang.png" },
              { name: "호서대학교", src: "/img/logo_hoseo.png" },
              { name: "한국공과대학교", src: "/img/logo_koreatech.png" },
            ].map((client) => (
              <Link key={client.name} href="/clients" className="flex items-center justify-center border bg-white border-gray-200 rounded-xl px-6 py-8 hover:border-sky-400 transition">
                <div className="relative w-full h-24">
                  <Image src={client.src} alt={client.name} fill sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 18vw" className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-14 md:py-20 border-t ">
        <ProductList />
      </section>

      <section className="max-w-[1440px] mx-auto px-4 py-14 md:py-20 mb-4 border-t">
        <div className="border-l-8 border-sky-700 pl-8 mb-16">
          <h2 className="">오시는 길</h2>
        </div>
        <GoogleMap />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
