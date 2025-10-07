import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Heading from "./Heading";

const timelineEvents = [
  { title: "Registration ", time: "9:00 AM - 9:45 AM" },
  { title: "Inauguration", time: "10:00 AM - 10:30 AM" },
  { title: "Evaluation & Exhibition", time: "10:30 AM - 12:30 PM" },
  { title: "Lunch", time: "12:30 PM - 1:00 PM" },
  { title: "Valedictory", time: "3:30 PM - 4:00 PM" },
];

const TimelineItem = ({ event }) => {
  const ref = useRef(null);
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2, 
      },
    },
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <li ref={ref} className="relative flex items-start my-8">
      <motion.div
        className="absolute left-0 top-1 w-6 h-6 bg-white rounded-full mt-1 border-4 border-tertiary z-10"
        style={{ boxShadow: '0 0 20px var(--tertiary-color)' }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.div
        className="absolute left-3 top-4 h-0.5 w-16 bg-tertiary origin-left"
        style={{ boxShadow: '0 0 20px var(--tertiary-color)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />

      <motion.div
        className="pl-24"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h3 variants={textVariants} className="font-bold text-2xl text-white">
          {event.title}
        </motion.h3>
        <motion.p variants={textVariants} className="text-gray-300 mt-1 text-lg">
          {event.time}
        </motion.p>
      </motion.div>
    </li>
  );
};

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  return (
    <section ref={ref} id="timeline" className="py-24">
      <Heading text="Timeline" />
      <div className="relative w-11/12 md:w-1/2 mx-auto mt-20">
        <motion.div
          className="absolute left-3 top-0 w-1 h-full bg-tertiary origin-top"
          style={{ 
            scaleY: scrollYProgress,
            boxShadow: '0 0 30px var(--tertiary-color)'
          }}
        />
        <ul className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;