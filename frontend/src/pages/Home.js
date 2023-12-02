import React from 'react'
import shoesBg from '../images/shoes-bg.jpg'

const Home = () => {
    return (
        <>
            <div className='hero-image' style={{ backgroundImage: `url(${shoesBg})` }}>
                <div className='hero-text'>
                    <h1>Discount 20% For All Orders Over $2000</h1>
                    <h3>Use coupon codeDISCOUNT20 </h3>
                    <h3>Use coupon DISCOUNT20</h3>
                </div>
            </div>

            <div className="card-container">
                <div>
                    <div className="img-card" />
                    <h3>MEN SHOES COLLECTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <button className='shop-btn' type="button">SHOP KIDS</button>
                </div>
                <div>
                    <div className="img-card" />
                    <h3>WOMEN SHOES COLLECTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <button className='shop-btn' type="button">SHOP MENS</button>
                </div>
                <div>
                    <div className="img-card" />
                    <h3>MEN SHOES COLLECTION</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <button className='shop-btn' type="button">SHOP WOMEN</button>
                </div>
            </div>

            <div className="shoes-container">
                <div className='shoes-card'>
                    <div className="img-card" />
                    <h3 className='shoes-name'>Nike air zoom pegasus 35</h3>
                    <p className='shoes-price'>$ 425.50</p>
                </div>
                <div className='shoes-card'>
                    <div className="img-card" />
                    <h3 className='shoes-name'>Mix and match chuck taylor all star</h3>
                    <p className='shoes-price'>$ 425.50</p>
                </div>
                <div className='shoes-card'>
                    <div className="img-card" />
                    <h3 className='shoes-name'> Geography class chuck taylor all star</h3>
                    <p className='shoes-price'>$ 425.50</p>
                </div>
                <div className='shoes-card'>
                    <div className="img-card" />
                    <h3 className='shoes-name'> Geography class chuck taylor all star</h3>
                    <p className='shoes-price'>$ 425.50</p>
                </div>
            </div>

            <div className="footer">
                <p>[logo]</p>
                <p>[logo]</p>
                <p>[logo]</p>
            </div>
        </>
    )
}

export default Home