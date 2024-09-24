import Button from "./Button";
import hero from "../assets/hero.png";
import header1 from "../assets/header1.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col py-16 gap-16 items-center text-white relative"
      id="home"
    >
      <img
        className="absolute right-0 top-0 hidden md:block"
        src={header1}
        alt=""
      />
      <div>
        <h1
          className="font-extrabold italic text-[36px] md:text-[72px] md:leading-[108px] tracking-[3%]"
          style={{ textShadow: "0px 4px 4px black" }}
        >
          <span className="text-[#f6a5d3]">SPARK-</span>
          <span className="text-black">A-THON</span>
        </h1>
        <h2
          className="text-tertiary md:text-[48px] text-[24px] md:leading-[72px] font-bold text-center tracking-[10%]"
          style={{ textShadow: "0px 4px 4px black" }}
        >
          2024-2025
        </h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between mx-auto w-3/4">
        <img src={hero} alt="" />
        <div>
          <p className="max-w-xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo
            quam, mollis iaculis sapien et, lobortis dictum lectus. Suspendisse
            in orci dui. Nunc scelerisque, ex id efficitur imperdiet, felis
            velit elementum eros, in elementum leo odio non lectus. Suspendisse
            dictum felis sit amet mi consequat, nec convallis ipsum sagittis.
            Duis vel magna a risus dictum molestie. <br />
            2023-2024
            <br />
            Spark-a-thon
          </p>
          <div className="text-center md:text-left">
            <Button text="Register Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
