import burger from '../assets/menu.svg';
import "./nav.scss";

const TopBar = () => {
    return (
        <div className="top-bar">
            <img src={burger} alt="burger menu" />
        </div>
    );
}

export default TopBar;