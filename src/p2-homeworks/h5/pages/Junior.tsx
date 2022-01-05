import React from "react";
// import s from './pages.module.css'
import HW7 from "../../h7/HW7";
import HW8 from "../../h8/HW8";
import HW9 from "../../h9/HW9";
import HW10 from "../../h10/HW10";
import HW11 from "../../h11/HW11";
import {useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {ThemesType} from "../../h12/bll/themeReducer";

export const Junior = () => {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.theme)
    return (
        <div className={theme}>
            <HW7/>
            <HW8/>
            <HW9 />
            <HW10/>
            <HW11/>
        </div>
    )
}