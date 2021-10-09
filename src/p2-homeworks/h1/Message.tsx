import React from 'react'
import styles from './Message.module.css'

type PropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message: React.FC<PropsType> = ({avatar, name, message, time}) => {
    return (
        <div className={styles.messageWrapper}>
            <img src={avatar} alt="avatar"/>
            <div className={styles.angle}></div>
            <div className={styles.message}>
                <div className={styles.name}>{name}</div>
                <div className={styles.text}>{message}</div>
                <div className={styles.time}>{time}</div>
            </div>

        </div>
    )
}



