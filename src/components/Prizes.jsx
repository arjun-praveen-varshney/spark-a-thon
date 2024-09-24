import React from "react";
import Heading from "./Heading";
import prizesLeft from "../assets/prizesLeft.png";
import prizesRight from "../assets/prizesRight.png";

const Card = ({ text }) => {
  return (
    <div
      className={`rounded-[10px] bg-secondary text-center px-3 text-white w-1/3 h-60 flex items-center justify-center font-[900] text-[32px] leading-[48px] tracking-[10%]`}
    >
      {text}
    </div>
  );
};

const Prizes = () => {
  return (
    <section className="py-24 border-y border-white relative" id="prizes">
      <Heading text="Prizes" />
      <img
        src={prizesLeft}
        alt=""
        className="absolute -bottom-20 left-0 hidden md:block"
      />
      <img
        src={prizesRight}
        alt=""
        className="absolute -bottom-24 right-0 hidden md:block"
      />
      <div className="mx-auto md:w-3/5 flex flex-wrap lg:flex-nowrap justify-center items-center mt-24 gap-24">
        <Card text="INR 2K+" />
        <Card text="INR 5K+" />
        <Card text="INR 10K+" />
      </div>
    </section>
  );
};

export default Prizes;
