import React from 'react';
import "./styles.css";

let Todo = (props) => {
    window.TodoProps = props;

    let changeTodoCompleted = () => {
        let id = props.id;
        props.changeTodoCompleted(id);
    };

    let deleteTodo = () => {
        let id = props.id;
        props.deleteTodo(id);
    };

    return(
        <div className='todo'>
            <div className={props.completed ? 'todotextdone' : 'todotext'} >
                {props.text}
            </div>
            <div className='todobuttons'>
                <input type='button' className='tododonebutton' value='&#10004;' onClick={changeTodoCompleted}/>
                <input type='button' className='tododeletebutton' value='&#10007;' onClick={deleteTodo}/>
            </div>
        </div>
    )
};

export default Todo;