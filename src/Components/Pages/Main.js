import React, { Fragment, Suspense } from 'react';
import './../../Styles/index.css';
import List from './../List';
import Input from './../Input';
const Clock = React.lazy(() => import('./../Clock'));

const Main = (props) => {
    let clock = null;
    if (props.state.showClock)
        clock = <Clock text="Now" />

    return (
        <Fragment>
                <h1>ToDoList <button onClick={props.onShowClock} className={(props.state.showClock) ? "clock-btn__active" : "clock-btn"}></button></h1>
                <Suspense fallback={<div>Загрузка...</div>}>
                    {clock}
                </Suspense>
                <Input
                    ref={props.inputRef}
                    inputChange={props.inputChange}
                    inputValue={props.state.inputValue}
                    dateChange={props.dateChange}
                    dateValue={props.state.dateValue}
                    addTask={props.addTask}
                    deleteAll={props.deleteAll}
                />
                <List list={props.state.list} onDeleteTask={props.onDeleteTask} onCompleteTask={props.onCompleteTask} onEditTask={props.onEditTask} />
        </Fragment>
    );
}

export default Main;