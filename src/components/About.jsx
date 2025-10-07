import Heading from "./Heading";
import about from "../assets/about.png";
import Button from "./Button";
import aboutRectangle1 from "../assets/aboutRectangle1.png";
import aboutRectangle2 from "../assets/aboutRectangle2.png";
import aboutRectangle3 from "../assets/aboutRectangle3.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ title, desc }) => {
  return (
    <div className={`z-10 bg-secondary text-white mx-auto flex justify-between items-center p-4 space-x-8 w-full`}>
      <div className="font-semibold text-base">{title}</div>
      <div className="uppercase text-right font-bold md:text-[24px] md:leading-[40px]">
        {desc}
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  
  const handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSeqnKNBEvJTFgb_fz3g-sHz64BiwqAMXpGvaccF4lvQ4mMalQ/viewform", "_blank");
  };

  return (
    <section className="relative" id="about">
      <img src={aboutRectangle1} alt="" className="absolute z-10 -top-44 left-0 hidden md:block" />
      <div className="py-24 border-y border-white space-y-12">
        <Heading text="Details of the Event" />
        <div className="flex flex-wrap lg:flex-nowrap items-center w-4/5 mx-auto justify-between gap-16">
          <div className="text-[#FAF3DD] font-normal text-base md:w-3/5">
            <ul className="list-disc space-y-2" data-aos="fade-up">
              <li>Teams must present their projects using PowerPoint/Canva.</li>
              <li>Functional prototypes or proof-of-concept demonstrations are encouraged.</li>
              <li>Presentations should cover the problem, solution, technical details, and market impact.</li>
              <li><span className="font-semibold">Time limit:</span> 5-10 minutes, followed by a Q&A session with judges.</li>
            </ul>
            <br />
            <h1><span className="font-bold">Judging Criteria:</span></h1>
            <ul className="list-disc space-y-2" data-aos="fade-up">
              <li>Creativity and Innovation</li>
              <li>Technical Feasibility</li>
              <li>Scalability and Market Potential</li>
              <li>Presentation and Clarity</li>
              <li>Problem-Solving Impact</li>
              <li>One winning team per domain will be announced, receiving recognition, mentorship, and incubation opportunities.</li>
              <li>Winning teams can further get a chance to incubate their projects into startups with ongoing support from mentors and industry experts.</li>
            </ul>
          </div>
          <img src={about} alt="about details" data-aos="zoom-in" className="w-full md:w-2/5" />
        </div>
        <div className="mx-auto w-4/5 flex flex-wrap lg:flex-nowrap mt-24 gap-8">
          <Card title="Entry Fee" desc="₹300(group of 4)" />
          <Card title="Extra Member" desc="₹50 for an extra member  (Max 6 participants)" />
          <Card title="Prize Pool" desc="₹15,000 and exciting goodies" />
          <Card title="Venue" desc="Diploma Hall" />
        </div>
         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSeqnKNBEvJTFgb_fz3g-sHz64BiwqAMXpGvaccF4lvQ4mMalQ/viewform"
  className="no-underline"
  target="_blank"
  rel="noopener noreferrer"
>
        <div className="flex justify-center" data-aos="zoom-in">
          <Button text="Register Now" onClick={handleClick} />
        </div>
        </a>
      </div>
      <img src={aboutRectangle2} alt="" className="absolute bottom-[12rem] z-0 left-0 hidden md:block" />
      <img src={aboutRectangle3} alt="" className="absolute bottom-36 right-0 z-0 hidden md:block" />
    </section>
  );
};

export default About;
