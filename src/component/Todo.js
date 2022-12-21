import React from 'react';

//CSS
import styles from "./Todo.module.scss";


const Todo = (props) => {
    return (
        <div className={styles.containerTask}>
            <li>
                <input type="checkbox" />
                <label>{props.name}</label>
                <div className={styles.taskBTN}>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </li>
        </div>
    );
};

export default Todo;