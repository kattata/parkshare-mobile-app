import { useState } from 'react';
import TabSwitcher from '../utils/TabSwitcher';
import './bookings.scss';
import blackHeart from '../assets/heart-black.svg';

const Bookings = () => {

    const [bookingsState, setBookingsState] = useState(1);

    return (
        <div className="bookings">
            <TabSwitcher firstTabText="Upcoming" switcherState={bookingsState} secondTabText="Past" switchTab={setBookingsState} />
            {bookingsState === 1 && (
                <div className="booking-group">
                    <div className="top">
                        <h3>Damtoften 117</h3>
                        <img src={blackHeart} alt="heart" />
                    </div>

                </div>
            )}
            {bookingsState === 2 && <p>Past bookings</p>}
        </div>
    );
}

export default Bookings;