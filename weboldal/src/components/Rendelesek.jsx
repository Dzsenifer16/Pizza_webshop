import React, { useContext, useState } from 'react';
import Kosartartalma from './Kosartartalma';

function Rendeles() {
    const [activeItem, setActiveItem] = useState(null);
    const { cartItems, TermekEltavolitasa } = useContext(Kosartartalma);
    const [vasarlo,setVasarlo]=useState({
        nev: '',
        email: '',
        cim: ''
    });
    const[uzenet,setUzenet]=useState('');

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.quantity * 1500), 0);
    };

    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setVasarlo((prevState)=>({ ...prevState, ...{[name]:value}}));
    }


    const handleMouseEnter = (index) => {
        setActiveItem(index);
    };

    const handleMouseLeave = () => {
        setActiveItem(null);
    };


    const handleRendelesLead=async()=>{
        if(!vasarlo.nev || !vasarlo.email || !vasarlo.cim){
            setUzenet('Minden mezőt ki kell tölteni!');
            return;
        }
    }

    const rendelesAdatok={
        vasarlo,
        termekek: cartItems,
        osszeg: calculateTotal()
    };
/*
    try{
        const response = await fetch('http://localhost:5000/api/rendeles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rendelesAdatok)
        });

        if(response.ok){
            setUzenet('Rendelés sikeresen leadva!');
        }
        else{
            setUzenet('Hiba történt a rendelés során!');
        }
    }catch(error){
        setUzenet('Szerverhiba! Próbálja meg később!');
    };

*/


    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>

            <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', marginTop: '20px' }}>
                <h2>Kosár tartalma</h2>

                <h3>Termékek:</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {cartItems.map((item, index) => (
                        <li
                            key={index}
                            className={`cart-item ${activeItem === index ? 'active' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={item.src} style={{ color: 'black' }} alt={item.alt} />
                            <span style={{ color: 'black' }}>{item.alt} - Ár: {(item.quantity * 1500)} HUF - Mennyiség: {item.quantity} db</span>
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

                <h3>Összesen:</h3>
                <p><strong>{calculateTotal()} HUF</strong></p>
                {/*Vevő adatai form ide kerül*/}
                <h3>Vásárló adatai</h3>
                <input type='text' name='nev' placeholder='Név' value={vasarlo.nev } onChange={handleInputChange} style={{width: '100%', padding: '8px', marginBottom: '10px'}}/>
                <input type='email' name='email' placeholder='Email' value={vasarlo.email} onChange={handleInputChange} style={{width: '100%', padding: '8px', marginBottom: '10px'}}/>
                <input type='text' name='cim' placeholder='Cim' value={vasarlo.cim} onChange={handleInputChange} style={{width: '100%', padding: '8px', marginBottom: '10px'}}/>
                <button onClick={handleRendelesLead} className='w3-button w3-green'>Rendelés leadása</button>
                {uzenet && <p style={{color: 'red', marginTop: '10 px'}}>{uzenet}</p>}
            </div>

            <div style={{ marginTop: '20px' }}>
            </div>
        </div>
    );
}



export default Rendeles; 