import React from "react";
import s from './pages.module.css'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";

export const Junior = () => {
    return (
        <div className={s.junior}>
            <HW7/>
            <HW8/>
            <HW9 />
        </div>
    )
}