import * as React from 'react';

export const Input = () => {
  const [name, setName] = React.useState('');
  // !null is readonly
  const inputRef = React.useRef<HTMLInputElement>(null!);
  console.log(inputRef?.current?.value);
  return (
    <input
      ref={inputRef }
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};
