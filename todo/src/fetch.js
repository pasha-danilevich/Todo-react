import { setAllTasks } from "./redux/taskReducer";
import { getCookie} from "./getCookie"; 

const rootUrl = 'http://127.0.0.1:8000/api/'


export function fetchTasks() {
    console.log("fetch...");
    return function(dispatch){
        const url = `${rootUrl}task-list/`;
        fetch(url).then((response) => response.json())
        .then((json) => dispatch(setAllTasks(json)))
    }
}

async function fetchCustom(url, method, item) {
    var csrftoken = getCookie("csrftoken");

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(item),
    })
    .then((response) => response.json())
    .then((json) => console.log(`fetch ${method}`, json))
    .catch(function (error) {
        console.log("ERROR:", error);
    });
    return response
}

export async function fetchTaskUpdate(item) {
    console.log("updating...");
    console.log('item update fetch', item)
    const url = `${rootUrl}task-update/${item.id}`;

    await fetchCustom(url, "PATCH", item);
}
export async function fetchTaskCreate(item) {
    console.log("saving...");
    const url = `${rootUrl}task-create/`;
    const filterObject = {
        title: item.title
    }
    const response = await fetchCustom(url, "POST", filterObject);
    return response
}

export async function fetchTaskDelete(id) {
    console.log("delete...");
    const url = `${rootUrl}task-delete/${id}`;

    await fetchCustom(url, "DELETE", null)

}
