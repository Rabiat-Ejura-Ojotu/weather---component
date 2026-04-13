import Counter from "./Counter.jsx";
import InputComponent from "./InputComponent.jsx";
import ShoppingList from "./ShoppingList.jsx";
import Conditional from "./Conditional.jsx";
import Result from "./Result.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from "./Posts.jsx";
import Weather from "./Weather.jsx";

function App() {
  return (
    // <BrowserRouter>
    //   <nav>
    //     <Link to="/">Home</Link>
    //     <Link to="/about">About</Link>
    //     <Link to="/contact">Contact</Link>
    //   </nav>

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>

    <div>
      <Posts />
      <Weather />
    </div>
  );
}

export default App;
