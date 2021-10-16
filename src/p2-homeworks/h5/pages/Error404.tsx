import React from 'react'
import s from './pages.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <div className={s.number404}>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
        </div>
    )
}

export default Error404
