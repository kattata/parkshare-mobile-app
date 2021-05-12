import search from '../assets/search-grey.svg';
import { useState } from 'react';

const SearchBar = ({ searchValue, setDestinationOpen, setSearchValue, searchBarState, setSearchBarState }) => {

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleFocus = () => {
        setDestinationOpen(true);
        setSearchBarState(2);
    }

    const handleClassName = () => {
        if (searchBarState === 1) {
            return 'search-bar';
        } else if (searchBarState === 2) {
            return 'search-bar focus';
        } else if (searchBarState === 3) {
            return 'search-bar';
        }
    }

    return (
        <form onSubmit={handleSubmit} className={searchBarState === 1 || searchBarState === 3 ? 'search-bar' : 'search-bar focus'} onFocus={handleFocus}>
            <img src={search} alt="magnifying glass" />
            <input type="text" placeholder="Where do you want to park?" value={searchValue} onChange={handleInputChange} />
            {searchBarState === 3 && (
                <p>HIIIDSA J</p>
            )}
        </form>
    );
}

export default SearchBar;