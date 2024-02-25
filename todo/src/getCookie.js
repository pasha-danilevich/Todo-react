export function getCookie(name) {
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








function fetchTaskCreate(contextValue, getCookie) {
    console.log("saving...");

    var csrftoken = getCookie("csrftoken");

    const url = "http://127.0.0.1:8000/api/task-create/";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify(contextValue.activeItem),
    })
        .then(
            contextValue.setActiveItem({
                ...contextValue.activeItem,
                saved: true,
            })
        )
        .catch(function (error) {
            console.log("ERROR:", error);
        });
}


















// export async function fetchTaskCreate(contextValue, getCookie) {
//     console.log("saving...");

//     var csrftoken = getCookie("csrftoken");

//     const url = "http://127.0.0.1:8000/api/task-create/";

//     fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             "X-CSRFToken": csrftoken,
//         },
//         body: JSON.stringify(contextValue.activeItem),
//     })
//         .then(
//             contextValue.setActiveItem({
//                 ...contextValue.activeItem,
//                 saved: true,
//             })
//         )
//         .catch(function (error) {
//             console.log("ERROR:", error);
//         });
// }

// UPDATE

// if (this.state.editing == true) {
//     url = `http://127.0.0.1:8000/api/task-update/${this.state.activeItem.id}/`;
//     this.setState({
//         editing: false,
//     });
// }
