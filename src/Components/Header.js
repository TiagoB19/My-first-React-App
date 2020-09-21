import React from 'react';
import Navigation from '../Navigation';


const Header = () => {
    return (
        <header className="border-double border-b font-bold p-3 flex justify-between items-center">
            <span className="font-bold">App Name</span>
            <Navigation/>
        </header>
    );
}

export default Header;