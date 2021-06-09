import search from '../assets/search-grey.svg';
import filters from '../assets/sliders.svg';
import { useState } from 'react';
import ChooseDate from './ChooseDate';
import ChooseVehicle from './ChooseVehicle';
import FromTo from '../utils/FromTo';

const SearchBar = ({ searchValue, setDestinationOpen, setSearchValue, searchBarState, setSearchBarState, selectedDate, setSelectedDate, chosenDestination, chooseDateState, chooseVehicleState, setChooseDateState, setChooseVehicleState }) => {

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

    const [selectedVehicles, setSelectedVehicles] = useState([]);


    return (
        <>
            <div className={searchBarState === 1 || searchBarState === 3 ? 'search-box' : 'search-box focus'}>
                <form onSubmit={handleSubmit} onFocus={handleFocus} className="search-bar">
                    <img src={search} alt="magnifying glass" />
                    <input type="text" placeholder="Where would you like to park?" value={searchBarState === 3 ? chosenDestination : searchValue} onChange={handleInputChange} />
                    {searchBarState === 3 && (<img src={filters} alt="filters" className="filters" />)}
                </form>
                {searchBarState === 3 && (
                    <>
                        <FromTo setChooseDateState={setChooseDateState} selectedDate={selectedDate} setChooseVehicleState={setChooseVehicleState} />
                        <div className="vehicles">
                            <button onClick={() => {
                                setChooseVehicleState(1)
                                setChooseDateState(0);
                            }}>
                                <h4>{selectedVehicles.length > 0 ? selectedVehicles.join(", ") : "Choose vehicle(s)"}</h4>
                            </button>
                        </div>
                    </>
                )}
            </div>
            <ChooseDate chooseDateState={chooseDateState} setChooseDateState={setChooseDateState} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            <ChooseVehicle chooseVehicleState={chooseVehicleState} setChooseVehicleState={setChooseVehicleState} selectedVehicles={selectedVehicles} setSelectedVehicles={setSelectedVehicles} />
        </>
    );
}

export default SearchBar;