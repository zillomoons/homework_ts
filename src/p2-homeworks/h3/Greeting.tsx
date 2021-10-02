import React, { ChangeEvent, FocusEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    clearError: (e: FocusEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, clearError} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.inputBorder // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onFocus={clearError}/>
            <button className={s.addBtn} onClick={addUser}>add</button>
            <div className={s.errorMessage}>{error}</div>
            <span>Total count of users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
