import React from "react";
import Explore from "../components/Explore";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SmallDesc from "../components/SmallDesc";

function Home() {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Explore />
      <SmallDesc />
    </div>
  );
}

export default Home;
