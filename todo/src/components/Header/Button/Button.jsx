import classes from "./Button.module.css";

export default function Button({ children, title }) {
    

    // принимает title
    function handleSaveChanges(){
        // fetchTaskCreate()
    }
    
    return (
        <button type="submit" className={classes.button}>
            {children}
        </button>
    );
}
