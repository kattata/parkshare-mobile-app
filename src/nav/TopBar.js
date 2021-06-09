import "./nav.scss";
import burger from '../assets/menu.svg';
import help from '../assets/help-circle.svg';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SideMenu from './SideMenu';
import HelpModal from "./HelpModal";

const TopBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);

    const showHelp = () => {
        setHelpOpen(!helpOpen);
    }
    const location = useLocation();
    if (location.pathname === '/bookings') {
        console.log('heyyy');
    }

    return (
        <>
            <div className={location.pathname === '/' ? 'top-bar big' : 'top-bar'}>
                <div className="container">
                    <img src={burger} alt="burger menu" className="burger" onClick={() => setMenuOpen(!menuOpen)} />
                    <h1>Search</h1>
                    <div className="help-container" onClick={showHelp}>
                        <img src={help} alt="info circle" className="help" />
                    </div>
                </div>
            </div>
            <SideMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
            <HelpModal setHelpOpen={setHelpOpen} helpOpen={helpOpen} />
        </>
    );
}

export default TopBar;