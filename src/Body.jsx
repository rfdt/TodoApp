import React from 'react';
import "./styles.css";
import Todo from "./Todo";


let Body = (props) => {
    window.BodyProps = props;

    let todos = props.todos.map((todo,index) => <Todo key={index} id={index} text={todo.text} completed={todo.completed} changeTodoCompleted={props.changeTodoCompleted} deleteTodo={props.deleteTodo}/>);
    let completedTodos = props.completedTodos.map((todo,index) => <Todo key={index} id={index} text={todo.text} completed={todo.completed} changeTodoCompleted={props.changeTodoCompleted} deleteTodo={props.deleteTodo}/>);
    let nonCompletedTodos = props.nonCompletedTodos.map((todo,index) => <Todo key={index} id={index} text={todo.text} completed={todo.completed} changeTodoCompleted={props.changeTodoCompleted} deleteTodo={props.deleteTodo}/>);

    let switchTab = () => {
        switch (props.currentTab) {
            case "All":
                return todos;
            case "Completed":
                return completedTodos;
            case "Uncompleted":
                return nonCompletedTodos;
            default:
                return "Error";
        }
    }

    return(
        <div className='main'>
            {'Your ' + props.currentTab + ' Todos'}
            {switchTab()}
        </div>
    )
}

export default Body;