

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}



export async function fetchTasks(setTasks, setLoading) {
    setLoading(true);

    const url = "http://127.0.0.1:8000/api/task-list/";
    const response = await fetch(url);
    const data = await response.json();

    setTasks(data);
    setLoading(false);

}
