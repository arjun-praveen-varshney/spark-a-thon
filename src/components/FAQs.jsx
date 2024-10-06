import { ChevronDownIcon } from "lucide-react";
import Heading from "./Heading";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const FAQItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-white">{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-white transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-300">
          {content.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    {
      title: "What is E-Cell at FCRIT?",
      answer:
        "E-Cell FCRIT is a non-profit student organization promoting entrepreneurship among students.",
    },
    {
      title: "What is FCRIT-IIC?",
      answer: `FCRIT-IIC (Institution's Innovation Council) aims to create a vibrant ecosystem for innovation by:
• Encouraging Creativity: It inspires students and faculty to engage in innovative thinking and problem-solving.
• Supporting Start-ups: The council provides mechanisms to support start-ups and entrepreneurial ventures initiated by students and faculty.
• Establishing Networks: IICs form a network among various Higher Education Institutions (HEIs) to share resources, knowledge, and best practices related to innovation.

Key Functions of IIC include:
• Conducting Activities: Organizing workshops, seminars, and hackathons to promote innovation-related activities among students and faculty.
• Mentorship: Creating a mentorship pool by connecting students with entrepreneurs, professionals, and investors.
• Recognition of Innovations: Identifying and rewarding innovative projects and sharing success stories to motivate others.
• Collaboration with Industries: Facilitating partnerships between educational institutions and industries to enhance practical learning experiences.`,
    },
    {
      title: "What can students benefit from Spark-A-Thon?",
      answer:
        "Students can gain mentorship from industry experts, exposure to real-world challenges, and networking opportunities with professionals and judges. Winning teams will get a chance to turn their projects into startups, backed by mentors and industry experts like CIBA!",
    },
    {
      title: "Is there an opportunity for incubation?",
      answer:
        "Yes, selected projects will have the chance for incubation through CIBA (Centre for Incubation and Business Acceleration), helping turn ideas into startups.",
    },
    {
      title: "Will participants interact with the judges?",
      answer:
        "Yes, there will be opportunities for teams to interact with judges for mentorship, feedback, and networking during the exhibition.",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="py-24" id="faqs" data-aos="fade-up">
      <Heading text="FAQs" />
      {faqs.map((faq, index) => (
        <div
          data-aos="zoom-in"
          key={index}
          className={`w-3/5 ${
            index === 0 && "mt-20"
          } mx-auto my-4 bg-[#001f2d]`}
        >
          <FAQItem key={index} title={faq.title} content={faq.answer} />
        </div>
      ))}
    </div>
  );
};

export default FAQs;
