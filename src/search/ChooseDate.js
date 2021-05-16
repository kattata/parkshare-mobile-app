import close from '../assets/x.svg';
import { useState } from 'react';

const ChooseDate = ({ chooseDateState, setChooseDateState, selectedDate, setSelectedDate }) => {

    const [fromDate, setFromDate] = useState({
        day: "",
        time: ""
    })

    const [toDate, setToDate] = useState({
        day: "",
        time: ""
    })

    const handleFromChange = (e) => {
        const updated = { ...fromDate, [e.target.id]: e.target.value };
        setFromDate(updated);
    }

    const handleToChange = (e) => {
        const updated = { ...toDate, [e.target.id]: e.target.value };
        setToDate(updated);
    }

    const assignMonthNames = (month) => {
        let nameMonth = "";

        switch (month) {
            case "01":
                return nameMonth = "Jan";
            case "02":
                return nameMonth = "Feb";
            case "03":
                return nameMonth = "Mar";
            case "04":
                return nameMonth = "Apr";
            case "05":
                return nameMonth = "May";
            case "06":
                return nameMonth = "Jun";
            case "07":
                return nameMonth = "Jul";
            case "08":
                return nameMonth = "Aug";
            case "09":
                return nameMonth = "Sep";
            case "10":
                return nameMonth = "Oct";
            case "11":
                return nameMonth = "Nov";
            case "12":
                return nameMonth = "Dec";
            default:
                return nameMonth = "Err";
        }
    }

    const convertDate = (date) => {
        const month = date.day.slice(5, 7);
        const day = date.day.slice(8, 10);
        const hour = date.time.slice(0, 2);
        const minute = date.time.slice(3, 5);

        let name = assignMonthNames(month);

        return `${day} ${name} ${hour}:${minute}`;
    }

    const handleSubmitFrom = (e) => {
        e.preventDefault();
        const newDate = convertDate(fromDate);
        setSelectedDate({ ...selectedDate, from: newDate });
        setChooseDateState(2);
    }

    const handleSubmitTo = (e) => {
        e.preventDefault();
        const newDate = convertDate(toDate);
        setSelectedDate({ ...selectedDate, to: newDate });
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