import React from "react";
import Heading from "./Heading";

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
    <section className="py-24 border-y border-white" id="prizes">
      <Heading text="Prizes" />
      <div className="mx-auto w-3/5 flex mt-24 gap-24">
        <Card text="INR 2K+" />
        <Card text="INR 5K+" />
        <Card text="INR 10K+" />
      </div>
    </section>
  );
};

export default Prizes;
