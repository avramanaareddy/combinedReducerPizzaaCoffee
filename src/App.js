import React from "react";
import PizzaContainer from "./containers/PizzaContainer";
import CoffeeContainer from "./containers/CoffeeContainer"
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PizzaContainer />
      <CoffeeContainer />
    </div>
  );
}
