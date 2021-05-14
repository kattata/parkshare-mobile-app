import close from '../assets/x.svg';
import { useState } from 'react';

const ChooseDate = ({ chooseDateState, setChooseDateState, selectedDate, setSelectedDate }) => {

    const [fromDate, setFromDate] = useState({
        day: undefined,
        time: undefined
    })

    const handleInputChange = (e) => {
        const updated = { ...fromDate, [e.target.id]: e.target.value };
        setFromDate(updated);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedDate({
            ...selectedDate, from: `${fromDate.day} ${fromDate.time}`
        })
        setChooseDateState(2);
    }

    const chooseFromDate = (
        <div className="choose-date bottom-slide-out">
            <span className="swipe-line"></span>
            <h2>Choose date</h2>
            <img src={close} alt="letter x" className="close" onClick={() => setChooseDateState(0)} />
            <div className="content">
                <div className="from-to">
                    <div>
                        <h5 onClick={() => setChooseDateState(1)}>From</h5>
                        <h5 onClick={() => setChooseDateState(2)}>To</h5>
                    </div>
                    <span className="tab-line"></span>
                </div>
                <button className="secondary-btn">Now</button>
                <form onSubmit={handleSubmit}>
                    <label>Date</label>
                    <input type="date" value={fromDate.day} id="day" onChange={handleInputChange} />
                    <label>Time</label>
                    <input type="time" value={fromDate.time} id="time" onChange={handleInputChange} />
                    <button className="primary-btn">Next</button>
                </form>
            </div>
        </div>
    );

    const chooseToDate = (
        <div className="choose-date bottom-slide-out">
            <span className="swipe-line"></span>
            <h2>Choose date</h2>
            <img src={close} alt="letter x" className="close" onClick={() => setChooseDateState(0)} />
            <div className="content">
                <div className="from-to">
                    <div>
                        <h5 onClick={() => setChooseDateState(1)}>From</h5>
                        <h5 onClick={() => setChooseDateState(2)}>To</h5>
                    </div>
                    <span className="tab-line"></span>
                </div>
                <form>
                    <label>Date</label>
                    <input type="date" />
                    <label>Time</label>
                    <input type="time" />
                    <button className="primary-btn" onClick={() => setChooseDateState(0)}>Apply</button>
                </form>
            </div>
        </div>
    );


    return (
        <>
            {chooseDateState === 1 && chooseFromDate}
            {chooseDateState === 2 && chooseToDate}
        </>
    );
}

export default ChooseDate;