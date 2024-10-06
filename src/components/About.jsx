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
  // useEffect(() => {
  //   Aos.init({ duration: 2000 });
  // }, []);
  return (
    <div
      className={`z-10 bg-secondary text-white mx-auto flex justify-between items-center p-4 space-x-8`}
    >
      <div className="font-semibold text-base">{title}</div>
      <div className="uppercase text-right font-bold md:text-[24px] md:leading-[40px]">
        {desc}
      </div>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const handleClick = () => {
    window.open("https://forms.gle/TosVB1eupJW9rCoU6", "_blank");
  };

  return (
    <section className="relative" id="about">
      <img
        src={aboutRectangle1}
        alt=""
        className="absolute z-10 -top-44 left-0 hidden md:block"
      />
      <div
        className="py-24 border-y border-white space-y-24"
        // data-aos="zoom-in"
      >
        <Heading text="Details of the Event" />
        <div className="flex flex-wrap lg:flex-nowrap items-center w-4/5 mx-auto justify-between">
          <div className="text-[#FAF3DD] font-normal text-base md:w-2/5">
            <ul className="list-disc" data-aos="fade-up">
              <li>Teams must present their projects using PowerPoint/Canva.</li>
              <li>
                Functional prototypes or proof-of-concept demonstrations are
                encouraged.
              </li>
              <li>
                Presentations should cover the problem, solution, technical
                details, and market impact.
              </li>
              <li>
                <span className="font-semibold">Time limit:</span> 5-10 minutes,
                followed by a Q&A session with judges.
              </li>
            </ul>
            <br />
            <span className="font-bold">Judging Criteria:</span>
            <ul className="list-disc" data-aos="fade-up">
              <li>Creativity and Innovation</li>
              <li>Technical Feasibility</li>
              <li>Scalability and Market Potential</li>
              <li>Presentation and Clarity</li>
              <li>Problem-Solving Impact</li>
              <li>
                One winning team per domain will be announced, receiving
                recognition, mentorship, and incubation opportunities.
              </li>
              <li>
                Winning teams can further get a chance to incubate their
                projects into startups with ongoing support from mentors and
                industry experts.
              </li>
            </ul>
          </div>
          <img src={about} alt="about.png" data-aos="zoom-in" />
        </div>
        <div
          className="mx-auto w-4/5 flex flex-wrap lg:flex-nowrap mt-24 gap-16"
          // data-aos="fade-up"
        >
          <Card title="Entry Fee" desc="₹300" />
          <Card title="Prize Pool" desc="₹10,000 and exciting goodies" />
          <Card title="Venue" desc="Diploma Hall" />
        </div>
        <div className="flex justify-center" data-aos="zoom-in">
          <Button text="Register Now" onClick={handleClick} />
        </div>
      </div>
      <img
        src={aboutRectangle2}
        alt=""
        className="absolute bottom-[12rem] z-0 left-0 hidden md:block"
      />
      <img
        src={aboutRectangle3}
        alt=""
        className="absolute bottom-36 right-0 z-0 hidden md:block"
      />
    </section>
  );
};

export default About;
