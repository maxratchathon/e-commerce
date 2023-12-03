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
                            <div className={catalogue.checkboxContainer}>
                                <div>
                                    <input type="checkbox" id='checkbox-white' name="color" value="white" onClick={onClickHandler} />
                                    <label for="checkbox-white">White</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-black' name="color" value="black" onClick={onClickHandler} />
                                    <label for="checkbox-white">Black</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-pink' name="color" value="pink" onClick={onClickHandler} />
                                    <label for="checkbox-white">Pink</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-red' name="color" value="red" onClick={onClickHandler} />
                                    <label for="checkbox-white">Red</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>SIZE</p>
                            <div className={catalogue.checkboxContainer}>
                                <div>
                                    <input type="checkbox" id='checkbox-size-xl' name="size-xl" value="xl" onClick={onClickHandler} />
                                    <label for="checkbox-white">XL</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-size-l' name="size-l" value="l" onClick={onClickHandler} />
                                    <label for="checkbox-white">L</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-size-M' name="size-m" value="m" onClick={onClickHandler} />
                                    <label for="checkbox-white">M</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-size-s' name="size-s" value="s" onClick={onClickHandler} />
                                    <label for="checkbox-white">S</label>
                                </div>
                            </div>
                        </div>

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