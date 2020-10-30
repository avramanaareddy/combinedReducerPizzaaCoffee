import coffeeOps from "./CoffeeReducer";
import pizzaOps from "./PizzaReducer";

import { combineReducers } from "redux";

export const appReducer = combineReducers({
  pizzas: pizzaOps,
  coffees: coffeeOps
});
