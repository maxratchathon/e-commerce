import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Catalogue from '../components/Catalogue'
import Footer from '../components/Footer'
import style from './Men.module.css'


const Men = ({pageName}) => {
    return (
        <>
            <div className={style.pageBody}>
                <Breadcrumb />
                <Catalogue pageName="MEN" />

            </div>
            <Footer />
        </>
    )
}

export default Men