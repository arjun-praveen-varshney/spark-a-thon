import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import domains1 from "../assets/domains1.png";
import domains2 from "../assets/domains2.png";

const Domains = () => {
  return (
    <section className="py-24 border-y border-white relative" id="domains">
      <Heading text="Domains" />
      <img
        src={domains1}
        alt=""
        className="absolute left-0 top-20 hidden md:block"
      />
      <img
        src={domains2}
        alt=""
        className="absolute right-0 bottom-0 hidden md:block"
      />
      <div className="mx-auto md:w-2/3 flex flex-wrap lg:flex-nowrap justify-center items-center mt-24 gap-20">
        <Card text="AI-ML" bgColor="bg-[#FF5055]" />
        <Card text="POWER SYSTEMS" bgColor="bg-[#FAF3DD]" />
        <Card text="ROBOTICS" bgColor="bg-[#C80774]" />
        <Card text="SMART SYSTEM" />
      </div>
    </section>
  );
};

export default Domains;
