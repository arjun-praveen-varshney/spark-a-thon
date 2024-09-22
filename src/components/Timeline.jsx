import Heading from "./Heading";
import { useEffect, useRef, useState } from "react";
import orange from "../assets/orange.svg";
import white from "../assets/white.svg";

const steps = [
  {
    title: "Tailored Just for You",
    description: [
      "Our AI analyzes your profile and the job you're targeting, creating a personalized interview experience that fits your specific goals and strengths.",
    ],
  },
  {
    title: "Choose Your Perfect Scenario",
    description: [
      "Pick from a wide range of realistic interview scenarios that match your industry and job role, so you can practice exactly what you need.",
    ],
  },
  {
    title: "Adaptive Virtual Interviews",
    description: [
      "Step into immersive interviews where AI-driven characters adapt to your responses in real-time, mimicking the pressure and dynamics of a real interview.",
    ],
  },
  {
    title: "Get Instant, Personalized Feedback",
    description: [
      "Right after your session, receive detailed feedback on your communication, body language, and more, so you know exactly where to improve.",
    ],
  },
  {
    title: "Track Your Progress with a Readiness Score",
    description: [
      "See how you're improving with our Interview Readiness Score, which combines your technical skills and soft skills into one powerful number.",
    ],
  },
  {
    title: "Keep Getting Better",
    description: [
      "Use detailed insights and analytics to continuously refine your interview skills, ensuring you're always ready to impress.",
    ],
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
    <section className="py-24 text-white" id="timeline">
      <Heading text="Timeline" />
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
                mb: 10,
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
                  textAlign: "left",
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
                    marginBottom: index % 2 !== 0 ? "0" : "10px",
                    marginTop: index % 2 === 0 ? "0" : "10px",
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
                  <div>{step.title}</div>
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
