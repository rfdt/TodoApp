import React from 'react';
import'./styles.css';
import logo from './IMG/Header/download.gif';

let Header = (props) => {
    let InputRef = React.createRef();

    let changeCurrentTab = (tab) => {
        props.changeCurrentTab(tab);
    };

    let currentTabAll = () => {
        let tab = 'All';
        changeCurrentTab(tab);
    };

    let currentTabCompleted = () => {
        let tab = 'Completed';
        changeCurrentTab(tab);
    };

    let currentTabUncompleted = () => {
        let tab = 'Uncompleted';
        changeCurrentTab(tab);
    };

    let updateNewTodoTextRef = () =>{
        let text = InputRef.current.value;
        props.updateNewTodoText(text);
    };

    let AddTodos = () => {
        if (props.newTodoText.length > 0){
            props.AddTodos();
        }
    }

    return(
        <div className='header'>
            <img src={logo} alt='logotodo' className={logo}/>
            <div className='headerdivwork'>
                <input type='text' ref={InputRef} className='todoinput' value={props.newTodoText} onChange={updateNewTodoTextRef} />
                <input type='button' className='addbutton' value='&#10148;' onClick={AddTodos} />
            </div>
            <div className='headerdivwork'>
                <input type='button' className={props.currentTab === 'All' ? 'activetab' : 'nonactivetab'} value='All' onClick={currentTabAll} />
                <input type='button' className={props.currentTab === 'Completed' ? 'activetab' : 'nonactivetab'} value='Completed' onClick={currentTabCompleted} />
                <input type='button' className={props.currentTab === 'Uncompleted' ? 'activetab' : 'nonactivetab'} value='Uncompleted' onClick={currentTabUncompleted} />
            </div>
        </div>
    )
}

export default Header;