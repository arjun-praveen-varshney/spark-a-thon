import { ChevronDownIcon } from "lucide-react";
import Heading from "./Heading";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white">{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-white transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-300">
          {content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-2">{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    { title: "What is E-Cell at FCRIT?", answer: "E-Cell FCRIT is a non-profit student organization promoting entrepreneurship among students." },
    { title: "What is FCRIT-IIC?", answer: `FCRIT-IIC (Institution's Innovation Council) aims to create a vibrant ecosystem for innovation by:\n• Encouraging Creativity: It inspires students and faculty to engage in innovative thinking and problem-solving.\n• Supporting Start-ups: The council provides mechanisms to support start-ups and entrepreneurial ventures initiated by students and faculty.\n• Establishing Networks: IICs form a network among various Higher Education Institutions (HEIs) to share resources, knowledge, and best practices related to innovation.` },
    { title: "What can students benefit from Spark-A-Thon?", answer: "Students can gain mentorship from industry experts, exposure to real-world challenges, and networking opportunities with professionals and judges. Winning teams will get a chance to turn their projects into startups, backed by mentors and industry experts like CIBA!" },
    { title: "Is there an opportunity for incubation?", answer: "Yes, selected projects will have the chance for incubation through CIBA (Centre for Incubation and Business Acceleration), helping turn ideas into startups." },
    { title: "Will participants interact with the judges?", answer: "Yes, there will be opportunities for teams to interact with judges for mentorship, feedback, and networking during the exhibition." },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="py-24" id="faqs" data-aos="fade-up">
      <Heading text="FAQs" />
      <div className="w-[90%] md:w-3/5 mx-auto mt-20 space-y-4">
        {faqs.map((faq, index) => (
          <div data-aos="zoom-in" key={index} className="bg-[#001f2d] rounded-lg overflow-hidden">
            <FAQItem title={faq.title} content={faq.answer} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;