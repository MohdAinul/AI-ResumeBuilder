import React from "react";
import Hero from "../components/home/Hero";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
