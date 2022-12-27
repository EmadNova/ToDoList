import React, {useState} from 'react';

//CSS
import styles from "./List.module.scss";
import Todo from "./Todo";


const List = () => {

    const [input, setInput] = useState("");

    const [task, setTask] = useState([]);

    const changeHandler = (event) => {
        setInput(event.target.value)
    }

    const clickHandler = (e) => {
        e.preventDefault();

        if (input.length === 0) {
            alert("Write something !")
        } else {
            setTask(newTask => [...newTask, input])
        }

        setInput("");
    }

    const onDelete = (task, e) => {

        console.log(setTask)

        e.preventDefault();

        console.log(task)

        setTask(task.filter(deleteTask => task !== task));

    }

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>My to do list</h1>
            </div>
            <form>
                <div className={styles.addNew}>
                    <h2>Add anything you want to do</h2>
                    <input name="task" value={input} type="text" placeholder="write just here..."
                           onChange={changeHandler}/>
                    <button onClick={clickHandler} type="submit">Add</button>
                </div>
                <div className={styles.task}>
                    <h2>You have 4 tasks remaining</h2>
                    <ul className={styles.newTask}>
                        {task.map(newList => <Todo key={newList} name={newList} data={onDelete} />)}
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default List;