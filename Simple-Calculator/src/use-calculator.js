import { useState } from "react";

export const useCalculator = () => {
  const [input, SetInput] = useState(0);
  const [currentOperator, SetCurrentOperator] = useState(null);
  const [result, SetResult] = useState(null);
  const [tempInput, SetTempInput] = useState(null);
  const [tempOperator, SetTempOperator] = useState(null);
  const [isSelected, SetIsSelected] = useState(false);
  const [isClickedOperator, SetClickOperator] = useState(false);
  const [isClickedEqual, SetIsClickedEqual] = useState(false);

  const hashInput = !!input;

  const onPressNum = (Num) => {
    if (currentOperator && isClickedOperator) {
      SetResult(input);
      SetInput(Num);
      SetClickOperator(false);
    } else {
      const NewInput = Number(`${input}${Num}`);
      SetInput(NewInput);
    }
  };

  const onPressOperator = (operator) => {
    if (operator !== "=") {
      SetCurrentOperator(operator);
      SetClickOperator(true);
      SetIsClickedEqual(false);
    } else {
      let finalResult = result;
      const finalInput = isClickedEqual ? tempInput : input;
      const finalOperator = isClickedEqual ? tempOperator : currentOperator;
      switch (currentOperator) {
        case "+":
          finalResult = result + finalInput;
          break;
        case "-":
          finalResult = result - finalInput;
          break;
        case "*":
          finalResult = result * finalInput;
          break;
        case "/":
          finalResult = result / finalInput;
          break;
        default:
          break;
      }
      SetResult(finalResult);
      SetInput(finalResult);
      SetTempInput(finalInput);
      SetIsClickedEqual(true);
      SetCurrentOperator(null);
      SetTempOperator(finalOperator);
    }
  };

  const onPressReset = () => {
    if (hashInput) {
      SetInput(0);
    } else {
      SetInput(0);
      SetCurrentOperator(null);
      SetResult(null);
      SetTempOperator(null);
      SetTempInput(null);
    }
  };
  return {
    input,
    currentOperator,
    result,
    tempInput,
    tempOperator,
    hashInput,
    onPressNum,
    onPressOperator,
    onPressReset,
  };
};
