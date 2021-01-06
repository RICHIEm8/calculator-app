import React, { useState } from "react";
import { Buttons } from "./Buttons";
import { Input } from "./Input";
import * as math from "mathjs";

export const App: React.FC = () => {
  const [input, setInput] = useState({ input: "" });

  const addToInput = (val: string) => () => {
    setInput({ input: input.input + val });
  };

  const handleEqual = () => {
    setInput({ input: math.evaluate(input.input) });
  };

  const handleClear = () => {
    setInput({ input: "" });
  };
  return (
    <>
      <Input input={input.input} />
      <div>
        <Buttons
          addToInput={addToInput}
          handleClear={handleClear}
          handleEqual={handleEqual}
        />
      </div>
    </>
  );
};

export default App;
