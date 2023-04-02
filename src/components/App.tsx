import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todo } from "../types/interfaces";

function getLocalStorage() {
    let todos = localStorage.getItem("Todos");
    if (todos) {
        return JSON.parse(localStorage.getItem("Todos") || "");
    } else {
        return [];
    }
}

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>(getLocalStorage());

    useEffect(() => {
        localStorage.setItem("Todos", JSON.stringify(todos));
    }, [todos]);

    function addTodo(e: React.FormEvent) {
        e.preventDefault();

        if (todo && todo.length > 5) {
            setTodos([...todos, { id: Date.now(), title: todo, isDone: false }]);
            setTodo("");
        }
        if (todo.length < 5) {
            alert("Your Todo is too short!");
            setTodo("");
        }
    }

    function removeTodo(id: number) {
        setTodos(
            todos.filter((todo) => {
                return todo.id !== id;
            })
        );
    }

    function toggleTodo(id: number) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isDone: !todo.isDone };
                }
                return todo;
            })
        );
    }

    function clearTodo() {
        const cleared: [] = [];
        setTodos(cleared);
    }

    return (
        <>
            <TodoForm todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                clearTodo={clearTodo}
            />

            {todos.length === 0 ? <h1 className="no-tasks">No Tasks</h1> : null}
        </>
    );
};

export default App;
