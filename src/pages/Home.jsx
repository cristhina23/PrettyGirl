import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Productos from "../components/Productos";
import Meta from "../components/Meta";

const Home = () => {
  return (
    <>
      <Meta title={"PG | Home"} />

      <main>
        <Hero />
        <Categories />
        <Productos />
      </main>
    </>
  );
};

export default Home;
