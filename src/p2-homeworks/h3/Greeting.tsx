import React, {ChangeEvent, FocusEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
    clearError: (e: FocusEvent<HTMLInputElement>) => void
    addUserWithEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error,
        totalUsers, clearError, addUserWithEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.inputBorder // need to fix with (?:)

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={addUserWithEnter}
                   onBlur={addUser}
                   onFocus={clearError}/>
            <button className={s.addBtn} onClick={addUser}>add</button>
            <div className={s.errorMessage}>{error && 'Enter your name'}</div>
            <div>Total count of users: {totalUsers}</div>
        </div>
    )
}

export default Greeting
