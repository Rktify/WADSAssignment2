import React from 'react'
import styles from "../styles/Row.module.css"
import {RiDeleteBin2Fill} from "react-icons/ri"

function List(props) {

    return (
        <div className={props.task.finished ? styles.rowdone:styles.row}  >
            <label className={styles.formcontrol}>
                <input type="checkbox" name="checkbox" onChange={() => props.finishTask(props.task.taskID)} />
            </label>
            {props.task.taskmessage}
            <div className = {styles.icons}>
                <RiDeleteBin2Fill onClick = {() => props.removeTask(props.task.taskID)}/>
            </div>
        </div>
    )
}

export default List