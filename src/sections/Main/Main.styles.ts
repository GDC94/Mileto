import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100dvh;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1640px;
  background-color: red;

  @media print {
    width: 100%;
    min-width: 100%;
  }
`;
