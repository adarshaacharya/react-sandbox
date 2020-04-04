// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create react component
// const App = () => {
//   const labelText = 'Enter name';
//   const buttonText = { text : 'Click here' };
//   return (
//     <div>
//       <label className="label" htmlFor="name">
//         { labelText }
//       </label>
//       <input type="text" id="name" />
//       <button style={{backgroundColor : 'blue', color : 'white'}}>{buttonText.text}</button>
//     </div>
//   );
// };

function getTime() {
  return new Date().toLocaleTimeString();
}

const App = () => {
  const date = getTime();
  const style = { color: "blue", padding: "20px", border: "1px solid black" };
  return (
    <div style={style}>
      {date}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
