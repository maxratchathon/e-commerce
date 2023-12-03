import React from 'react'
import Catalogue from '../components/Catalogue'
import Breadcrumb from '../components/Breadcrumb'
import style from './Kids.module.css'

const Kids = () => {
    const pageName = "Kids"
    return (
        <>
            <div className={style.pageBody}>
                <Breadcrumb />
                <Catalogue pageName={pageName} />
                
            </div>
        </>
    )
}

export default Kids