import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  clip-path: polygon(0% 0, 100% 0%, 100% 100%, 0 100%);
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  padding: 20px;
  mix-blend-mode: difference;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p:first-child {
    width: 50vw;
    font-size: 2vw;
    align-self: flex-end;
    text-transform: uppercase;
  }

  p:last-child {
    font-size: 5vw;
    text-transform: uppercase;
  }
`;

export const FixedDiv = styled.div`
  position: fixed;
  top: -10vh;
  left: 0;
  height: 120vh;
  width: 100%;
`;

export const MotionDiv = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
`;
