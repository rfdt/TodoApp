
const UPDATE_NEW_TODO_TEXT = 'UPDATE_NEW_TODO_TEXT';
const ADD_TODOS = 'ADD_TODOS';
const CHANGE_TODO_COMPLETED = 'CHANGE_TODO_COMPLETED';
const DELETE_TODO = 'DELETE_TODO';
const CHANGE_CURRENT_TAB = 'CHANGE_CURRENT_TAB';

let initalstate = {
    currentTab: 'All',
    newTodoText: '',
    todos:[],
    completedTodos:[],
    nonCompletedTodos:[],
};


const headerReducer = (state = initalstate, action) => {
    let copyState;
    switch (action.type) {
        case UPDATE_NEW_TODO_TEXT:
            copyState = {...state};
            copyState.newTodoText = action.text;
            return copyState;
        case ADD_TODOS:
            copyState = {...state};
            let newTodos = {
                text: copyState.newTodoText,
                completed: false,
            }
            copyState.todos = [...state.todos, newTodos];
            copyState.newTodoText = '';
            copyState.nonCompletedTodos = copyState.todos.filter((todos)=>{return ((todos.completed === false) ? true : false )});
            return copyState;
        case CHANGE_TODO_COMPLETED:
            copyState = {...state};
            copyState.todos = [...state.todos]
            copyState.todos[action.id].completed = !copyState.todos[action.id].completed;
            copyState.completedTodos = copyState.todos.filter((todos)=>{return ((todos.completed) ? true : false )});
            copyState.nonCompletedTodos = copyState.todos.filter((todos)=>{return ((todos.completed === false) ? true : false )});
            return copyState;
        case DELETE_TODO:
            copyState = {...state};
            copyState.todos = [...state.todos]
            copyState.todos.splice(action.id, 1);
            copyState.completedTodos = copyState.todos.filter((todos)=>{return ((todos.completed) ? true : false )});
            copyState.nonCompletedTodos = copyState.todos.filter((todos)=>{return ((todos.completed === false) ? true : false )});
            return copyState;
        case CHANGE_CURRENT_TAB:
            copyState = {...state}
            copyState.currentTab = action.tab;
            return copyState;
        default:
            return state;
    }

};

export const changeCurrentTabAC = (tab) => ({type:CHANGE_CURRENT_TAB, tab:tab});
export const deleteTodoAC = (id) => ({type: DELETE_TODO, id:id});
export const updateNewTodoTextAC = (text) => ({type: UPDATE_NEW_TODO_TEXT, text:text});
export const addTodosAC = () => ({type: ADD_TODOS});
export const changeTodoCompletedAC = (id) => ({type: CHANGE_TODO_COMPLETED, id:id});

export default  headerReducer;