import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./components/data";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const cards = Data.map((property) => {
    return (
      <Card
        key={Math.floor(Math.random() * 100)}
        img={property.img}
        milesAway={property.milesAway}
        country={property.country}
        disability={property.disability}
        cost={property.cost}
      />
    );
  });
  console.log(cards);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="cards-list">{cards}</div>
    </div>
  );
}

export default App;
