import React from "react";
import "./styles.css";
import HeaderContainer from "./HeaderContainer";
import BodyContainer from "./BodyContainer";


let TodoApp = () => {
    return(
            <div className='mainwindows'>
                <HeaderContainer/>
                <BodyContainer/>
            </div>
    )
};

export default TodoApp;