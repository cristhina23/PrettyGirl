import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import MainLoader from "./components/MainLoader";
import { fadeInOut } from "./components/animations";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading && (
        <div className='fixed z-50  inset-0 bg-lightOverlay blackdrop-blur-md flex justify-center items-center w-full'>
          <MainLoader />
        </div>
      )}

      <Header />
      <Routes>
        <Route
          index
          element={<Home />}
        />
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/about'
          element={<About />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
