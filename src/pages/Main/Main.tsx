import { Caja, Cajita, CajitaTres, CajitaTwo, Wrapper } from "./Main.styles";

function FrontPage() {
  return (
    <Wrapper>
      <h1>Projects</h1>
      <Caja>
        <Cajita />
        <CajitaTwo />
        <CajitaTres />
      </Caja>
    </Wrapper>
  );
}

export default FrontPage;
