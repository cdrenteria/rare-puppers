import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Details from "./components/Details";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
