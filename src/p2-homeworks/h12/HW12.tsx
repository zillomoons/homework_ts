import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemesType} from "./bll/themeReducer";

const themes = ['darkTheme', 'redTheme', 'someTheme', 'bubbleGumTheme', 'neutralTheme'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemesType>(state => state.theme.theme); // useSelector
    const dispatch = useDispatch();
    // useDispatch, onChangeCallback
    const onChangeCallback = (value: ThemesType) => {
        dispatch(changeThemeC(value))
    }

    return (
            <div className={`${s[theme]} ${s.container}`}>
                <hr/>
                <h3 className={s[theme + '-text']}>
                homework#12
            </h3>
                <SuperRadio
                    name='radio'
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeCallback}
                />

                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}

                <hr/>
            </div>

    );
}

export default HW12;
