import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const MotionDiv = styled(motion.div)`
  position: relative;
  height: 100%;
`;
