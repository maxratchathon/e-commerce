import React from 'react';
import shoesBg from '../images/shoes-bg.jpg';
import menShop from '../images/men-shop.jpg';
import womenShop from '../images/women-shop.jpg';
import kidsShop from '../images/kids-shop.jpg';
import style from './Home.module.css';

const Home = () => {
    return (
        <>
            <div className={style.heroImage} style={{ backgroundImage: `url(${shoesBg})` }}>
                <a href='#' />
                <div className={style.heroText}>
                    <h1>Discount 20% For All Orders Over $2000</h1>
                    <h3>Use coupon code DISCOUNT20 </h3>
                    <h3>Use coupon DISCOUNT20</h3>
                </div>
            </div>

            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img className={style.shopImg} src={kidsShop} alt="Kids Shop" />
                    <h3>KIDS SHOES COLLECTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <a href='kids'>
                        <button className={style.shopBtn} type="button">SHOP KIDS</button>
                    </a>
                </div>
                <div className={style.card}>
                    <img className={style.shopImg} src={menShop} alt="Men Shop" />
                    <h3>MEN SHOES COLLECTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <a href='men'>
                        <button className={style.shopBtn} type="button">SHOP MENS</button>
                    </a>
                </div>
                <div className={style.card}>
                    <img className={style.shopImg} src={womenShop} alt="Women Shop" />
                    <h3>WOMEN SHOES COLLECTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <a href='women'>
                        <button className={style.shopBtn} type="button">SHOP WOMEN</button>
                    </a>
                </div>
            </div>

            <div className={style.shoesContainer}>
                <div className={style.shoesCard}>
                    <div className={style.imgCard} />
                    <h3 className={style.shoesName}>Nike air zoom pegasus 35</h3>
                    <p className={style.shoesPrice}>$ 425.50</p>
                </div>
                <div className={style.shoesCard}>
                    <div className={style.imgCard} />
                    <h3 className={style.shoesName}>Mix and match chuck taylor all star</h3>
                    <p className={style.shoesPrice}>$ 425.50</p>
                </div>
                <div className={style.shoesCard}>
                    <div className={style.imgCard} />
                    <h3 className={style.shoesName}>Geography class chuck taylor all star</h3>
                    <p className={style.shoesPrice}>$ 425.50</p>
                </div>
                <div className={style.shoesCard}>
                    <div className={style.imgCard} />
                    <h3 className={style.shoesName}>Geography class chuck taylor all star</h3>
                    <p className={style.shoesPrice}>$ 425.50</p>
                </div>
            </div>
        </>
    );
}

export default Home;
