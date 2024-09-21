import React from "react";
import Heading from "./Heading";
import timeline from "../assets/timeline.png";

const Timeline = () => {
  return (
    <section className="py-24" id="timeline">
      <Heading text="Timeline" />
      <img src={timeline} alt="" className="mt-24 mx-auto" />
    </section>
  );
};

export default Timeline;
