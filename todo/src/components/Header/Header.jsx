import './Header.css'

import Input from "./Input/Input";
import Button from "./Button/Button";

export default function Header() {
    return (
        <header>
            <form action="">
                <Input />
                <Button>Создать</Button>
            </form>
        </header>
    );
}
