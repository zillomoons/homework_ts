import React, {ChangeEvent, FocusEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<boolean>(false) // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value.trim();
        if (trimmedName) {
            setName(trimmedName)
            error && setError(false)
        } else {
            name && setName('')
            setError(true)
        }
        // need to fix
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`) // need to fix
        setName('')
    }
    const addUserWithEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        // error && setError(false);
        if (e.key === 'Enter') {
            addUser()
        }
    }
    // const clearError = (e: FocusEvent<HTMLInputElement>) => setError(false);

    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            addUserWithEnter={addUserWithEnter}
            totalUsers={totalUsers}
            // clearError={clearError}
        />
    )
}

export default GreetingContainer
