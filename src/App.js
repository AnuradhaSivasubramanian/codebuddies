import React from "react";
import Header from "./components/Header";
import Loading from "./components/Loading/Loading";
import "./App.scss";

function App() {
  return (
    <div className="app-main">
        <Header />
        <section className="first-section">
          <Loading />
          <Loading />
        </section>
        <section className="second-section">
         <Loading />
         <Loading />
        </section>
        <section className="third-section">
          <Loading />
          <Loading />
        </section>
 

    </div>
  );
}

export default App;
