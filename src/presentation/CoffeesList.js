import React from "react";

function CoffeesList(props) {
  console.log(props);
  return (
    <ul>
      {props.coffees.coffees.map((coffee) => (
        <li key={coffee}>{coffee} </li>
      ))}
    </ul>
  );
}

export default CoffeesList;
