import { useReducer } from "react";
const initialState = {
  value: "",
  isTouched: false
};
const inputReducer = (prevState, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.payload,
      isTouched: prevState.isTouched
    };
  }

  if (action.type === "BLUR") {
    return {
      value: prevState.value,
      isTouched: true
    };
  }

  if (action.type === "RESET") {
    return initialState;
  }
  return initialState;
};
const useInput = (checkValueIsValid) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);
  const isValueValid = checkValueIsValid(inputState.value);
  const valueIsValid = !isValueValid && inputState.isTouched;

  const onValueChangeHandler = (event) => {
    dispatch({ type: "INPUT", payload: event.target.value });
  };

  const onValueBlur = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    enteredValue: inputState.value,
    isTouched: inputState.isTouched,
    isValueValid,
    valueIsValid,
    onValueChangeHandler,
    onValueBlur,
    reset
  };
};
export default useInput;
