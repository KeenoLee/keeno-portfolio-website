"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Banking and Finance</span>, I realized
        that my heart beat to a different rhythm – one that echoed the symphony
        of technology and design. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a
        solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, React Native and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma.
      </p>
      <h2 className="text-xl font-bold mt-5">
        Where Learning Meets Innovation
      </h2>
      <p className="mt-1">
        I'm currently exploring the realms of AI and programming, hungry to
        uncover new horizons in this ever-e dvolving landscape. And here's a fun
        tidbit: my coding journey began as a digital marketing aficionado,
        delving into tools like Google Analytics and Google Tag Manager.
      </p>
      <h2 className="text-xl font-bold mt-6">Seeking the Next Adventure</h2>
      <p className="mt-1">
        As I embrace this dynamic journey, I'm on the lookout for new
        opportunities that challenge me to
        <span className="font-medium">reach new heights</span>. If you're in
        search of a versatile and creative technologist who understands the
        intricate dance between code and design, let's connect!
      </p>
      <p className="text-xl font-bold mt-6 ">
        Together, we'll create digital masterpieces that stand the test of time.
      </p>
    </motion.section>
  );
}
