import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useState} from "react";
import {RequestsAPI} from "./api/api";
import s from './HW13.module.css'

export const HW13 = () => {
    return <>
        <h3>homework#13</h3>
        <Request />
    </>
}

const Request = () => {
    const [state, setState] = useState<any>(null)
    const [checked, setChecked] = useState(false)
    const onClickHandler = () => {
        RequestsAPI.createRequest(checked).then(res => {
            setState(res.data.errorText)
        }).catch((error:any)=>{
            error.response ? setState(error.response.data.errorText) : setState(error.message)
        })
    }
    return (
        <div>
            <SuperCheckbox checked={checked} onChange={(e)=> setChecked(e.target.checked)}/>
            <SuperButton onClick={onClickHandler}>Request</SuperButton>
            <div className={s.resBox}>{JSON.stringify(state)}</div>
        </div>
    )
}