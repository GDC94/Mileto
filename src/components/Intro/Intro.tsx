import React from "react";
import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Background from "./2.jpg";
import { Container, MotionDiv } from "./Intro.styles";

export default function Intro() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 2], ["0vh", "110vh"]);

  return (
    <Container ref={container}>
      <MotionDiv style={{ y }}>
        <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
      </MotionDiv>
    </Container>
  );
}
