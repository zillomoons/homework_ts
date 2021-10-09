import React from 'react'
import styles from './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) }// need to fix
    const priorityClass = styles.priority + ' ' + styles[props.affair.priority]
    return (
        <div className={styles.affairs}>
            <div className={styles.affair}>{props.affair.name}</div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <button className={styles.deleteBtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
