import close from '../assets/x.svg';
import { useState } from 'react';

const ChooseDate = ({ chooseDateState, setChooseDateState, selectedDate, setSelectedDate }) => {

    const [fromDate, setFromDate] = useState({
        day: undefined,
        time: undefined
    })

    const [toDate, setToDate] = useState({
        day: undefined,
        time: undefined
    })

    const handleFromChange = (e) => {
        const updated = { ...fromDate, [e.target.id]: e.target.value };
        setFromDate(updated);
    }

    const handleToChange = (e) => {
        const updated = { ...toDate, [e.target.id]: e.target.value };
        setToDate(updated);
    }

    const handleSubmitFrom = (e) => {
        e.preventDefault();
        setSelectedDate({
            ...selectedDate, from: `${fromDate.day} ${fromDate.time}`
        })
        setChooseDateState(2);
    }

    const handleSubmitTo = (e) => {
        e.preventDefault();
        setSelectedDate({
            ...selectedDate, to: `${toDate.day} ${toDate.time}`
        })
        setChooseDateState(0);
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
                <form onSubmit={handleSubmitFrom}>
                    <label>Date</label>
                    <input type="date" value={fromDate.day} id="day" onChange={handleFromChange} />
                    <label>Time</label>
                    <input type="time" value={fromDate.time} id="time" onChange={handleFromChange} />
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
                <form onSubmit={handleSubmitTo}>
                    <label>Date</label>
                    <input type="date" value={toDate.day} id="day" onChange={handleToChange} />
                    <label>Time</label>
                    <input type="time" value={toDate.time} id="time" onChange={handleToChange} />
                    <button className="primary-btn">Apply</button>
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