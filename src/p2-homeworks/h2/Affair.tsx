import React from 'react'
import styles from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    id: number
    affair: string // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.id) }// need to fix
    return (
        <div className={styles.affairs}>
            <div className={styles.affair}>
                {props.affair}
            </div>

            <button className={styles.deleteBtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
