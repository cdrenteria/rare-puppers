import React from "react";
import ReactDOM from "react-dom";
import Data from "./data";
import { useParams } from "react-router-dom";

export default function Details(props) {
  const { id } = useParams();
  let data = {};
  findDogById();
  function findDogById() {
    for (let x = 0; x < Data.length; x++) {
      const item = Data[x];
      if (item.id === id) {
        data = item;
      }
    }
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={"../images/" + data.img} alt={data.name} />
      <h3>{data.country}</h3>
      <h2>{data.disability}</h2>
    </div>
  );
}
