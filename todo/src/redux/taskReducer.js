const defaultTasks = {
    tasks: [],
};

const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'

export function taskReducer(state = defaultTasks, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload]};
        case REMOVE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
        default:
            return state;
    }
}

export const addTaskAction = (payload) => ({type: ADD_TASK, payload})
export const removeTaskAction = (payload) => ({type: REMOVE_TASK, payload})