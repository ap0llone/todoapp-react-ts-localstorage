export interface Todo {
    id: number;
    title: string;
    isDone: boolean;
}

export interface FormProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo(e: React.FormEvent): void;
}

export interface ListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    removeTodo(id: number): void;
    toggleTodo(id: number): void;
    clearTodo(): void;
}

export interface CardProps {
    todo: any;
    todos: Todo[];
    removeTodo(id: number): void;
    toggleTodo(id: number): void;
}
