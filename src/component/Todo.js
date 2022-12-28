import React, {useState} from 'react';

//CSS
import styles from "./Todo.module.scss";


const Todo = (props) => {

    // const [checked, setChecked] = useState([]);

    const [editing, setEditing] = useState(false);

    // const checkHandler = (e) => {
    //
    //     if (setChecked(e.target.checked)) {
    //
    //         const updateList = [...checked, setChecked];
    //
    //     } else {
    //
    //     }
    // }

    const editHandler = (e) => {
        e.preventDefault()

        setEditing(true);
    }

    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    return (
        <div className={styles.containerTask}>
            <li>
                <input type="checkbox"/>
                <label>{props.name}</label>
                <div className={styles.taskBTN} style={viewMode}>
                    <button onClick={editHandler} >Edit</button>
                    <button onClick={props.data}>Delete</button>
                </div>
                <input type="text" value={props.name} onChange={(e) => props.inputUpdate(e.target.value)} style={editMode} className={styles.editInput} placeholder="Wanna change it ...?" />
            </li>
        </div>
    );
};

export default Todo;