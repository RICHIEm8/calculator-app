import React from "react";

interface Props {
  input: string;
}

export const Input = (props: Props) => {
  const { input } = props;
  return <div>{input}</div>;
};
