import React from "react";
/*Imports for Material UI*/

/*Imports for components*/
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Showcase from "./components/Showcase";
import RowFirst from "./components/RowFirst";
import RowSecond from "./components/RowSecond";
import Faq from "./components/Faq";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewsLetter />
      <Showcase />
      <RowFirst />
      <RowSecond />
      <Faq />
      <Instructors />
      <Footer />
    </>
  );
}

export default App;
