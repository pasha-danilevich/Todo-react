import "./Header.css";

import { useContext } from "react";
import { Context } from "../../context.js";

import { fetchTaskCreate, getCookie } from "../../fetch.js";

import Input from "./Input/Input";
import Button from "./Button/Button";

export default function Header() {
    // useState
    const contextValue = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();

        fetchTaskCreate(contextValue.activeItem, getCookie)
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                {/* отдает title */}
                <Input />
                {/* принимает useState */}
                <Button>Создать</Button>
            </form>
        </header>
    );
}
