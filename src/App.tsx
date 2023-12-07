import styled from "styled-components";

const Grid = styled.div`
  display: grid;

  grid-template-rows: 70px 1fr;
  grid-template-columns: 1fr;
    grid-template-areas:
      " nav "
      " main ";

  @media screen and (min-width: 500px) {
    grid-template-columns: 120px 1fr 120px;

    grid-template-areas:
      " nav nav nav"
      " left main right";
  }
`;
const Nav = styled.div`
  height: 100%;
  background-color: red;
  grid-area: nav;
`;
const SideBarLeft = styled.div`
  height: 100vh;
  background-color: orange;
  grid-area: left;
`;
const SideBarRight = styled.div`
  height: 100%;
  background-color: green;
  grid-area: right;
`;

function App() {
  return (
    <>
      <Grid>
        <Nav></Nav>
        <SideBarLeft></SideBarLeft>
        <SideBarRight></SideBarRight>
      </Grid>
    </>
  );
}

export default App;
