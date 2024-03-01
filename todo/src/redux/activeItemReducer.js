const defaultActiveItem = {
    id: null,
    title: "",
    isComplated: false,
    isEditing: false,
};

const ADD_TITLE = 'ADD_TITLE'
const ADD_IS_EDITING = 'ADD_IS_EDITING'

export function activeItemReducer(state = defaultActiveItem, action) {
    switch (action.type) {
        case ADD_TITLE:
            return { ...state, title: action.payload };
        case ADD_IS_EDITING:
            return { ...state, isEditing: action.payload };
        default:
            return state;
    }
}

export const addTitleAction = (payload) => ({type: ADD_TITLE, payload})
export const addIsEditingAction = (payload) => ({type: ADD_IS_EDITING, payload})