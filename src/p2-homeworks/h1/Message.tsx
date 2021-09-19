import React from 'react'
import styles from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = (props: PropsType) => {
    return (
        <div className={styles.messageWrapper}>
            <img src={props.avatar} alt="avatar"/>
            <div className={styles.message}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.text}>{props.message}</div>
                <div className={styles.time}>{props.time}</div>
            </div>

        </div>
    )
}



