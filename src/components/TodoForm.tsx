import React from "react";
import "../styles/todoform.scss";
import btnArrow from "../assets/arrow.svg";
import { FormProps } from "../types/interfaces";

const TodoForm: React.FC<FormProps> = ({ todo, setTodo, addTodo }) => {
    return (
        <form className="todo__form" onSubmit={addTodo}>
            <input
                className="todo__input"
                type="text"
                placeholder="Create a new todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button className="todo__btn">
                <img src={btnArrow} alt="BtnArrow" />
            </button>
        </form>
    );
};

export default TodoForm;
