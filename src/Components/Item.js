import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
    return (
        <li>
            <div className="list-item__left">
                <div className="checkbox">
                    <input
                        onChange={props.onCompleteTask}
                        checked={props.item.complete}
                        className="custom-checkbox"
                        type="checkbox"
                        id={"item-" + props.index}
                        name={"item-" + props.index}
                        value={props.item.text}
                    />
                    <label htmlFor={"item-" + props.index} style={(props.item.complete) ? { textDecoration: 'line-through' } : null}>{props.index + 1}. {props.item.text}</label>
                </div>
                {/* <input onClick={props.onCompleteTask} type="checkbox" defaultChecked={(props.item.complete) ? "checked" : null} /> */}
                {/* <p style={(props.item.complete) ? { textDecoration: 'line-through' } : null}>{props.index + 1}. {props.item.text}</p> */}
            </div>
            <div className="list-item__right">
                <strong>{props.item.date}</strong>
                <button className="item-edit" onClick={props.onEditTask}></button>
                <button className="item-delete" onClick={props.onDeleteTask}></button>
            </div>
        </li>
    )
}

Item.propTypes = {
    index: PropTypes.number,
    item: PropTypes.object,
    onCompleteTask: PropTypes.func,
    onDeleteTask: PropTypes.func,
}

export default Item;