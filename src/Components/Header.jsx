import React from 'react';
import '../index.css';
import { BsMoon, BsBrightnessLow } from 'react-icons/bs'

const Header = ({ toggleMode, isDark }) => {
    return (
        <header>
            <div>
                <h1 className='text-2xl'>Where in the world?</h1>
                <button onClick={toggleMode}>
                    {isDark ? <BsBrightnessLow className="mr-2" /> : <BsMoon className="mr-2" />}
                    {isDark ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        </header>
    )
};

export default Header