import Accordion from "./Accordion";
import Heading from "./Heading";

const FAQs = () => {
  const faqs = [
    {
      title: "FAQ1",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo quam, mollis iaculis sapien et, lobortis dictum lectus. Suspendisse in orci dui. Nunc scelerisque, ex id efficitu",
    },
    {
      title: "FAQ2",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo quam, mollis iaculis sapien et, lobortis dictum lectus. Suspendisse in orci dui. Nunc scelerisque, ex id efficitu",
    },
    {
      title: "FAQ3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo quam, mollis iaculis sapien et, lobortis dictum lectus. Suspendisse in orci dui. Nunc scelerisque, ex id efficitu",
    },
    {
      title: "FAQ4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo quam, mollis iaculis sapien et, lobortis dictum lectus. Suspendisse in orci dui. Nunc scelerisque, ex id efficitu",
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
