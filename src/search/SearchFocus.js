// import { useEffect, useState } from 'react';
import close from '../assets/x.svg';

const SearchFocus = ({ setDestinationOpen, searchResults, setChosenDestination, searchBarState, setSearchBarState, goToDestination }) => {

    const handleChooseDestination = (e) => {
        setChosenDestination({
            longitude: e.target.dataset.longitude,
            latitude: e.target.dataset.latitude
        });
        setSearchBarState(3);
        console.log(searchBarState);
        setDestinationOpen(false);
        // goToDestination();
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
                        <div className="result" key={result.latitude} data-latitude={result.latitude} data-longitude={result.longitude} onClick={handleChooseDestination}>{result.label}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchFocus;