import React from "react";
import Header from "./pages/Header";
import Footer from "./components/Footer";
import Menu from "./pages/Menu";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Menu />
      </div>
      <Footer />
    </div>
  );
}

export default App;
