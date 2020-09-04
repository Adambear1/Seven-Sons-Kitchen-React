import React from "react";
import Header from "./pages/Header";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import Catering from "./pages/Catering";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Menu />
        <Contact />
        <About />
        <Catering />
      </div>
      <Footer />
    </div>
  );
}

export default App;
