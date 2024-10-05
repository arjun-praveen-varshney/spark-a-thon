import Heading from "./Heading";
import { useEffect, useRef, useState } from "react";
import orange from "../assets/orange.svg";
import white from "../assets/white.svg";
import timeline1 from "../assets/timeline1.png";
import timeline2 from "../assets/timeline2.png";

const steps = [
  {
    title: "Registration desk",
    description: ["Time: 11:00 AM - 11:45 AM"],
  },
  {
    title: "Inauguration",
    description: ["Time: 12:00 Noon"],
  },
  {
    title: "Evaluation & Exhibition",
    description: ["Time: 12:30 PM - 4:00 PM"],
  },
  {
    title: "Lunch",
    description: ["Time: 1:30 PM - 2:00 PM"],
  },
  {
    title: "Valedictory",
    description: ["Time: 4:30 PM - 5:00 PM"],
  },
];

const Timeline = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const { top, height } = divRef.current.getBoundingClientRect();
        const containerTop = top + window.scrollY - 200;
        const containerHeight = height;
        const scrolled = Math.min(
          100,
          Math.max(
            0,
            ((window.scrollY - containerTop + 200) / containerHeight) * 100
          )
        );

        setScrollPercentage(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-24 text-white relative" id="timeline">
      <Heading text="Timeline" />
      <img
        src={timeline1}
        alt=""
        className="absolute top-40 left-0 hidden md:block"
      />
      <img
        src={timeline2}
        alt=""
        className="absolute bottom-40 right-0 hidden md:block"
      />
      <div
        ref={divRef}
        style={{
          textAlign: "center",
          py: 10,
          position: "relative",
          zIndex: 1,
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            mx: "auto",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              className="bg-tertiary"
              style={{
                width: "4px",
                position: "relative",
              }}
            >
              <div
                className="bg-tertiary"
                style={{
                  transition: "height 0.2s ease-in-out",
                  height: `${scrollPercentage}%`,
                }}
              />
            </div>
          </div>
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: index % 2 === 0 ? "row-reverse" : "row",
                alignItems: "center",
                mb: 40,
                position: "relative",
                width: "100%",
              }}
            >
              <div
                className="bg-tertiary"
                style={{
                  width: "16px",
                  height: "16px",
                  border: "4px solid",
                  borderColor:
                    scrollPercentage - 10 >= (index / steps.length) * 100
                      ? "var(--tertiary-color)"
                      : "white",
                  borderRadius: "50%",
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  width: "100%",
                  textAlign: index % 2 === 0 ? "left" : "right",
                  display: "flex",
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  px: { xs: 4, lg: 0 },
                }}
              >
                <div
                  style={{
                    position: "relative",
                    marginBottom: index % 2 !== 0 ? "20px" : "40px",
                    marginTop: index % 2 === 0 ? "20px" : "40px",
                    transform:
                      index % 2 !== 0 ? "rotate(180deg)" : "rotate(0deg)",
                    width: "15%",
                  }}
                >
                  {scrollPercentage - 10 >= (index / steps.length) * 100 ? (
                    <img
                      src={orange}
                      alt={`Step ${index + 1}`}
                      style={{ width: "100%" }}
                    />
                  ) : (
                    <img
                      src={white}
                      alt={`Step ${index + 1}`}
                      style={{ width: "100%" }}
                    />
                  )}
                </div>
                <div style={{ width: "35%" }}>
                  <div className="font-bold">{step.title}</div>
                  {step.description.map((desc, i) => (
                    <div key={i}>{desc}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
