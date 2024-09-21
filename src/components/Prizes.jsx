import React from "react";
import Card from "./Card";
import Heading from "./Heading";

const Prizes = () => {
  return (
    <div className="py-24 border-y border-white">
      <Heading text="Prizes" />
      <div className="mx-auto w-3/5 flex mt-24 gap-24">
        <Card text="INR 2K+" />
        <Card text="INR 5K+" />
        <Card text="INR 10K+" />
      </div>
    </div>
  );
};

export default Prizes;
