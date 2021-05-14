import firebase from '../utils/Firebase';
import close from '../assets/x.svg';
import { useEffect, useState } from 'react';

const ChooseVehicle = ({ setChooseVehicleState, chooseVehicleState }) => {

    const [vehicles, setVehicles] = useState([]);
    const vehiclesRef = firebase.firestore().collection("vehicles");

    useEffect(() => {

        vehiclesRef.onSnapshot(function (snapshotData) {
            let vehiclesArray = [];
            snapshotData.forEach(function (doc) {
                let vehicle = doc.data();
                vehicle.id = doc.id;
                vehiclesArray.push(vehicle);
            });
            setVehicles(vehiclesArray);
            console.log(vehiclesArray);
        });
    }, [])

    const chooseVehicle = (
        <div className="choose-vehicle bottom-slide-out">
            <div className="content">
                <span className="swipe-line"></span>
                <h2>Choose vehicle(s)</h2>
                <img src={close} alt="letter x" className="close" onClick={() => setChooseVehicleState(0)} />
                {vehicles.map(vehicle => {
                    return (
                        <div className="vehicle" key={vehicle.id}>
                            <h4>{vehicle.nickname}</h4>
                            <p>{vehicle.number}</p>
                            <input type="checkbox" />
                        </div>
                    )
                })}
                <button className="secondary-btn" onClick={() => setChooseVehicleState(2)}>Add a new vehicle</button>
                <button className="primary-btn" onClick={() => setChooseVehicleState(0)}>Apply</button>
            </div>
        </div>
    )

    const addNewVehicle = (
        <div className="add-new-vehicle bottom-slide-out">
            <div className="content">
                <form>
                    <span className="swipe-line"></span>
                    <h2>Enter new vehicle's details</h2>
                    <img src={close} alt="letter x" className="close" onClick={() => setChooseVehicleState(0)} />
                    <label>License plate number</label>
                    <input type="text" placeholder="E.g. CS12345" />
                    <label>Nickname (optional)</label>
                    <input type="text" />
                    <button className="primary-btn" onClick={() => chooseVehicleState(0)}>Continue</button>
                </form>
            </div>
        </div>
    )

    return (
        <>
            {chooseVehicleState === 1 && chooseVehicle}
            {chooseVehicleState === 2 && addNewVehicle}
        </>
    );
}

export default ChooseVehicle;