import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './Kosartartalma';

function CartIcon() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const { cartItems, TermekEltavolitasa } = useContext(CartContext);

    const Lenyitás = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleMouseEnter = (index) => {
        setActiveItem(index);
    };

    const handleMouseLeave = () => {
        setActiveItem(null);
    };

    return (
        <>
            <div
                className='cart-icon'
                onClick={Lenyitás}
                role='button'
            >
                <i className='fas fa-shopping-cart cart-icon-icon'></i>
            </div>
            <div
                className={`cart-dropdown ${dropdownVisible ? 'show' : 'hide'}`}
                aria-label='Cart Dropdown'
            >
                {cartItems.length === 0 ? (
                    <p>A kosarad jelenleg üres.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li
                                key={index}
                                className={`cart-item ${activeItem === index ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img src={item.src} alt={item.alt} />
                                <span>{item.alt}</span> - <span>Mennyiség: {item.quantity}</span>
                                {activeItem === index && (
                                    <span
                                        className='remove-item'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            TermekEltavolitasa(index);
                                        }}
                                    >
                                        &times;
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                <Link to='/rendeles' className='checkout-button' onClick={Lenyitás}>
                    Kosár megtekintése
                </Link>
            </div>
        </>
    );
}

export default CartIcon;