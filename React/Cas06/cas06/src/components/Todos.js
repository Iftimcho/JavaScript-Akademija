import React from 'react';
import PropTypes from 'prop-types';

export function Todos(props) {
    return(
        <div id="todos">
            <ol>
                {
                    props.todoList.map((todo,i) => {
                        return(
                            <li key={i} className={todo.done ? "marked-done" : ""}>
                                <span>{todo.todoText}</span>
                                {/* <input type="checkbox" value={todo.done} 
                                checked={todo.done} onChange={() => {props.markTodoAsDone(todo)}} /> */

                                }
                                <button onClick={() => {props.deleteItem(todo)}}>
                                    Delete
                                </button>
                            </li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

Todos.propTypes = {
    todoList: PropTypes.array.isRequired,
    markTodoAsDone: PropTypes.func,
    deleteItem: PropTypes.func
}