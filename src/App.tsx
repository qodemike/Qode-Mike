import styled from "styled-components";
import NavBar from "./components/NavBar";
import styles from "./App.module.css";
import {SideBarRight} from "./components/SideBarRight/SideBarRight";
import SideBarLeft from "./components/SideBarLeft/SideBarLeft";

const Grid = styled.div`
  display: grid;

  grid-template-rows: 71px 1fr;
  grid-template-columns: 1fr;
  grid-template-areas:
    " nav "
    " main ";

  @media screen and (min-width: 768px) {
    grid-template-columns: 120px 82fr 120px;

    grid-template-areas:
      " nav nav nav"
      " left main right";
  }
`;
const Nav = styled.div`
  grid-area: nav;
`;
const Left = styled.div`
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
const Right = styled.div`
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
        <Left>
          <SideBarLeft/>
        </Left>
        <Right>
         <SideBarRight/>          
        </Right>
        <Main></Main>
      </Grid>
    </>
  );
}

export default App;
