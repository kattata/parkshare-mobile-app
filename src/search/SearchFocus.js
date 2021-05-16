// import { useEffect, useState } from 'react';
import close from '../assets/x.svg';

const SearchFocus = ({ setDestinationOpen, searchResults, setChosenDestination, setSearchBarState, goToDestination }) => {

    const handleChooseDestination = (dest) => {
        const selectedDestination = {
            longitude: dest.longitude,
            latitude: dest.latitude
        }
        setChosenDestination(dest.label);
        setSearchBarState(3);
        setDestinationOpen(false);
        goToDestination(selectedDestination);
    }

    const handleClose = () => {
        setDestinationOpen(false);
        setSearchBarState(1);
    }

    return (
        <div className="search-focus bottom-slide-out">
            <span className="swipe-line"></span>
            <h2>Choose destination</h2>
            <img src={close} alt="letter x" className="close" onClick={handleClose} />
            <div className="results">
                {searchResults.map((result) => {
                    return (
                        <div className="result" key={result.latitude} onClick={() => handleChooseDestination(result)}>{result.label}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchFocus;