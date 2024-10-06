import Heading from "./Heading";
import Card from "./Card";
import domains1 from "../assets/domains1.png";
import domains2 from "../assets/domains2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Domains = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      className="py-24 border-y border-white relative"
      id="domains"
      data-aos="zoom-in"
    >
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
      <div
        className="mx-auto w-[90%] grid grid-cols-1 md:grid-cols-3 mt-24 gap-20"
        data-aos="zoom-in"
      >
        <Card
          text="AI/ML / CYBERSECURITY"
          desc={[
            "AI/ML offers endless opportunities for startups to create innovative products.",
            "From AI chatbots and smart shopping suggestions to medical tools and predictive systems, the possibilities are huge.",
            "Projects can focus on areas like healthcare, autonomous drones, or AI ethics.",
            "Participants are encouraged to build solutions that are both technically innovative and have strong business potential.",
          ]}
          bgColor="bg-[#FF5055]"
        />
        <Card
          text="POWER SYSTEMS / RENEWABLE ENERGY SYSTEMS / SMART GRID"
          desc={[
            "The Power Systems domain focuses on creating sustainable energy solutions for power generation, distribution, and storage.",
            "Projects aim to solve real-world challenges, like designing smart grids or renewable energy systems (e.g., solar or wind) for remote areas.",
            "The goal is to develop scalable ideas that can become marketable products or businesses.",
          ]}
          bgColor="bg-[#FAF3DD]"
        />
        <Card
          text="ROBOTICS / DRONE & FIXED WING"
          desc={[
            "Robotics allows students to develop innovative automation solutions like drones, robotic arms, and smart home devices.",
            "Projects can include AI features for tasks like object detection, path planning, or healthcare assistance. Participants are encouraged to create scalable, product-ready solutions that showcase technical skills and entrepreneurial potential.",
          ]}
          bgColor="bg-[#C80774]"
        />
      </div>
      <div
        className="mx-auto w-[90%] md:w-3/5 grid grid-cols-1 md:grid-cols-2 mt-20 gap-20"
        data-aos="zoom-in"
      >
        <Card
          text="SMART SYSTEMS / EMBEDDED SYSTEMS / IOT"
          desc={[
            "The Smart Systems domain focuses on creating devices where hardware and software collaborate in real-time for optimal performance and efficiency.",
            "Examples include smart home devices, health monitors, and automated irrigation systems.",
            "Participants are encouraged to design innovative, scalable solutions that highlight their technical expertise and entrepreneurial spirit.",
          ]}
        />
        <Card
          text="OPEN INNOVATIONS"
          desc={[
            "This domain is open to any innovative project that doesn't fit into the other categories. Participants can explore new ideas, technologies, or applications that have the potential to make a significant impact.",
          ]}
          bgColor="bg-green-500"
        />
      </div>
    </section>
  );
};

export default Domains;
