import Heading from "./Heading";
import prizesLeft from "../assets/prizesLeft.png";
import prizesRight from "../assets/prizesRight.png";

const Card = ({ text, color = "", borderColor = "" }) => {
  return (
    <div
      className={`rounded-[10px] bg-transparent ${borderColor} border-4 text-center px-3 text-white w-[90%] md:w-1/3 h-96 flex flex-col items-center justify-center gap-8 font-bold md:text-[24px] md:leading-[40px]`}
    >
      <span>{text}</span>
      <span className={color}>INR 2K and Exciting Goodies</span>
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
      <div className="mx-auto md:w-3/5 flex flex-wrap justify-center items-center mt-24 gap-24">
        <Card
          text="AI/ML / CYBERSECURITY"
          color="text-tertiary"
          borderColor="border-tertiary"
        />
        <Card
          text="POWER SYSTEMS / RENEWABLE ENERGY SYSTEMS / SMART GRID"
          color="text-[#faf3dd]"
          borderColor="border-[#faf3dd]"
        />
        <Card
          text="ROBOTICS / DRONE & FIXED WING"
          color="text-[#C80774]"
          borderColor="border-[#C80774]"
        />
        <Card
          text="SMART SYSTEMS / EMBEDDED SYSTEMS / IOT"
          color="text-yellow-400"
          borderColor="border-yellow-400"
        />
        <Card
          text="OPEN INNOVATIONS"
          color="text-green-500"
          borderColor="border-green-500"
        />
      </div>
    </section>
  );
};

export default Prizes;
