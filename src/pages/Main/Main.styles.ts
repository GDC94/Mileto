import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100dvh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1640px;
  margin: 0 auto;
  border-right: 0.3px solid rgba(255, 255, 255, 0.2);
  border-left: 0.3px solid rgba(255, 255, 255, 0.2);
  position: relative;
  font-size: 2.5rem;

  @media print {
    width: 100%;
    min-width: 100%;
  }
`;
