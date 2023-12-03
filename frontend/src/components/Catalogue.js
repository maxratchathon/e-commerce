import React from 'react'
import catalogue from './Catalogue.module.css'


const Catalogue = ({ pageName }) => {
    const onClickHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <>

            <div className={catalogue.pageName}>
                {pageName}
            </div>
            <div className={catalogue.catalogueContainer}>
                <div>
                    <div className={catalogue.panelContainer}>
                        <h3>SHOP BY</h3>
                        <div className={catalogue.panelColor}>
                            <p>COLOR</p>
                            <input type="checkbox" name="color" value="white" onClick={onClickHandler}/>
                            <input type="checkbox" name="color" value="black" onClick={onClickHandler} />
                            <input type="checkbox" name="color" value="pink" onClick={onClickHandler}/>
                            <input type="checkbox" name="color" value="red" onClick={onClickHandler} />
                        </div>
                        <p>SIZE</p>
                        <p>BRAND</p>
                    </div>
                </div>
                <div className={catalogue.cardContainer}>
                    <p className={catalogue.itemImg}>item image</p>
                    <p className={catalogue.itemImg}>item image</p>
                    <p className={catalogue.itemImg}>item image</p>
                    <p className={catalogue.itemImg}>item image</p>
                    <p className={catalogue.itemImg}>item image</p>
                    <p className={catalogue.itemImg}>item image</p>

                </div>
            </div>

        </>
    )
}

export default Catalogue