const FromTo = ({ setChooseDateState, selectedDate, setChooseVehicleState }) => {
    return (
        <div className="dates">
            <button onClick={() => {
                setChooseDateState(1)
                setChooseVehicleState(0);
            }}>
                <h5>From</h5>
                <h4>{selectedDate.from}</h4>
            </button>
            <button onClick={() => {
                setChooseDateState(2);
                setChooseVehicleState(0)
            }}>
                <h5>To</h5>
                <h4>{selectedDate.to}</h4>
            </button>
        </div>
    );
}

export default FromTo;