import { DummyData } from "../../Data/DummyData";
import React from "react";
import Card from "./Card/Card";
import '../UI/Styles/cards.css'





const Cards = () => {
  return (
    <React.Fragment>
      <ul className="list-card-holder">
        {DummyData.map((item) => (
          <li className="single-card-holder" key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Cards;
