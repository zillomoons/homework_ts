import React from 'react';
import preloader from '../../assets/images/Gear.gif'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, LoadingState} from "./bll/loadingReducer";

function HW10() {
    const state = useSelector<AppStoreType, LoadingState>(state=>state.loading);
    const dispatch = useDispatch();
    const loading = state.isLoading;

    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(()=> {
            dispatch(loadingAC(false));
        }, 2000)
    };

    return (
        <div>
            <hr/>
            <h3>homework#10</h3>

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={preloader} alt="preloader"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
