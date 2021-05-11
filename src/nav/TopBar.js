import "./nav.scss";
import burger from '../assets/menu.svg';
import help from '../assets/help-circle.svg';
import { useState } from 'react';
import SideMenu from './SideMenu';

const TopBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="top-bar">
                <div className="container">
                    <img src={burger} alt="burger menu" className="burger" onClick={() => setMenuOpen(!menuOpen)} />
                    <h3>Search</h3>
                    <div className="help-container">
                        <img src={help} alt="info circle" className="help" />
                    </div>
                </div>
            </div>
            {menuOpen && <SideMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}
        </>
    );
}

export default TopBar;