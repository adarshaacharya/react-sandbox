import React from 'react';
import { Head } from './components/Head';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ReducerButtons } from './components/ReducerButtons';
import { GlobalProvider } from './context/GlobalState';
import { BigC } from './components/BigC';
import './App.css';
import button from './button.svg';

function App() {
    return (
        <GlobalProvider>
            <div className="App">
                <Head title="Head" status="loaded" />
                <BigC title="Class" />
                <Button
                    handleClick={(e) => {
                        e.preventDefault();
                        console.log(e);
                    }}
                >
                    Click here <img src={button} alt="button" />
                </Button>
                <ReducerButtons />
                <Input />
            </div>
        </GlobalProvider>
    );
}

export default App;
