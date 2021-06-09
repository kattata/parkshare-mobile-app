import { useEffect, useState } from 'react';
import TabSwitcher from '../utils/TabSwitcher';
import './bookings.scss';

const Bookings = () => {

    const [bookingsState, setBookingsState] = useState(0);

    return (
        <div className="bookings">
            <TabSwitcher firstTabText="Upcoming" switcherState={bookingsState} secondTabText="Past" switchTab={setBookingsState} />
        </div>
    );
}

export default Bookings;