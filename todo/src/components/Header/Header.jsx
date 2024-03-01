import "./Header.css";
import classes from "./Button.module.css";

import { memo } from "react";

import { getCookie } from "../../getCookie";
import { fetchTaskCreate, fetchTaskUpdate } from "../../fetch";

import { useDispatch, useSelector } from "react-redux";
import { addTitleAction } from "../../redux/activeItemReducer";

function Header({ onSubmitCallBack }) {
    const dispatch = useDispatch();
    const activeItem = useSelector((state) => state.activeItem);

    function handleChenge(e) {
        dispatch(addTitleAction(e.target.value));
    }

    function taskCreate(title) {}

    function handleSubmit(e) {
        e.preventDefault();

        if (activeItem.editing) {
            fetchTaskUpdate(activeItem, getCookie).then(() =>
                onSubmitCallBack()
            );
        } else {
            fetchTaskCreate(activeItem, getCookie).then(() =>
                onSubmitCallBack()
            );
        }
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    onChange={handleChenge}
                    value={activeItem.title ? activeItem.title : ""}
                    placeholder="Что надо сделать..."
                />
                <button type="submit" className={classes.button}>
                    {activeItem.isEditing ? "Изменить" : "Создать"}
                </button>
            </form>
        </header>
    );
}

export default Header = memo(Header);
