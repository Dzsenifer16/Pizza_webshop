import React from 'react';

function Contact() {
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
            <h1>Lépj velünk kapcsolatba!</h1>

            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                <h2>Elérhetőségeink:</h2>
                <p><strong>Email:</strong> </p>
                <p><strong>Telefon:</strong> </p>
                <p><strong>Székhely:</strong></p>
            </div>
        </div>
    );
}

export default Contact;
