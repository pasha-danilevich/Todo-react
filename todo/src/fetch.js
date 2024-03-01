export function fetchTasks(setTaskList, setLoading) {
    console.log("fetch...");
    const url = "http://127.0.0.1:8000/api/task-list/";
    const response = fetch(url).then((response) => response.json());
    return response;
}

async function fetchCreatUpdate(url, method, getCookie, item) {
    var csrftoken = getCookie("csrftoken");


    await fetch(url, {
        method: method,
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(item),
    }).catch(function (error) {
        console.log("ERROR:", error);
    });
}

export async function fetchTaskUpdate(item, getCookie) {
    console.log("updating...");
    const url = `http://127.0.0.1:8000/api/task-update/${item.id}`;

    await fetchCreatUpdate(url, "PATCH", getCookie, item);
}
export async function fetchTaskCreate(item, getCookie) {
    console.log("saving...");
    const url = "http://127.0.0.1:8000/api/task-create/";
    const filterObject = {
        title: item.title
    }
    await fetchCreatUpdate(url, "POST", getCookie, filterObject);
}

export async function fetchTaskDelete(id, getCookie) {
    console.log("delete...");
    var csrftoken = getCookie("csrftoken");

    const url = `http://127.0.0.1:8000/api/task-delete/${id}`;

    await fetch(url, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken,
        },
    }).catch(function (error) {
        console.log("ERROR:", error);
    });
}
