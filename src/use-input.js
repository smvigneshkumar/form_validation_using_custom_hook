import { useState } from "react";
const useInput = (checkValueIsValid) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValueValid = checkValueIsValid(enteredValue);
  const valueIsValid = !isValueValid && isTouched;

  const onValueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsTouched(true);
  };

  const onValueBlur = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    isTouched,
    isValueValid,
    valueIsValid,
    onValueChangeHandler,
    onValueBlur,
    reset
  };
};
export default useInput;
