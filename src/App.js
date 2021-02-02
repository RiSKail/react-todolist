import React, { Component, Fragment } from 'react';
import './Styles/index.css';
import Header from './Components/Header';
import Main from './Components/Pages/Main';
import Notes from './Components/Pages/Notes';
import { Route, Switch, Redirect } from 'react-router-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            dateValue: '',
            list: [],
            showClock: false
        };

        this.inputRef = React.createRef();
    }

    inputChangeHandler = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    dateChangeHandler = (event) => {
        this.setState({ dateValue: event.target.value });
    }

    addTaskHandler = (event) => {
        if (this.state.inputValue !== "") {
            if (this.state.dateValue !== "") {
                this.setState((prevState) => {
                    return {
                        list: [...prevState.list, {
                            text: prevState.inputValue,
                            date: prevState.dateValue,
                            complete: false
                        }]
                    };
                });
            } else {
                alert('Date is empty');
            }
        } else {
            alert('Input is empty');
        }

        event.preventDefault();
    }

    deleteTaskHandler = (id) => {
        this.setState((prevState) => {
            return {
                list: prevState.list.filter((item, index) => id !== index)
            };
        });
    }

    editTaskHandler = (id) => {
        const str = prompt("Edit:", this.state.list[id].text);
        if (str !== null)
            this.setState((prevState) => {
                prevState.list[id].text = str;
                return {
                    list: prevState.list
                };
            });
    }

    deleteAllHandler = () => {
        if (this.state.list.length !== 0)
            this.setState({
                list: []
            });
    }

    completeTaskHandler = (id) => {
        this.setState((prevState) => {
            return {
                list: prevState.list.map((item, index) => {
                    if (index === id) {
                        const obj = { ...item };
                        obj.complete = !obj.complete;
                        return obj;
                    } else {
                        return item;
                    }
                })
            };
        });
    }

    showClockHandler = () => {
        this.setState((prevState) => {
            return {
                showClock: !prevState.showClock
            };
        });

    }

    componentDidMount() {
        //this.inputRef.current.focus();
    }

    render() {
        return (
            <Fragment>
                <Header />
                <div className="wrapper">
                    <Switch>
                        <Route path="/" render={() => <Main
                            onShowClock={this.showClockHandler}
                            state={this.state}
                            inputRef={this.inputRef}
                            inputChange={this.inputChangeHandler}
                            inputValue={this.state.inputValue}
                            dateChange={this.dateChangeHandler}
                            dateValue={this.state.dateValue}
                            addTask={this.addTaskHandler}
                            deleteAll={this.deleteAllHandler}
                            onDeleteTask={this.deleteTaskHandler}
                            onCompleteTask={this.completeTaskHandler}
                            onEditTask={this.editTaskHandler}
                        />} exact />
                        <Route path="/notes" render={() => <Notes />} exact />
                        <Redirect to="/" />
                    </Switch>

                    {/* <h1>ToDoList <button onClick={this.showClockHandler} className={(this.state.showClock) ? "clock-btn__active" : "clock-btn"}></button></h1>
                    <Suspense fallback={<div>Загрузка...</div>}>
                        {clock}
                    </Suspense>
                    <Input
                        ref={this.inputRef}
                        inputChange={this.inputChangeHandler}
                        inputValue={this.state.inputValue}
                        dateChange={this.dateChangeHandler}
                        dateValue={this.state.dateValue}
                        addTask={this.addTaskHandler}
                        deleteAll={this.deleteAllHandler}
                    />
                    <List list={this.state.list} onDeleteTask={this.deleteTaskHandler} onCompleteTask={this.completeTaskHandler} onEditTask={this.editTaskHandler} /> */}
                </div>
            </Fragment>
        );
    }
}