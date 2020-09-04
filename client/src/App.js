import React from "react";
import Header from "./pages/Header";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Menu />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
