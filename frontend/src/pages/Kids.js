import React from 'react'
import Catalogue from '../components/Catalogue'
import Breadcrumb from '../components/Breadcrumb'

const Kids = () => {
    const pageName = "Kids"
    return (
        <>
            <div>Kids</div>
            <Breadcrumb />
            <Catalogue pageName={pageName}/>
        </>
    )
}

export default Kids