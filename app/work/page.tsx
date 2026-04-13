import Hero from "@/components/Hero";
import React, { Suspense } from "react";
import WorkContent from "./WorkContent";

export default function WorkPage() {
  return (
    <>
      <section>
        <Hero title={"제품소개"} subtitle={"대동정밀의 제품 및 서비스를 소개합니다."} img={"/img/콘베어밸트.jpg"} priority />
      </section>
      <Suspense>
        <WorkContent />
      </Suspense>
    </>
  );
}
