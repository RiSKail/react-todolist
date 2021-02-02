import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export default function List(props) {
    let listItems = <b>None</b>;
    if (props.list.length !== 0) {
        listItems = props.list.map((item, index) => (
            <Item
                key={index}
                item={item}
                index={index}
                onDeleteTask={props.onDeleteTask.bind(this, index)}
                onCompleteTask={props.onCompleteTask.bind(this, index)}
                onEditTask={props.onEditTask.bind(this, index)}
            />
        ));
    }

    return (
        <ul className="list">
            {listItems}
        </ul>
    );
}

List.propTypes = {
    list: PropTypes.array,
    onDeleteTask: PropTypes.func,
    onCompleteTask: PropTypes.func
}