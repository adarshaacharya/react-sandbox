import React from "react";
import "./styles.css";

const useConfirm = (message = "", callback) => {
  if (typeof callback !== "function") return;

  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    }
  };

  return confirmAction;
};

export default function App() {
  const deleteWord = () => console.log("deleting the word");

  const confirmDelete = useConfirm("are you sure", deleteWord);
  return (
    <div className="App">
      <button onClick={confirmDelete}> Delete word </button>
    </div>
  );
}
