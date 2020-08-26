import React from 'react';
import './styles.css';

const content = [
  {
    tab: 'Section 1',
    content: 'I am content of section 1',
  },
  {
    tab: 'Section 2',
    content: 'I am content of section 2',
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(1, content);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab} </button>
      ))}
      {currentItem.content}
    </div>
  );
}
