import React from "react";
import s from "./pages.module.css";
import HW12 from "../../h12/HW12";
import {HW13} from "../../h13/HW13";

export const JuniorPlus = ()=> {
    return (
        <div className={s.junior}>
            <HW12/>
            <HW13 />
        </div>
    )
}