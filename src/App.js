import React from "react";

import {
  About,
  Header,
  Work,
  Skills,
  Footer,
  Testimonials,
} from "./container/index";

import { Navbar } from "./component/";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
