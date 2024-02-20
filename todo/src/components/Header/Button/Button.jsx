import classes from "./Button.module.css";

export default function Button({ children }) {

    function handleSaveChanges(){
        
    }

    return (
        <button className={classes.button} onClick={handleSaveChanges}>
            {children}
        </button>
    );
}
