import React from "react";

interface ButtonProps {
  handleClick: () => void;
}

const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  const { handleClick, children } = props;
  return <button onClick={handleClick}>{children}</button>;
};

interface Props {
  addToInput: (val: string) => () => void;
  handleEqual: () => void;
  handleClear: () => void;
}

export const Buttons = (props: Props) => {
  const { addToInput, handleEqual, handleClear } = props;

  return (
    <>
      <Button handleClick={addToInput("0")}>0</Button>
      <Button handleClick={addToInput("1")}>1</Button>
      <Button handleClick={addToInput("2")}>2</Button>
      <Button handleClick={addToInput("3")}>3</Button>
      <Button handleClick={addToInput("4")}>4</Button>
      <Button handleClick={addToInput("5")}>5</Button>
      <Button handleClick={addToInput("6")}>6</Button>
      <Button handleClick={addToInput("7")}>7</Button>
      <Button handleClick={addToInput("8")}>8</Button>
      <Button handleClick={addToInput("9")}>9</Button>
      <Button handleClick={addToInput(".")}>.</Button>
      <Button handleClick={addToInput("+")}>+</Button>
      <Button handleClick={addToInput("-")}>-</Button>
      <Button handleClick={addToInput("*")}>x</Button>
      <Button handleClick={addToInput("/")}>÷</Button>
      <button onClick={handleEqual}>=</button>
      <button onClick={handleClear}>Clear</button>
    </>
  );
};
