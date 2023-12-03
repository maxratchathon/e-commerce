import React from 'react'
import style from './Catalogue.module.css'

const Catalogue = ({ pageName }) => {
    return (
        <>

            <div className={style.pageName}>
                {pageName}
            </div>
        </>
    )
}

export default Catalogue