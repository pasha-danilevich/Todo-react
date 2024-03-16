import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../getCookie";

const rootUrl = "http://127.0.0.1:8000/api/";

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async function (_, { rejectWithValue }) {
        try {
            const url = `${rootUrl}task-list/`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("List tasks. Server Error!");
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const fetchDeleteTask = createAsyncThunk(
    "tasks/fetchDeleteTask",
    async function (id, { rejectWithValue, dispatch }) {
        try {
            
            dispatch(removeTask({ id: id }));

            const url = `${rootUrl}task-delete/${id}`;
            const response = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken"),
                },
            });

            if (!response.ok) {
                throw new Error("List tasks. Server Error!");
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const fetchCreateTask = createAsyncThunk(
    "tasks/fetchCreateTask",
    async function (title, { rejectWithValue, dispatch }) {
        try {

            dispatch(addTask({ id: undefined, title: title }));

            const url = `${rootUrl}task-create/`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken"),
                },
                body: JSON.stringify({ title: title }),
            });

            if (!response.ok) {
                throw new Error("Create task. Server Error!");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);
export const fetchUpdateTask = createAsyncThunk(
    "tasks/fetchUpdateTask",
    async function (item, { rejectWithValue, dispatch}) {
        try {
            const {id, title, completed} = item
            console.log({id, title, completed});

            dispatch(updateTask({ id: id, title: title, completed: completed }));

            const url = `${rootUrl}task-update/${id}`;
            const response = await fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                    "X-CSRFToken": getCookie("csrftoken"),
                },
                body: JSON.stringify({
                    title: title,
                    completed: completed
                }),
            });

            if (!response.ok) {
                throw new Error("Update task. Server Error!");
            }

            const data = await response.json();
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const setError = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};
const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,

    reducers: {
        addTask(state, action) {
            state.tasks.unshift({
                id: action.payload.id,
                title: action.payload.title,
                completed: false,
            });
        },
        updateTask(state, action) {
            const targetTask = state.tasks.find(
                (task) => task.id === action.payload.id
            );
            targetTask.title = action.payload.title;
            targetTask.completed = action.payload.completed;
        },
        removeTask(state, action) {

            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload.id
            );
        },
        toggleComplete(state, action) {
            const targetTask = state.tasks.find(
                (task) => task.id === action.payload.id
            );
            targetTask.completed = !targetTask.completed;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchTasks.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchTasks.fulfilled, (state, action) => {
            state.loading = false;
            state.tasks = action.payload;
        });

        builder.addCase(fetchCreateTask.fulfilled, (state, action) => {
            state.loading = false;
            const targetTask = state.tasks.find(
                (task) => task.id === undefined
            );
            console.log('Server response:', action.payload);
            targetTask.id = action.payload.id;
        });
        // builder.addCase(fetchUpdateTask.fulfilled, (state, action) => {
        //     state.loading = false;
        //     const targetTask = state.tasks.find(
        //         (task) => task.id === action.payload.id
        //     );
        //     console.log(action.payload);
        //     console.log("fetchUpdateTask.fulfilled", targetTask);
        //     targetTask.title = action.payload.title;
        // });

        builder.addCase(fetchTasks.rejected, setError);
        builder.addCase(fetchDeleteTask.rejected, setError);
        builder.addCase(fetchCreateTask.rejected, setError);
        builder.addCase(fetchUpdateTask.rejected, setError);
    },
});

export const { addTask, updateTask, toggleComplete, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
