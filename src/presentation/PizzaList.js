import React from "react";

function PizzasList(props) {
  console.log('in pizzas list: ',props);
  return (
    <ul>
      {props.pizzas.pizzas.map((pizza) => (
        <li key={pizza}>{pizza} </li>
      ))}
    </ul>
  );
}

export default PizzasList;
