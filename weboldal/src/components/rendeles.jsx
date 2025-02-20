import React, { useContext } from 'react';
import CartContext from './CartContext';

function Rendeles() {
    const { cartItems } = useContext(CartContext);

    const calculateTotal = () => {
        // Assuming each item has a price attribute (for example purposes, it is hardcoded here)
        return cartItems.reduce((total, item) => total + (item.quantity * 29.99), 0).toFixed(2);
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been successfully placed. A confirmation email has been sent to your email address.</p>

            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                <h2>Order Summary</h2>
                <p><strong>Order Number:</strong> 123456789</p>
                <p><strong>Order Date:</strong> January 27, 2025</p>

                <h3>Items:</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.alt} - Mennyiség: {item.quantity} - Price: ${(item.quantity * 29.99).toFixed(2)}
                        </li>
                    ))}
                </ul>

                <h3>Total:</h3>
                <p><strong>${calculateTotal()}</strong></p>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h2>Contact Us</h2>
                <p>If you have any questions about your order, please contact our customer support.</p>
                <p>Email: support@example.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
        </div>
    );
}

export default Rendeles;