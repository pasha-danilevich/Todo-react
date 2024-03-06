import "./App.css";
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

export default function App() {



    function handleSubmit(bool) {
        // load();
        // setActiveItem({
        //     id: null,
        //     title: "",
        //     complated: false,
        //     editing: false,
        // });
    }
    function handleClick(item) {
        if (item == "delete" || item == "update") {
            // load();
        } else {
            // setActiveItem(item);
        }
    }
    function handleChenge(item) {
        // setActiveItem(item);
    }

    return (
        <>
            <Header
                onSubmitCallBack={handleSubmit}
                // activeItem={activeItem}
                handleChengeCallBack={handleChenge}
            />
            <TaskList />
        </>
    );
}
