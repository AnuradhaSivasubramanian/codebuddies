import React from "react";
import Header from "./components/Header";
import Loading from "./components/Loading/Loading";
import "./Asset/style/App.scss";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import WhoWeAreTitle from "./components/whoWeAre/WhoWeAreTitle";
import GitHub from "./components/gitHub/GitHub";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div >
              <section className="header">

        <Header />
        </section>
        <main className="app-main">
        <section className="articles">
          <Loading />
          </section>

          <section className="podcast">
          <Loading />
        </section>

        <section className="whoWeAreTitle">
         <WhoWeAreTitle />
         </section>

         <section className="whoWeAre">

         <WhoWeAre />
        </section>
        <section className="gitHub">
          <GitHub/>
          </section>

          <section className="contact">

          <Contact/>
        </section>
        </main>


    </div>
  );
}

export default App;
