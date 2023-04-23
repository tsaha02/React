import { useState } from "react";
function Counter() {
  let [initValue, setInitValue] = useState(0);
  let fruits = ["mango", "apple", "banana", "pineapple", "orange"];
  let [fruit, setFruit] = useState([]);
  function addFruits() {
    for (let index = 0; index < fruits.length; index++) {
      setFruit((fruit) => fruit.concat(fruits[index]));
    }
  }
  function increase() {
    console.log("Increase");
    // initValue++;
    // console.log(initValue);
    setInitValue((initValue) => (initValue = initValue + 1));
  }
  function decrease() {
    console.log("Decrease");
    // initValue--;
    // console.log(initValue);
    setInitValue((initValue) => (initValue = initValue - 1));
  }
  function reset() {
    setInitValue((initValue) => (initValue = 0));
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{initValue}</h2>
      <h3>{fruit}</h3>
      <button
        onClick={() => {
          increase();
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          decrease();
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          addFruits();
        }}
      >
        Add Fruit
      </button>
    </div>
  );
}
export default Counter;
