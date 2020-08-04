import * as React from 'react';

type Props = {
    title: string;
    isActive?: boolean;
    status: 'loading' | 'loaded';
};

export const Head = ({ title = 'Hello', isActive = true }: Props) => {
    return (
        <>
            <h1>{title}</h1>
            {isActive && <h3>Active</h3>}
        </>
    );
};
