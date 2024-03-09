import "./Header.css";
import classes from "./Button.module.css";

import { memo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setTitleToActiveItem, toggleEditingToActiveItem } from "../../redux/activeItemSlice";
import { fetchCreateTask, fetchUpdateTask } from "../../redux/taskSlice";

function Header() {
    const dispatch = useDispatch();
    const activeItem = useSelector((state) => state.activeItem.task);


    function handleChenge(e) {
        dispatch(setTitleToActiveItem({ title: e.target.value }))

        if (e.target.value == "") {
            dispatch(toggleEditingToActiveItem({editing: false}));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (activeItem.editing) {
            dispatch(fetchUpdateTask(activeItem))
            
        } else {
            dispatch(fetchCreateTask(activeItem.title))
        }
        dispatch(setTitleToActiveItem({ title: '' }))
        dispatch(toggleEditingToActiveItem({editing: false}));
    }

    function createOrUpdateButtonText(text) {
        if (activeItem.editing & (activeItem.title != "")) {
            return "Изменить";
        } else {
            return "Создать";
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
                    {createOrUpdateButtonText()}
                </button>
            </form>
        </header>
    );
}

export default Header = memo(Header);
