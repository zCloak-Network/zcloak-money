import Banner from "./components/banner";
import Header from "./components/header";
import MainSection from "./components/mainSection";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import Footer from "./components/footer";
import React from "react";
import Section8 from "./components/section8";

export default () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <MainSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section8 />
      <Section7 />
      <Footer />
    </React.Fragment>
  )
};