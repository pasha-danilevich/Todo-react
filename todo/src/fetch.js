export function fetchTasks(setTaskList, setLoading) {
    console.log("fetch...");
    const url = "http://127.0.0.1:8000/api/task-list/";
    const response = fetch(url).then((response) => response.json());
    return response;
}

async function fetchCreatUpdate(url, getCookie, item) {
    var csrftoken = getCookie("csrftoken");

    await fetch(url, {
        method: "POST",
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

    await fetchCreatUpdate(url, getCookie, item);
}
export async function fetchTaskCreate(item, getCookie) {
    console.log("saving...");
    const url = "http://127.0.0.1:8000/api/task-create/";

    await fetchCreatUpdate(url, getCookie, item);
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
