import React, {useState} from 'react';

//CSS
import styles from "./List.module.scss";
import Todo from "./Todo";


const List = () => {

    const [input, setInput] = useState("");

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>My to do list</h1>
            </div>
            <div className={styles.addNew}>
                <h2>Add anything you want to do</h2>
                <input type="text" value={input} placeholder="write just here..." onChange={changeHandler}/>
                <button>Add</button>
            </div>
            <div className={styles.task}>
                <h2>You have 3 tasks remaining</h2>
                <ul className={styles.newTask}>
                    <Todo name="test1" />
                    <Todo name="test2"/>
                    <Todo name="test3"/>
                </ul>
            </div>
        </div>
    );
};

export default List;