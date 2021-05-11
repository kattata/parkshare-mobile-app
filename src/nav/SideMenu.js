import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.svg';
import close from '../assets/x.svg';
import logo from '../assets/parkshare-logo.png';
import signOut from '../assets/log-out.svg';

const SideMenu = ({ setMenuOpen, menuOpen }) => {


    return (
        <div className={menuOpen ? 'side-menu active' : 'side-menu'} >
            <div className="header">
                <div className="content">
                    <div className="welcome-container">
                        <img src={avatar} alt="avatar" />
                        <p>Hi, Kasia!</p>
                    </div>
                    <img src={close} alt="letter x" onClick={() => setMenuOpen(false)} />
                </div>
            </div>
            <div className="links">
                <div className="content">
                    <div className="link">
                        <Link to="#">
                            <p>Profile</p>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="#">
                            <p>Vehicles</p>
                        </Link>
                        <Link to="#">
                            <button className="secondary-btn">Add new</button>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="#">
                            <p>Payment methods</p>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="#">
                            <p>Rent out your own parking spots</p>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="#">
                            <p>How it works</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <img src={logo} alt="parkshare logo" className="logo" />
                <div className="sign-out">
                    <img src={signOut} alt="sign out" />
                    <p>Sign out</p>
                </div>
            </div>
        </div>
    );
}

export default SideMenu;