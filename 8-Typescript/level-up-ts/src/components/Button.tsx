import * as React from 'react';

type Props = {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button: React.FC<Props> = ({ handleClick, children }) => {
    return <button onClick={handleClick}>{children}</button>;
};

// type3 : Array<string> same as type3 : string[]

// React.FC<Props> -> FC interface contains children type already + handleClick() added on that
