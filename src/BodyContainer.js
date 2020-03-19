import Body from "./Body";
import {changeTodoCompletedAC, deleteTodoAC} from "./headerReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return{
        todos: state.header.todos,
        completedTodos: state.header.completedTodos,
        nonCompletedTodos: state.header.nonCompletedTodos,
        currentTab: state.header.currentTab,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeTodoCompleted: (id) => {
            let action = changeTodoCompletedAC(id);
            dispatch(action);
        },
        deleteTodo: (id) => {
            let action = deleteTodoAC(id);
            dispatch(action);
        },
    }
}

const BodyContainer = connect(mapStateToProps,mapDispatchToProps)(Body);

export default BodyContainer;