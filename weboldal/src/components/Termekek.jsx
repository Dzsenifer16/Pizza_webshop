import React, { useState,useEffect, useContext } from 'react';
import '../App.css';
import Kosartartalma from './Kosartartalma';
import kep from './kep.jpg';
import gettermekek from '../javascript/ajax'

function Gallery() {
    // Ajax (backend és frontend összekötve)
    useEffect(() => {
        async function fetchTermekek() {
            const data=await gettermekek();
            setTermekek(data); //termek beállitasa
           }
           fetchTermekek();
    }, []);

    const[termekek,setTermekek]=useState([]); //Lista
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedAlt, setSelectedAlt] = useState('');
    const { KosarbaHelyez } = useContext(Kosartartalma);

    const onClick = (e) => {
        const modal = document.getElementById('termeknagyban');
        setSelectedImage(e.target.src);
        setSelectedAlt(e.target.alt);
        modal.style.display = 'block';
    };

    
    const handleCloseModal = () => {
        document.getElementById('termeknagyban').style.display='none';
    };

    const KosarbaRak = () => {
        KosarbaHelyez({ src: selectedImage, alt: selectedAlt });
        handleCloseModal();
    };





    return (
        <div>
            {/*A termék megjenenítése a kép rákantíttására*/}
            <div id="termeknagyban" className="w3-modal w3-black" style={{ paddingTop: 0 }}>
                <span className="w3-button w3-black w3-xxlarge w3-display-topright" onClick={handleCloseModal}>×</span>
                <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                    <img id="img01" className="w3-image" src={selectedImage} alt={selectedAlt} />
                    <p id="caption">{selectedAlt}</p>
                    <button onClick={KosarbaRak} className="w3-button w3-red">Kosárba</button>
                </div>
            </div>
            <div className="w3-row-padding">
                <div className="w3-half">
                    <h1>Szalámis Pizza</h1>
                    <img src={kep} style={{ width: '100%' }} onClick={onClick} alt='Szalámis Pizza' title='Szalámis Pizza' />
                </div>
                <div className="w3-half">
                    {/*<img src={kep} style={{ width: '100%' }} onClick={onClick} alt='' />*/}
                </div>
            </div>
        <div className='w3-row-padding'>
            {termekek?.map((termek)=>
            <div key={termek.id} className='w3-half w3-margin-bottom'>
                <h2>{termek.nev}</h2>
                <p>{termek.leiras}</p>
                <p><strong>{termek.ar} Ft</strong></p>
                <img src={termek.kep} style={{width: '100%', cursor: 'pointer'}} onClick={()=>onClick(termek)}/>
            </div>
            )}
        </div>        
        </div>
    );
}



export default Gallery;
