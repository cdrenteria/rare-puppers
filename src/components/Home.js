
import Hero from "./Hero";
import Data from "./data";
import Card from "./Card";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  const cards = Data.map((property) => {
    return (
      <Link to={`details/${property.id}`}>
        <Card
          key={
            Math.floor(Math.random() * 100) +
            10168907512 +
            Math.floor(Math.random() * 100)
          }
          img={property.img}
          milesAway={property.milesAway}
          country={property.country}
          disability={property.disability}
          cost={property.cost}
          id={property.id}
        />
      </Link>
    );
  });
  return (
    <div className="home">
      <Hero />
      <div className="cards-list">{cards}</div>
    </div>
  );
}
