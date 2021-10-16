import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
    // add paths
}

function Header() {
    return (
        <div className={s.headerWrapper}>
            <NavLink to={PATH.PRE_JUNIOR} activeClassName={s.activeLink}>Pre-Junior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.activeLink}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.activeLink}>Junior Plus</NavLink>
            {/*// add NavLinks*/}
        </div>
    )
}

export default Header
