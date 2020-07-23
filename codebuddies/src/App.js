import React, { Fragment } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import GlobalStyle from "./theme/globalstyle";

const AppWrapper = styled.div`
  background-color: blue;
  height: 100%;
  margin: 0;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />
      </AppWrapper>
    </Fragment>
  );
}

export default App;
