import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import aja from '../javascript/ajax';

function Sidebar() {

    const w3_close = () => {
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("myOverlay").style.display = "none";
    };

    const w3_open = () => {
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("myOverlay").style.display = "block";
    };

    const handleTermekekClick = () => {
        aja();  // backend frontend összekötése
        w3_close();  // Close the sidebar
    };

    return (
        <>
            <nav
                className="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding"
                style={{ zIndex: 3, width: '300px', fontWeight: 'bold' }}
                id="mySidebar"
            >
                <br />
                <a
                    href="javascript:void(0)"
                    onClick={w3_close}
                    className="w3-button w3-hide-large w3-display-topleft"
                    style={{ width: '100%', fontSize: '22px' }}
                > <i className="fas fa-times" style={{ marginRight: '10px' }}></i>
                    Menüablak Bezárása
                </a>
                <div className="w3-container">
                    <h3 className="w3-padding-64">
                        <b>
                            Company
                            <br />
                            Name
                        </b>
                    </h3>
                </div>
                <div className="w3-bar-block">
                    <Link to="/" onClick={w3_close} className="w3-bar-item w3-button w3-hover-white">
                        Főmenü
                    </Link>
                    <Link to="/termekek" onClick={handleTermekekClick} className="w3-bar-item w3-button w3-hover-white">
                        Termékek
                    </Link>
                    <Link to="/rendeles" onClick={w3_close} className="w3-bar-item w3-button w3-hover-white">
                        Rendelés
                    </Link>
                    <Link to="/contact" onClick={w3_close} className="w3-bar-item w3-button w3-hover-white">
                        Elérhetőség
                    </Link>
                </div>
            </nav>

            <header className="w3-container w3-top w3-hide-large w3-red w3-xlarge w3-padding">
                <a href="javascript:void(0)" className="w3-button w3-red w3-margin-right" onClick={w3_open}>
                    ☰
                </a>
                <span>Company Name</span>
            </header>

            <div
                className="w3-overlay w3-hide-large"
                onClick={w3_close}
                style={{ cursor: 'pointer' }}
                title="close side menu"
                id="myOverlay"
            ></div>
        </>
    );
}

export default Sidebar;
