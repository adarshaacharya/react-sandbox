import React from 'react';

// define initial Val
export const initialValues = {
    rValue: true,
    turnOn: () => {},
    turnOff: () => {},
};

// create context
export const GlobalContext = React.createContext(initialValues);

// define reducers
type Action = { type: 'one' } | { type: 'two' } | { type: 'three' }; // we can use payload here

type State = {
    rValue: boolean;
};

function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'one':
            return { rValue: true };
        case 'two':
            return { rValue: false };

        default:
            return state;
    }
}

// provider component
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialValues);

    return (
        <GlobalContext.Provider
            value={{
                rValue: state.rValue,
                turnOn: () => dispatch({ type: 'one' }),
                turnOff: () => dispatch({ type: 'two' }),
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
