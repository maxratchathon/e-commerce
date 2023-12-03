import React from 'react'
import style from './Footer.module.css'
import mastercardIcon from '../images/icon/mastercard.png'
import visaIcon from '../images/icon/visa.png'
import paypalIcon from '../images/icon/paypal.png'

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <img className={style.logo} src={mastercardIcon}/>
            <img className={style.logo} src={visaIcon}/>
            <img className={style.logo} src={paypalIcon}/>
        </div>
    )
}

export default Footer