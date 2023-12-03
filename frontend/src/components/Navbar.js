import React from 'react'

import { AiOutlineSearch,AiOutlineShopping,AiOutlineUser } from "react-icons/ai";

const navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <a href='#'>
                    <h3 className='logo' >MAXSHOP</h3>

                </a>
            </div>
            <div className='navbar'>
                <a href='#'>Men</a>
                <a href='#'>Women</a>
            </div>
            <div className='navbar'>
                <a href='#'><AiOutlineSearch size={30}/></a>
                <a href='#'><AiOutlineShopping size={30}/></a>
                <a href='#'><AiOutlineUser size={30}/></a>
            </div>
        </div>

    )
}

export default navbar