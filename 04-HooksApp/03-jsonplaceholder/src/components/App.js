import React, { useState } from "react";
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState("posts");

  return (
    <div className="ui container">
    <UserList />
      <button
        className="ui primary button"
        onClick={() => setResource("posts")}
      >
        Posts
      </button>
      <button
        className="ui secondary button"
        onClick={() => setResource("todos")}
      >
        Todos
      </button>
      
      <ResourceList resource ={resource} />
    </div>
  );
};

export default App;
