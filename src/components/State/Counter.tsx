import React, { useReducer } from "react";

const initialValue = { count: 0 };
type CountProps = {
  count: number;
};

type UpdateActionProps = {
  type: "increment" | "decrement";
  payload: number;
};

type ResetActionProps = {
  type: "reset";
};

type ActionProps = UpdateActionProps | ResetActionProps;

const reducer = (state: CountProps, action: ActionProps) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialValue;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <p>{state.count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: "increment", payload: 10 })}
      >
        Increment +
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "decrement", payload: 10 })}
      >
        Decrement -
      </button>

      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
