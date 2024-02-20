import './Header.css'

import Input from "./Input/Input";
import Button from "./Button/Button";

export default function Header() {
    // useState
    

    return (
        <header>
            <form action="">
                {/* отдает title */}
                <Input />
                {/* принимает useState */}
                <Button>Создать</Button>
            </form>
        </header>
    );
}
