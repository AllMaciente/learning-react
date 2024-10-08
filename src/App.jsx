// import { Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import ApiRickAndMorty from "./pages/ApiRickAndMorty";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ApiRickAndMorty />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
