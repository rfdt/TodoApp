import {addTodosAC, changeCurrentTabAC, updateNewTodoTextAC} from "./headerReducer";
import Header from "./Header";
import connect from "react-redux/lib/connect/connect";

const mapStateToProps = (state) => {
    return {
        newTodoText: state.header.newTodoText,
        currentTab: state.header.currentTab,
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewTodoText: (text) => {
            let action = updateNewTodoTextAC(text);
            dispatch(action);
        },
        AddTodos: () => {
            dispatch(addTodosAC());
        },
        changeCurrentTab:(tab) => {
            let action = changeCurrentTabAC(tab);
            dispatch(action);
        }
    }
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;