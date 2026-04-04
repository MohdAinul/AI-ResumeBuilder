import React from "react";
import Hero from "../components/home/Hero";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Testimonials from "../components/home/Testimonial";
import Footer from "../components/home/Footer";
import CallToAction from "../components/home/CallToAction";

const Home = () => {
  return (
    <div>
      <Banner />
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
