import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "animate.css";
import "./index.css";
import Header from "./Header";
import Hero from "./Hero";
import CardSec from "./CardSec";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <div className="container">
      <Hero />
      <CardSec />
    </div>
    <Footer />
  </>
);
