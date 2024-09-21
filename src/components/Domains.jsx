import React from "react";
import Heading from "./Heading";
import Card from "./Card";

const Domains = () => {
  return (
    <section className="py-24 border-y border-white" id="domains">
      <Heading text="Domains" />
      <div className="mx-auto w-2/3 flex mt-24 gap-20">
        <Card text="AI-ML" bgColor="bg-[#FF5055]" />
        <Card text="POWER SYSTEMS" bgColor="bg-[#FAF3DD]" />
        <Card text="ROBOTICS" bgColor="bg-[#C80774]" />
        <Card text="SMART SYSTEM" />
      </div>
    </section>
  );
};

export default Domains;
