import React from "react";
import { connect } from "react-redux";
import AddPizza from "../presentation/AddPizza";
import PizzasList from "../presentation/PizzaList";
function PizzaContainer(props) {
  console.log(props);
  return (
    <div>
      <h1>Pizza Store</h1>

      <AddPizza pizza={props.pizza} />

      <PizzasList pizzas={props.pizzas} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { pizzas: state };
};
export default connect(mapStateToProps)(PizzaContainer);
//Input element
// two buttons add,buy
// Dispatch an action.
