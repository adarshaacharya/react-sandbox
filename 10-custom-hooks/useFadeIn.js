import React from "react";
import "./styles.css";

const useFadeIn = (duration = 1, delay = 1) => {
  const element = React.useRef();

  if (typeof duration !== "number" || typeof delay !== "number") return;

  React.useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);

  return {
    ref: element,
    style: { opacity: 0 }
  };
};

export default function App() {
  const fadeInHi = useFadeIn(4, 2);
  const fadeInPara = useFadeIn(10, 15);

  return (
    <div className="App">
      <h1 {...fadeInHi}>Hello</h1>
      <p {...fadeInPara}> Helo llalala </p>
    </div>
  );
}
