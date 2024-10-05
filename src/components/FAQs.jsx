import Accordion from "./Accordion";
import Heading from "./Heading";

const FAQs = () => {
  const faqs = [
    {
      title: "What is E-Cell at FCRIT?",
      answer:
        "E-Cell FCRIT is a non-profit student organization promoting entrepreneurship among students.",
    },
    {
      title: "What is FCRIT-IIC?",
      answer:
        "FCRIT-IIC, fosters local innovation and startup ecosystem, offering pre-incubation and incubation support through seminars, workshops, and boot-camps.",
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
  return (
    <div className="py-24" id="faqs">
      <Heading text="FAQs" />
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`w-3/5 ${
            index === 0 && "mt-20"
          } mx-auto my-4 bg-[#001f2d]`}
        >
          <Accordion title={faq.title} answer={faq.answer} />
        </div>
      ))}
    </div>
  );
};

export default FAQs;
