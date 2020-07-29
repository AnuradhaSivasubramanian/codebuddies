import React, { Fragment } from "react";
import Header from "./components/Header";
import styled from "styled-components";
import GlobalStyle from "./theme/globalstyle";
import Loading from './components/Loading/Loading'
import './App.css'

const AppWrapper = styled.div`
  height: 100vh;
  margin: 0;
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper>
        <Header />
         <Loading />
      </AppWrapper>
    </Fragment>
  );
}

export default App;
