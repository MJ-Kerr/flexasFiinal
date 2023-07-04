import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navBar.css';

const NavBar = () => {
    //this is the code for the toggle menu working
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar-container gradient__bg' id="navBar">
            <p className='scale-up-hor-center'>
                <a className='right ' href='#wtif'>🎧 DJ FLEXAS</a>
            </p>
            <div className='navbar-links'>
                <div className='navbar-links_container scale-up-hor-center'>
                    <p>
                        <a className='left' href='#streams'>Streams</a>
                    </p>
                    <p>
                        <a className='left' href='#pictures'>Pictures</a>
                    </p>
                    <p>
                        <a className='left' href='#discord'>Links</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NavBar