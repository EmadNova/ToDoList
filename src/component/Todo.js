import React, {useState} from 'react';

//CSS
import styles from "./Todo.module.scss";


const Todo = (props) => {


    const [editing, setEditing] = useState(false);

    const [isActive, setIsActive] = useState(true);


    const onCheck = (e) => {
        setIsActive(!e.target.checked)
    }


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

    const clickChange = (e) => {
        e.preventDefault()

        if (props.name.length === 0) {
            alert("Write something !")
        } else {
            setEditing(false);
        }


    }

    return (
        <div className={styles.containerTask}>
            <li>
                <input value={props.name} type="checkbox" onChange={onCheck}/>
                <label className={isActive ? "" : styles.labelActive}>{props.name}</label>
                <div className={styles.taskBTN} style={viewMode}>
                    <button onClick={editHandler}>Edit</button>
                    <button onClick={props.data}>Delete</button>
                </div>
                <input
                    type="text"
                    value={props.name}
                    onChange={(e) => props.inputUpdate(e.target.value)}
                    style={editMode}
                    className={styles.editInput}
                    placeholder="change ?"/>
                <button className={styles.editBTN} onClick={clickChange} style={editMode}>Change</button>
            </li>
        </div>
    );
};

export default Todo;