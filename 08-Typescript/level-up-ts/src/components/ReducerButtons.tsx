import React from 'react';
import styled from 'styled-components';
import { useClickOutside } from '../hooks/useClickOutside';
import { GlobalContext } from '../context/GlobalState';

export const ReducerButtons = () => {
    const ref = React.useRef<HTMLDivElement>(null!);

    // pulling rvalue out of context
    const context = React.useContext(GlobalContext);
    const { rValue, turnOn, turnOff } = context;

    useClickOutside(ref, () => {
        console.log('Clicked outside');
    });

    return (
        <Wrapper ref={ref}>
            {rValue && <h1>Visible</h1>}
            <button onClick={turnOn} className="action">
                Visible
            </button>
            <button onClick={turnOff} className="action">
                Invisible
            </button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background: #efefef;
    padding-bottom: 1rem;
`;
