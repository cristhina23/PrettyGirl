import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Productos from "../components/Productos";

const Home = () => {
  return (
    <>
      <Header activeHeading={1} />
      <main>
        <Hero />
        <Categories />
        <Productos />
      </main>
      <Footer />
    </>
  );
};

export default Home;
