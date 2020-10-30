import React from "react";
import { connect } from "react-redux";
import AddCoffee from "../presentation/AddCoffee";
import CoffeesList from "../presentation/CoffeesList";
function CoffeeContainer(props) {
  console.log(props);
  return (
    <div>
      <h1>Coffe Store</h1>

      <AddCoffee coffee={props.coffee} />

      <CoffeesList coffees={props.coffees} />
    </div>
  );
}
const mapStateToProps = (state, ownProps) => {
  return { coffees: state };
};
export default connect(mapStateToProps)(CoffeeContainer);
//Input element
// two buttons add,buy
// Dispatch an action.
