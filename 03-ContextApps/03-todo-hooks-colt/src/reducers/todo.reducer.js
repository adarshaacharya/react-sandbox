import shortid from "shortid";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: shortid.generate(), task: action.task, completed: false },
      ];

    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);

    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    // if id mateches take {single todo} and update the properties completed or !complteted else leave todo as it is)

    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );

    default:
      return state;
  }
};

export default TodoReducer;

// {type : 'ADD', task : 'Walk the dog}
// {type : 'REMOVE' , id : 123123}
// {type : TOGGLE, id : 123}
// {type : EDIT, id : 1212, newTask : 'walk cat}
