import styled from "styled-components";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import styles from "./App.module.css";

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

  @media screen and (min-width: 768px) {
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

  @media screen and (min-width: 768px) {
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
        <Nav>
          <NavBar />
        </Nav>
        <SideBarLeft></SideBarLeft>
        <SideBarRight></SideBarRight>
        <Main><Button style={{padding:'var(--padding-large)'}}>Get In Touch</Button></Main>
      </Grid>
    </>
  );
}

export default App;
