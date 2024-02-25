import "./Header.css";

import Button from "./Button/Button";
import { useState } from "react";

import { getCookie } from "../../getCookie";
import { fetchTaskCreate } from "../../fetch";

export default function Header({ onSubmitCallBack, activeItem, handleChengeCallBack }) {
    // const [title, setTitle] = useState("");

    const stateActiveItem = activeItem
    console.log(stateActiveItem)


    function handleSubmit(e) {
        e.preventDefault();

        fetchTaskCreate(activeItem, getCookie);
        // создать изменение 

        // не используется async могут быть ошибки
        onSubmitCallBack();
    }

    function handleChenge(e) {
        handleChengeCallBack({
            ...activeItem,
            title: e.target.value,
        });
        
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                {/* отдает title */}
                <input
                    className="input"
                    type="text"
                    onChange={handleChenge}
                    value={stateActiveItem.title ? stateActiveItem.title : ''}
                    placeholder="Add task.."
                />
                {/* принимает useState */}
                <Button>Создать</Button>
            </form>
        </header>
    );
}
