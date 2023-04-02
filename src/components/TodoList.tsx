import React from "react";
import "../styles/todolist.scss";
import { ListProps } from "../types/interfaces";
import TodoCard from "./TodoCard";

const TodoList: React.FC<ListProps> = ({ todos, setTodos, removeTodo, toggleTodo, clearTodo }) => {
    return (
        <>
            <div className={todos.length === 0 ? "none" : "todo__list"}>
                {todos.map((t) => (
                    <TodoCard
                        todo={t}
                        todos={todos}
                        key={t.id}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                    />
                ))}
            </div>
            <div className={todos.length === 0 ? "none" : "todo__manage"}>
                <h4 className="todo__manage-title">{todos.length} Items</h4>
                <button className="todo__manage-btn" onClick={clearTodo}>
                    Clear Complete
                </button>
            </div>
        </>
    );
};

export default TodoList;
