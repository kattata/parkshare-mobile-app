import '../utils/utils.scss';

const FromTo = ({ setChooseDateState, selectedDate, setChooseVehicleState, detailsOpen, setDetailsOpen }) => {
    return (
        <>
            {detailsOpen ? <span className="details-line"></span> : <span className="details-line short"></span>}
            <div className="dates">
                <button onClick={() => {
                    setChooseDateState(1)
                    setChooseVehicleState(0);
                    if (setDetailsOpen) {
                        setDetailsOpen(false);
                    }
                }}>
                    <h5>From</h5>
                    <h4>{selectedDate.from}</h4>
                </button>
                <button onClick={() => {
                    setChooseDateState(2);
                    setChooseVehicleState(0);
                    if (setDetailsOpen) {
                        setDetailsOpen(false);
                    }
                }}>
                    <h5>To</h5>
                    <h4>{selectedDate.to}</h4>
                </button>
            </div>
        </>
    );
}

export default FromTo;