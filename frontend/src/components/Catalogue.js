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
                        <div className={catalogue.panelProp}>
                            <h3>COLOR</h3>
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
                        <div className={catalogue.panelProp}>
                            <h3>SIZE</h3>
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

                        <div className={catalogue.panelProp}>
                            <h3>BRAND</h3>
                            <div className={catalogue.checkboxContainer}>
                                <div>
                                    <input type="checkbox" id='checkbox-size-xl' name="brand-nike" value="nike" onClick={onClickHandler} />
                                    <label for="checkbox-nike">Nike</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-size-l' name="brand-adidas" value="adidas" onClick={onClickHandler} />
                                    <label for="checkbox-addidas">Adidas</label>
                                </div>
                                <div>
                                    <input type="checkbox" id='checkbox-size-M' name="brand-converse" value="converse" onClick={onClickHandler} />
                                    <label for="checkbox-white">converse</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className={catalogue.cardContainer}>
                    <div className={catalogue.card}>
                        <p className={catalogue.itemImg}>item image</p>
                        <h3 className={catalogue.itemName}>Nike Air Force 1</h3>
                        <p>$ 235.35</p>
                    </div>
                    <div className={catalogue.card}>
                        <p className={catalogue.itemImg}>item image</p>
                        <h3 className={catalogue.itemName}>Nike Air Force 1</h3>
                        <p>$ 235.35</p>
                    </div>
                    <div className={catalogue.card}>
                        <p className={catalogue.itemImg}>item image</p>
                        <h3 className={catalogue.itemName}>Nike Air Force 1</h3>
                        <p>$ 235.35</p>
                    </div>
                    <div className={catalogue.card}>
                        <p className={catalogue.itemImg}>item image</p>
                        <h3 className={catalogue.itemName}>Nike Air Force 1</h3>
                        <p>$ 235.35</p>
                    </div>
                    <div className={catalogue.card}>
                        <p className={catalogue.itemImg}>item image</p>
                        <h3 className={catalogue.itemName}>Nike Air Force 1</h3>
                        <p>$ 235.35</p>
                    </div>
                    <div className={catalogue.card}>
                        <p className={catalogue.itemImg}>item image</p>
                        <h3 className={catalogue.itemName}>Nike Air Force 1</h3>
                        <p>$ 235.35</p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Catalogue