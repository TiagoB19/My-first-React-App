import React from 'react'
import {Link} from 'react-router-dom'

const NavigationMenu = (props) => {
    return (
        <div>
             <div className="py-3">
                 The menu
            </div>
                <ul>
                    <li>
                        <Link to="/" 
                              onClick={props.closeMenu} 
                              className="text-blue-500 py-3 border-t border-b block"
                              >Home</Link>  
                    </li>
                    <li>
                        <Link to="/about" 
                              onClick={props.closeMenu} 
                              className="text-blue-500 py-3 border-b block"
                              >About</Link>
                    </li>
                    <li>
                        <Link to="/products" 
                              onClick={props.closeMenu} 
                              className="text-blue-500 py-3 border-b block"
                              >Product</Link>
                    </li>
                </ul>
        </div>
    );
}

export default NavigationMenu;