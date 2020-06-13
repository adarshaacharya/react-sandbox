import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";


// actions creator 
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};

const deleteTodo = (_id) => {
  return {
    type: DELETE_TODO,
    _id,
  };
};


// reducer function
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.payload, _id: Date.now() }];

    case DELETE_TODO:
      return state.filter((todo) => todo._id !== action._id);

    default:
      return state;
  }
};


// create store
const store = createStore(reducer);

// subscribe to events
store.subscribe(() => console.log(store.getState()));


// dispatch actions
const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDeleteTodo = (e) => {
  const _id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteTodo(_id));
};


// map the array
const paintTodos = () => {
  const todos = store.getState();
  ul.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "del";
    btn.addEventListener("click", dispatchDeleteTodo);
    li.id = todo._id;
    li.innerText = todo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintTodos);

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo);
};

form.addEventListener("submit", onSubmit);



// <h1>Form</h1>

// <form>
//   <input type="text" name="" id="" placeholder="Write todo" />
//   <button>Add</button>
// </form>

// <ul></ul>