import { createSlice } from "@reduxjs/toolkit";

const activeItemSlice = createSlice({
    name: "item",
    initialState: {
        task: { id: null, title: null, completed: false, editing: false },
    },
    reducers: {
        setIdToActiveItem(state, action) {
            state.task.id = action.payload.id
        },
        setTitleToActiveItem(state, action) {
            state.task.title = action.payload.title
        },
        toggleCompletedToActiveItem(state, action) {
            state.task.completed = action.payload.completed
        },
        toggleEditingToActiveItem(state, action) {
            state.task.editing = action.payload.editing
        }
    },
});

export const { setIdToActiveItem, setTitleToActiveItem, toggleCompletedToActiveItem, toggleEditingToActiveItem } = activeItemSlice.actions;

export default activeItemSlice.reducer;
