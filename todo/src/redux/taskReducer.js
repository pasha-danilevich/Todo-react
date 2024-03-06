const defaultTasks = {
    tasks: [],
};

const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const SET_COMPLETED = "SET_COMPLETED";
const SET_ALL_TASKS = "SET_ALL_TASKS";

export function taskReducer(state = defaultTasks, action) {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] };
        case SET_COMPLETED:
            const id = action.payload.id;
            const event = action.payload.event;
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === id ? { ...task, completed: event } : task
                ),
            };
            
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };


        case SET_ALL_TASKS:
            return { ...state, tasks: [...state.tasks, ...action.payload] };
        default:
            return state;
    }
}

export const addTaskAction = (payload) => ({ type: ADD_TASK, payload });
export const setCompleted = (payload) => ({ type: SET_COMPLETED, payload });
export const removeTaskAction = (payload) => ({ type: REMOVE_TASK, payload });

export const setAllTasks = (payload) => ({ type: SET_ALL_TASKS, payload });
