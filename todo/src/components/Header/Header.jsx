import "./Header.css";


import Button from "./Button/Button";
import { useState } from "react";

export default function Header({ onSubmit }) {
    const [title, setTitle] = useState('')

    function handleChenge(e){
        setTitle(e.target.value)
    }
    
    function handleSubmit(e) {
        e.preventDefault();

        onSubmit(title);
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                {/* отдает title */}
                <input
                    className="input"
                    type="text"
                    onChange={handleChenge}
                    
                    placeholder="Add task.."
                />
                {/* принимает useState */}
                <Button>Создать</Button>
            </form>
        </header>
    );
}
