import "./Header.css";
import classes from "./Button.module.css";



import { memo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setTitleToActiveItem, toggleEditingToActiveItem } from "../../redux/activeItemSlice";
import { fetchCreateTask, fetchUpdateTask } from "../../redux/taskSlice";

const svgSend = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="icon send-icon">

    <rect  y="170" width="400" height="60" rx="30" ry="30"/>
    <rect  x="220.5" y="219.5" width="200" height="60" rx="30" ry="30" transform="translate(-82.55 299.71) rotate(-45)"/>
    <rect  x="220.5" y="120.5" width="200" height="60" rx="30" ry="30" transform="translate(200.29 -182.55) rotate(45)"/>

</svg>
const svgChange = 

<svg id="change" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="icon change-icon">
    <path  d="M300,70h0a30,30,0,0,1,30,30v15a15,15,0,0,1-15,15H285a15,15,0,0,1-15-15V100A30,30,0,0,1,300,70Z" transform="translate(158.58 -182.84) rotate(45)"/>
    <rect  x="75.6" y="184.63" width="219.56" height="60" rx="15" ry="15" transform="translate(-97.47 193.94) rotate(-45)"/>
    <path  d="M195.6,204.47h0a29.9,29.9,0,0,0-42.28,0L109.69,248.1h0L80.3,277.5a19.91,19.91,0,0,0-5.83,14.08v23.9c0,.33,0,.66,0,1,0,.15,0,.29.06.44s0,.35.08.53.08.33.12.49.07.3.12.45.11.32.17.47.1.3.16.45.13.29.2.43.14.3.22.45.16.27.24.4.17.29.27.44.21.28.31.42.17.24.27.36a10,10,0,0,0,1.39,1.39l.36.27.42.31.44.27.4.24.45.22.43.2.45.16.47.17.45.12.49.12.53.08.44.06c.33,0,.66,0,1,0h24.22a19.91,19.91,0,0,0,14.08-5.83l13-13h0l59.9-59.9A29.9,29.9,0,0,0,195.6,204.47Z"/>
</svg>


function Header() {
    const dispatch = useDispatch();
    const activeItem = useSelector((state) => state.activeItem.task);


    function handleChenge(e) {
        dispatch(setTitleToActiveItem({ title: e.target.value }))

        if (e.target.value == "") {
            dispatch(toggleEditingToActiveItem({editing: false}));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (activeItem.title == '' || activeItem.title == null){

        } else {
            if (activeItem.editing) {
                dispatch(fetchUpdateTask(activeItem))
                
            } else {
                dispatch(fetchCreateTask(activeItem.title))
            }
        }
        dispatch(setTitleToActiveItem({ title: '' }))
        dispatch(toggleEditingToActiveItem({editing: false}));
    }

    function createOrUpdateButtonText(text) {
        if (activeItem.editing & (activeItem.title != "")) {
            return svgChange
        } else {
            return svgSend
        }
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    onChange={handleChenge}
                    value={activeItem.title ? activeItem.title : ""}
                    placeholder="Что надо сделать..."
                />
                <button type="submit" className={classes.button}>
                    {createOrUpdateButtonText()}
                </button>
            </form>
        </header>
    );
}

export default Header = memo(Header);
