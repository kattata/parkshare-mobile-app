import search from '../assets/search-grey.svg';
import activeSearch from '../assets/search-black.svg';
import calendar from '../assets/calendar-grey.svg';
import activeCalendar from '../assets/calendar-black.svg';
import heart from '../assets/heart-grey.svg';
import activeHeart from '../assets/heart-black.svg';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TabBar = ({ setTopBarState }) => {

    const [pathname, setPathname] = useState('/');
    const location = useLocation();

    useEffect(() => {
        setPathname(location.pathname);
    }, [location])

    return (
        <div className="tab-bar">
            <NavLink exact to="/">
                <img src={pathname === '/' ? activeSearch : search} alt="magnifying glass" />
            </NavLink>
            <NavLink to="/bookings">
                <img src={pathname === '/bookings' ? activeCalendar : calendar} alt="calendar" />
            </NavLink>
            <NavLink to="/favorites">
                <img src={pathname === '/favorites' ? activeHeart : heart} alt="heart" />
            </NavLink>
        </div>
    );
}

export default TabBar;