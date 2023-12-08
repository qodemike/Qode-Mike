import styled from "styled-components";
import Icons from "./components/Icons";
import Socials from "./components/SocialIcons";

const Grid = styled.div`
  display: grid;

  grid-template-rows: 71px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    " nav "
    " main ";

  @media screen and (min-width: 768px) {
    grid-template-columns: 9fr 82fr 9fr;

    grid-template-areas:
      " nav nav nav"
      " left main right";
  }
`;
const Nav = styled.div`
grid-area: nav;
`;
const SideBarLeft = styled.div`
  height: calc(100vh - 71px);
  grid-area: left;
  display: none;

  @media screen and (min-width: 768px){
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 40px;
  }
`;
const SideBarRight = styled.div`
  height: calc(100vh - 71px);
  grid-area: right;
  display: none;

  @media screen and (min-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
`;
const Main = styled.div`
  grid-area: main;
`;

function App() {
  return (
    <>
      <Grid>
        <Nav></Nav>
        <SideBarLeft>
          <Socials id="github" />
          <Socials id="instagram" />
          <Socials id="twitter" />
          <Socials id="linkedin" />
        </SideBarLeft>
        <SideBarRight>
          <Icons id="gmail"></Icons>
        </SideBarRight>
        <Main>
        </Main>
      </Grid>
    </>
  );
}

export default App;
