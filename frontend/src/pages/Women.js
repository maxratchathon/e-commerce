import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Catalogue from '../components/Catalogue'
import Footer from '../components/Footer'
import style from './Women.module.css'

const Women = () => {
    return (
        <>
            <div className={style.pageBody}>
                <Breadcrumb />
                <Catalogue pageName="WOMEN" />

            </div>
            <Footer />
        </>

    )
}

export default Women