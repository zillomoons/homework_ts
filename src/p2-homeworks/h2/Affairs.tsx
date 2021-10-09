import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (value: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all') // need to fix
    const setHigh = () => props.setFilter('high')
    const setMiddle = () => props.setFilter('middle')
    const setLow = () => props.setFilter('low')

    // const onAll = styles.filterBtn + ' ' + (props.filter === 'all' ? styles.activeBtn : '');
    // const onHigh = styles.filterBtn + ' ' + (props.filter === 'high' ? styles.activeBtn : '');
    // const onMiddle = styles.filterBtn + ' ' + (props.filter === 'middle' ? styles.activeBtn : '');
    // const onLow = styles.filterBtn + ' ' + (props.filter === 'low' ? styles.activeBtn : '');

    const setClass = (filter: FilterType) => {
        return styles.filterBtn + (props.filter === filter ? ' ' + styles.activeBtn : '' )
    }

    return (
        <div>

            {mappedAffairs}

            {/*<button className={onAll} onClick={setAll}>All</button>*/}
            {/*<button className={onHigh} onClick={setHigh}>High</button>*/}
            {/*<button className={onMiddle} onClick={setMiddle}>Middle</button>*/}
            {/*<button className={onLow} onClick={setLow}>Low</button>*/}

            <button className={setClass('all')} onClick={setAll}>All</button>
            <button className={setClass('high')} onClick={setHigh}>High</button>
            <button className={setClass('middle')} onClick={setMiddle}>Middle</button>
            <button className={setClass('low')} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
