import "./Header.css";
import classes from "./Button.module.css";

import { memo } from "react";

import { getCookie } from "../../getCookie";
import { fetchTaskCreate, fetchTaskUpdate } from "../../fetch";

import { useDispatch, useSelector } from "react-redux";
import {
    addTitleAction,
    setEditingStatusAction,
} from "../../redux/activeItemReducer";

function Header() {
    const dispatch = useDispatch();
    const activeItem = useSelector((state) => state.activeItem);

    function handleChenge(e) {
        dispatch(addTitleAction(e.target.value));
        if (e.target.value == "") {
            dispatch(setEditingStatusAction(false))
        }
    }

    function taskCreate(title) {}

    function handleSubmit(e) {
        e.preventDefault();

        if (activeItem.isEditing) {
            fetchTaskUpdate(activeItem, getCookie);
        } else {
            fetchTaskCreate(activeItem, getCookie);
        }
    }

    function createOrUpdateButtonText(text) {
        if (activeItem.isEditing & (activeItem.title != "")) {
            return "Изменить";
        } else {
            return "Создать";
        }
    }
    console.log('isEditing', activeItem.isEditing);

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
                    {createOrUpdateButtonText()}
                </button>
            </form>
        </header>
    );
}

export default Header = memo(Header);
