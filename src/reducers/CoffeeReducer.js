const COFFEES = ["HOT", "COLD"];
function coffeeOps(state = COFFEES, action) {
  console.log("Inside COffee reducer ", action);
  if (action.type === "BUY_COFFEE") {
    //CORN_P
    return state.filter((coffee) => coffee !== action.payload.name);
  }
  if (action.type === "ADD_COFFEE") {
    return [action.payload.name, ...state];
  }
  return state;
}
export default coffeeOps;
