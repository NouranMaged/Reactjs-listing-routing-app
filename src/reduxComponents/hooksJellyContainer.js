import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyJelly } from "redux/jelly/jellyActions";

function HooksJellyContainer(props) {
  const numOfJelly = useSelector((state) => state.jelly.numOfJelly);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Jelly = {numOfJelly}</h1>
      <button onClick={() => dispatch(buyJelly())} className="btn">
        Buy Jelly
      </button>
    </div>
  );
}

export default HooksJellyContainer;
