import React from 'react';

type Props = {
  handleClick: (value : string) => void;
};
export const Button = ({ handleClick }: Props) => {
  return <button onClick={() => handleClick('Hi')}>Click Me</button>;
};
