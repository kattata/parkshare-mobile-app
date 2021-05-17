import { useState, useEffect } from 'react';
import './search.scss';
import Map from './Map';
import SearchFocus from './SearchFocus';
import axios from 'axios';
import SearchBar from './SearchBar';

const Search = () => {

    const [searchValue, setSearchValue] = useState("");
    const [destinationOpen, setDestinationOpen] = useState(false);

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const accessKey = 'c0eb1888cedfba2900c84577ae6a206a';
        const url = `https://api.positionstack.com/v1/forward?access_key=${accessKey}&query=${searchValue}`;

        axios.get(url)
            .then((res) => {
                console.log(res.data.data);
                setSearchResults(res.data.data)
            })

    }, [searchValue])

    const [searchBarState, setSearchBarState] = useState(1);
    const [chosenDestination, setChosenDestination] = useState("");

    const [selectedDate, setSelectedDate] = useState({
        from: "Choose date",
        to: "Choose date"
    })

    const [viewport, setViewport] = useState({
        latitude: 56.148,
        longitude: 10.213,
        zoom: 12,
        width: '100%',
        height: '100%'
    });

    const goToDestination = (destination) => {
        let lat = parseFloat(destination.latitude);
        let long = parseFloat(destination.longitude);
        setViewport({ ...viewport, latitude: lat, longitude: long });
    }

    return (
        <div className="search">
            <Map selectedDate={selectedDate} viewport={viewport} setViewport={setViewport} />
            <SearchBar searchValue={searchValue} setDestinationOpen={setDestinationOpen} chosenDestination={chosenDestination} setSearchValue={setSearchValue} searchBarState={searchBarState} setSearchBarState={setSearchBarState} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <SearchFocus setChosenDestination={setChosenDestination} searchValue={searchValue} destinationOpen={destinationOpen} setDestinationOpen={setDestinationOpen} searchResults={searchResults} setSearchValue={setSearchValue} searchBarState={searchBarState} goToDestination={goToDestination} setSearchBarState={setSearchBarState} />
        </div>
    );
}

export default Search;