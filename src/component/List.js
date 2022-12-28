import React, {useState} from 'react';

//CSS
import styles from "./List.module.scss";
import Todo from "./Todo";


const List = () => {

    //States
    const [input, setInput] = useState("");

    const [task, setTask] = useState([]);


    // Helper Functions
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

    const onDelete = (e, value) => {

        e.preventDefault();

        setTask(task.filter(deleteTask => task[value] !== deleteTask));
    }

    const inputUpdate = (updatedInput, id) => {
        setTask(task.map((fixedInput, newID) => {
                if (newID === id) {
                    fixedInput = updatedInput
                }
                return fixedInput;
            })
        )
    }


    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h1>My to do list</h1>
            </div>
            <form>
                <div className={styles.addNew}>
                    <h2>Add anything you want to do</h2>
                    <input
                        name="task"
                        value={input}
                        type="text"
                        placeholder="write just here..."
                        onChange={changeHandler}/>
                    <button
                        onClick={clickHandler}
                        type="submit">Add</button>
                </div>
                <div className={styles.task}>
                    <h2>You have {task.length} tasks remaining</h2>
                    <ul className={styles.newTask}>
                        {task.map((newList, value) => <Todo key={value} name={newList}
                                                            inputUpdate={(e) => inputUpdate(e, value)}
                                                            data={(e) => onDelete(e, value)} checkData={task}/>)}
                    </ul>
                </div>
            </form>
        </div>
    );
};

export default List;