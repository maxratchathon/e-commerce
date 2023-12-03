import React from 'react'
import Catalogue from '../components/Catalogue'
import Breadcrumb from '../components/Breadcrumb'
import style from './Kids.module.css'
import Footer from '../components/Footer'

const Kids = () => {
    const pageName = "Kids"
    return (
        <>
            <div className={style.pageBody}>
                <Breadcrumb />
                <Catalogue pageName={pageName} />

            </div>
            <Footer />
        </>
    )
}

export default Kids