import Image from "next/image";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import Background from "./1.jpg";
import { Container, Content, FixedDiv, MotionDiv } from "./Section.styles";

export default function Section() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <Container ref={container}>
      <Content>
        <p>
          Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a
          hurry.
        </p>
        <p>Background Parallax</p>
      </Content>
      <FixedDiv>
        <MotionDiv style={{ y }}>
          <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
        </MotionDiv>
      </FixedDiv>
    </Container>
  );
}
