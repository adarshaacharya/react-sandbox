export interface Todo {
  id: number;
  description: string;
  checked: boolean;
}

export interface TodoState {
  data: Todo[];
}

export const CREATE_TODO = '@todo/CREATE_TODO';
export const DELETE_TODO = '@todo/DELETE_TODO';

interface TodoActionType<T, P> {
  readonly type: T;
  payload: P;
}

export type TodoActions =
  | TodoActionType<typeof CREATE_TODO, Todo>
  | TodoActionType<typeof DELETE_TODO, number>;
