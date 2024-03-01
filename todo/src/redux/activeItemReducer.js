const defaultActiveItem = {
    id: null,
    title: "",
    isComplated: false,
    isEditing: false,
};

const ADD_TITLE = 'ADD_TITLE'
const SET_EDITING_STATUS = 'SET_EDITING_STATUS'

export function activeItemReducer(state = defaultActiveItem, action) {
    switch (action.type) {
        case ADD_TITLE:
            return { ...state, title: action.payload };
        case SET_EDITING_STATUS:
            return { ...state, isEditing: action.payload };
        default:
            return state;
    }
}

export const addTitleAction = (payload) => ({type: ADD_TITLE, payload})
export const setEditingStatusAction = (payload) => ({type: SET_EDITING_STATUS, payload})