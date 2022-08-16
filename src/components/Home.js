import Hero from "./Hero";
import Data from "./data";
import Card from "./Card";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Home() {
  fetch(
    "https://api.rescuegroups.org/v5/public/animals/search/isneedingfoster/?limit=1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "nlPUcL9J",
      },
      body: JSON.stringify({
        filterRadius: {
          miles: 25,
          postalcode: 84105,
        },
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
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
