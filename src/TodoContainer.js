import {connect} from "react-redux";
import Todo from "./Todo";
import {changeTodoCompletedAC} from "./headerReducer";


const mapStateToProps = (state) => {
    return{

    }

};

const mapDispatchToProps = (dispatch) =>{
    return{
        changeTodoCompleted: (id) => {
            let action = changeTodoCompletedAC(id);
            dispatch(action);
        }
    }
};

const TodoContainer = connect(mapStateToProps,mapDispatchToProps)(Todo);

export default TodoContainer;