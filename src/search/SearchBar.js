import search from '../assets/search-grey.svg';
import filters from '../assets/sliders.svg';
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

    return (
        <div className={searchBarState === 1 || searchBarState === 3 ? 'search-box' : 'search-box focus'}>
            <form onSubmit={handleSubmit} onFocus={handleFocus} className="search-bar">
                <img src={search} alt="magnifying glass" />
                <input type="text" placeholder="Where do you want to park?" value={searchValue} onChange={handleInputChange} />
                {searchBarState === 3 && (<img src={filters} alt="filters" />)}
            </form>
            {searchBarState === 3 && (
                <>
                    <div className="dates">
                        <button>
                            <h5>From</h5>
                            <h4>Choose Date</h4>
                        </button>
                        <button>
                            <h5>To</h5>
                            <h4>Choose Date</h4>
                        </button>
                    </div>
                    <div className="vehicles">
                        <button>
                            <h4>Choose vehicle(s)</h4>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default SearchBar;