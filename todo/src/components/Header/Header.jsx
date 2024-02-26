import "./Header.css";

import Button from "./Button/Button";
import { useState } from "react";

import { getCookie } from "../../getCookie";
import { fetchTaskCreate, fetchTaskUpdate } from "../../fetch";

export default function Header({ onSubmitCallBack, activeItem, handleChengeCallBack }) {
    // const [title, setTitle] = useState("");



    function handleSubmit(e) {
        e.preventDefault();

        if (activeItem.editing){
            fetchTaskUpdate(activeItem, getCookie).then(() => onSubmitCallBack())
        }else{
            fetchTaskCreate(activeItem, getCookie).then(() => onSubmitCallBack());
        }


        // не используется async могут быть ошибки*

        // update
        // в данном случае очень важен async так как таска не успевает создаться
        // на сервере, а submit уже отправлен
        
        // update +
        // в идеале использовать конструкцию: 
        // await fetch(url).then(() => doSomething())
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

                <input
                    className="input"
                    type="text"
                    onChange={handleChenge}
                    value={activeItem.title ? activeItem.title : ''}
                    placeholder="Что надо сделать..."
                />

                <Button>{activeItem.editing ? 'Изменить' : 'Создать'}</Button>
            </form>
        </header>
    );
}
