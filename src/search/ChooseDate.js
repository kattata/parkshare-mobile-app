import close from '../assets/x.svg';
import { useState } from 'react';
import TabSwitcher from '../utils/TabSwitcher';

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
        const updated = { ...fromDate, [e.target.name]: e.target.value };
        setFromDate(updated);
    }

    const handleToChange = (e) => {
        const updated = { ...toDate, [e.target.name]: e.target.value };
        setToDate(updated);
    }

    const assignMonthNames = (month) => {
        switch (month) {
            case "01":
                return "Jan";
            case "02":
                return "Feb";
            case "03":
                return "Mar";
            case "04":
                return "Apr";
            case "05":
                return "May";
            case "06":
                return "Jun";
            case "07":
                return "Jul";
            case "08":
                return "Aug";
            case "09":
                return "Sep";
            case "10":
                return "Oct";
            case "11":
                return "Nov";
            case "12":
                return "Dec";
            default:
                return "Err";
        }
    }

    const convertDate = (date) => {
        const month = date.day.slice(5, 7);
        const day = date.day.slice(8, 10);
        const hour = date.time.slice(0, 2);
        const minute = date.time.slice(3, 5);

        let nameOfMonth = assignMonthNames(month);

        return `${day} ${nameOfMonth} ${hour}:${minute}`;
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
        <div className={chooseDateState === 1 ? 'choose-date bottom-slide-out active' : 'choose-date bottom-slide-out'}>
            <span className="swipe-line"></span>
            <h2>Choose date</h2>
            <img src={close} alt="letter x" className="close" onClick={() => setChooseDateState(0)} />
            <div className="content">
                <TabSwitcher firstTabText="From" switcherState={chooseDateState} secondTabText="To" switchTab={setChooseDateState} />
                <button className="secondary-btn">Now</button>
                <form onSubmit={handleSubmitFrom}>
                    <label>Date</label>
                    <input type="date" value={fromDate.day} name="day" onChange={handleFromChange} />
                    <label>Time</label>
                    <input type="time" value={fromDate.time} name="time" onChange={handleFromChange} />
                    <button className="primary-btn">Next</button>
                </form>
            </div>
        </div>
    );

    const chooseToDate = (
        <div className={chooseDateState === 2 ? 'choose-date bottom-slide-out active' : 'choose-date bottom-slide-out'}>
            <span className="swipe-line"></span>
            <h2>Choose date</h2>
            <img src={close} alt="letter x" className="close" onClick={() => setChooseDateState(0)} />
            <div className="content">
                <TabSwitcher firstTabText="From" switcherState={chooseDateState} secondTabText="To" switchTab={setChooseDateState} />
                <form onSubmit={handleSubmitTo}>
                    <label>Date</label>
                    <input type="date" value={toDate.day} name="day" onChange={handleToChange} />
                    <label>Time</label>
                    <input type="time" value={toDate.time} name="time" onChange={handleToChange} />
                    <button className="primary-btn">Apply</button>
                </form>
            </div>
        </div>
    );


    return (
        <>
            {chooseFromDate}
            {chooseToDate}
        </>
    );
}

export default ChooseDate;