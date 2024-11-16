import React from "react";

//components
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Nav from "./components/Nav";
import Work from "./components/Work";
import Header from "./components/Header";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience />
      <Work />
      <Contact />
      <div className="h-[4000px]"></div>
    </div>
  );
};

export default App;
