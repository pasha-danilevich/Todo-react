export  function fetchTasks(setTaskList, setLoading) {
    console.log("fetch...");
    const url = "http://127.0.0.1:8000/api/task-list/";
    const response = fetch(url).then((response) => response.json())
    return response
}

export function fetchTaskCreate(item, getCookie) {
    console.log("saving...");

    var csrftoken = getCookie("csrftoken");

    const url = "http://127.0.0.1:8000/api/task-create/";

    const res = fetch(url, {
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