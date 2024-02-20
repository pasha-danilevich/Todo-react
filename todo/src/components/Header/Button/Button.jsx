import classes from "./Button.module.css";

export default function Button({ children, title }) {
    // fetch

    // принимает title
    function handleSaveChanges(){
        // запускает fetch
    }

    return (
        <button className={classes.button} onClick={handleSaveChanges}>
            {children}
        </button>
    );
}
