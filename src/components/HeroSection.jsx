import Button from "./Button";
import hero from "../assets/hero.png";
import header1 from "../assets/header1.png";

const Hero = () => {
  const handleClick = () => {
    window.open("http://surl.li/hsyhna", "_blank");
  };
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
            Spark-A-Thon is a competition where teams develop innovative
            projects in distinguished domains to solve real-world problems.
            Projects are judged on creativity, technical feasibility,
            scalability, and market potential. Winners receive recognition and
            support to transform their ideas into viable products. Beyond the
            competition, winners have the opportunity to: Incubate their ideas
            into startups, with resources and mentorship to launch into the
            market. With continuous mentorship from industry experts,
            Spark-A-Thon helps refine and elevate concepts, making it the
            ultimate launchpad for entrepreneurial ventures. <br />
            <br />
            <span className="text-lg">Time: 11:00am - 4:00pm</span>
            <br />
            <span className="text-lg">Date: 10th October, 2024</span>
          </p>
          <br />
          <div className="text-center md:text-left">
            <Button text="Register Now" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
