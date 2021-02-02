import React from 'react';
import PropTypes from 'prop-types';

const Input = React.forwardRef((props, ref) => (
    <div className="input-block">
        <input ref={ref} onChange={props.inputChange} value={props.inputValue} type="text" name="input" placeholder="ToDo" />
        <input onChange={props.dateChange} value={props.dateValue} id="date" type="date" />
        <button onClick={props.addTask} className="input-block__add">Add</button>
        <button onClick={props.deleteAll} className="input-block__delete">Delete All</button>
    </div>
));

Input.propTypes = {
    inputValue: PropTypes.string,
    dateValue: PropTypes.string,
    inputChange: PropTypes.func,
    dateChange: PropTypes.func,
    addTask: PropTypes.func,
    deleteAll: PropTypes.func
}

export default Input;
