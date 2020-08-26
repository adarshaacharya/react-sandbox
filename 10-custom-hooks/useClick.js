import React from "react";
import "./styles.css";

const useClick = (onClick) => {
  const element = React.useRef();

  React.useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }

    // if we return a function that function will be called when component will unmount
    return () =>{
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }

  }, []);

  return element;
};

export default function App() {
  const sayHello = () => console.log("say hello ");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hello CodeSandbox</h1>
    </div>
  );
}
