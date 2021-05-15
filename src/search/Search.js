import { useState, useEffect, useCallback } from 'react';
import './search.scss';
import Map from './Map';
import SearchFocus from './SearchFocus';
import axios from 'axios';
import SearchBar from './SearchBar';
import geo from '../assets/geolocate.svg';


const Search = () => {

    const [searchValue, setSearchValue] = useState("");
    const [destinationOpen, setDestinationOpen] = useState(false);

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const accessKey = 'c0eb1888cedfba2900c84577ae6a206a';
        const url = `http://api.positionstack.com/v1/forward?access_key=${accessKey}&query=${searchValue}`;

        axios.get(url)
            .then((res) => {
                console.log(res.data.data);
                setSearchResults(res.data.data)
            })

    }, [searchValue])

    const [searchBarState, setSearchBarState] = useState(1);
    const [chosenDestination, setChosenDestination] = useState({
        longitude: 0,
        latitude: 0
    });

    const [selectedDate, setSelectedDate] = useState({
        from: "Choose date",
        to: "Choose date"
    })


    return (
        <div className="search">
            <Map selectedDate={selectedDate} />
            <SearchBar searchValue={searchValue} setDestinationOpen={setDestinationOpen} setSearchValue={setSearchValue} searchBarState={searchBarState} setSearchBarState={setSearchBarState} chosenDestination={chosenDestination} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            {destinationOpen && <SearchFocus searchValue={searchValue} setDestinationOpen={setDestinationOpen} searchResults={searchResults} setChosenDestination={setChosenDestination} setSearchValue={setSearchValue} searchBarState={searchBarState} setSearchBarState={setSearchBarState} />
            }
            <img src={geo} alt="geolocate" className="geolocate-btn" />
        </div>
    );
}

export default Search;