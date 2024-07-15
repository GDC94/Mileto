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
  margin: 0 auto;
  border-right: 0.3px solid rgba(255, 255, 255, 0.2);
  border-left: 0.3px solid rgba(255, 255, 255, 0.2);
  position: relative;
  font-size: 2.5rem;
  letter-spacing: 3px;

  @media print {
    width: 100%;
    min-width: 100%;
  }
`;

export const Caja = styled.div`
  height: 300px;
  display: flex;
`;

export const Cajita = styled.div`
  width: 300px;
  background-color: #c9bb3f;
  height: 100%;
`;

export const CajitaTwo = styled.div`
  width: 300px;
  background-color: #6f8db5;
  height: 100%;
`;

export const CajitaTres = styled.div`
  width: 300px;
  background-color: #000000;
  height: 100%;
`;
