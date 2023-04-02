import React, { useState } from "react";
import "../styles/todocard.scss";
import check from "../assets/check.svg";
import checkTrue from "../assets/checkTrue.svg";
import { CardProps } from "../types/interfaces";

const TodoCard: React.FC<CardProps> = ({ todo, todos, removeTodo, toggleTodo }) => {
    const [active, setActive] = useState<boolean>(false);

    function handleDone() {
        toggleTodo(todo.id);
        setActive(!active);
    }

    return (
        <div className="todo__card">
            <button className="todo__card-btn" onClick={handleDone}>
                {" "}
                <img src={active ? checkTrue : check} alt="Check" />
            </button>
            <h3
                className="todo__card-title"
                onClick={() => removeTodo(todo.id)}
                style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
                {todo.title}
            </h3>
        </div>
    );
};

export default TodoCard;
