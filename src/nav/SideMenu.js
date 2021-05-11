import avatar from '../assets/avatar.svg';
import close from '../assets/x.svg';

const SideMenu = ({ setMenuOpen, menuOpen }) => {
    return (
        <div className='side-menu'>
            <div className="header">
                <div className="content">
                    <div className="welcome-container">
                        <img src={avatar} alt="avatar" />
                        <p>Hi, Kasia!</p>
                    </div>
                    <img src={close} alt="letter x" onClick={() => setMenuOpen(false)} />
                </div>
            </div>

        </div>
    );
}

export default SideMenu;