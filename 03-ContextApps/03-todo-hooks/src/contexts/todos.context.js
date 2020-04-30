import React, {createContext} from 'react';

const defaultTodos = [
    {id : 1, task : 'Create a gatsby site', completed : true},
    {id : 2 , task : 'MOw the lawn using goats', completed : false}
]

export const TodosContext = createContext(defaultTodos);


