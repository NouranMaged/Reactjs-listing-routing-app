import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "redux/iceCream/iceCreamActions";

function HooksIceCreamContainer(props) {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Ice Creams = {numOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())} className="btn">
        Buy Ice Cream
      </button>
    </div>
  );
}

export default HooksIceCreamContainer;
