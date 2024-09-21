import React from "react";
import Heading from "./Heading";
import about from "../assets/about.png";
import Button from "./Button";
import aboutRectangle1 from "../assets/aboutRectangle1.png";
import aboutRectangle2 from "../assets/aboutRectangle2.png";
import aboutRectangle3 from "../assets/aboutRectangle3.png";

const Card = ({ title, desc }) => {
  return (
    <div className={`z-10 bg-secondary p-4 text-white w-1/3 flex items-center`}>
      <div className="font-bold text-[32px] leading-[48px]">{title}</div>
      <div className="w-full uppercase text-center font-bold text-[16px] leading-[24px]">
        {desc}
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="relative" id="about">
      <img src={aboutRectangle1} alt="" className="absolute -top-44 left-0" />
      <div className="py-24 border-y border-white space-y-24">
        <Heading text="About Us" />
        <div className="flex items-center w-4/5 mx-auto justify-between">
          <div className="text-[#FAF3DD] font-normal text-base w-2/5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo
            quam, mollis iaculis sapien et, lobortis dictum lectus. Suspendisse
            in orci dui. Nunc scelerisque, ex id efficitur imperdiet, felis
            velit elementum eros, in elementum leo odio non lectus. Suspendisse
            dictum felis sit amet mi consequat, nec convallis ipsum sagittis.
            Duis vel magna a risus dictum molestie.
            <br />
            2023-2024
            <br />
            Spark-a-thon
          </div>
          <img src={about} alt="about.png" />
        </div>
        <div className="mx-auto w-4/5 flex mt-24 gap-24">
          <Card title="200+" desc="participants" />
          <Card title="30+" desc="teams" />
          <Card title="5+" desc="colleges" />
        </div>
        <div className="flex justify-center">
          <Button text="Register Now" />
        </div>
      </div>
      <img
        src={aboutRectangle2}
        alt=""
        className="absolute bottom-[12rem] left-0"
      />
      <img
        src={aboutRectangle3}
        alt=""
        className="absolute bottom-36 right-0"
      />
    </section>
  );
};

export default About;
