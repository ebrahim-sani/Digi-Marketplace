import React from "react";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SmallDesc from "../components/SmallDesc";
import Testimonials from "../components/Testimonials";
import TopSoftwares from "../components/TopSoftwares";
import Trusted from "../components/Trusted";

function Home() {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <Explore />
      <SmallDesc />
      <Trusted />
      <Testimonials />
      <TopSoftwares />
      <Footer />
    </div>
  );
}

export default Home;
