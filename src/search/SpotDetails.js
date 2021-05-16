import heart from '../assets/heart-grey.svg';
import close from '../assets/x.svg';
import pin from '../assets/map-pin.svg';
import handicap from '../assets/disabled.svg';
import './spot.scss';

const SpotDetails = ({ spot, setSelectedSpot, selectedDate, detailsOpen }) => {

    const details = (
        <div className={detailsOpen ? 'spot-details bottom-slide-out active' : 'spot-details bottom-slide-out'}>
            <span className="swipe-line"></span>
            <div className="content">
                <h2>{spot.address}</h2>
                <img src={close} alt="letter x" className="close" onClick={() => setSelectedSpot(null)} />
                <div className="top">
                    <div className="secondary-btn">
                        <img src={pin} alt="map pin" />
                See directions
                    </div>
                    <img src={heart} alt="heart" className="heart" />
                </div>
                <div className="dates">
                    <button>
                        <h5>From</h5>
                        <h4>{selectedDate.from}</h4>
                    </button>
                    <button>
                        <h5>To</h5>
                        <h4>{selectedDate.to}</h4>
                    </button>
                </div>
                <div className="split">
                    <div className="split-item">
                        <h5>Total price</h5>
                        <h4>{spot.price} kr</h4>
                    </div>
                    <div className="split-item">
                        <h5>Total duration</h5>
                        <h4>2 h</h4>
                    </div>
                </div>
                <div className="images">
                    <img src="https://cdn.abcotvs.com/dip/images/5896174_013120-kgo-parking-spot-img_Image_00-00-59,06.jpg?w=1600" alt="" />
                </div>
                <div className="circles">
                    <span className="circle first"></span>
                    <span className="circle"></span>
                    <span className="circle"></span>
                </div>
                <p className="description">{spot.description}</p>
                <div className="split">
                    <div className="split-item">
                        <h5>Number of spots</h5>
                        <h4>{spot.spots}</h4>
                    </div>
                    <div className="split-item">
                        <h5>Size</h5>
                        <h4>{spot.size}</h4>
                    </div>
                </div>
                <div className="extras">
                    <div className="extra">
                        <div>
                            <img src={heart} alt="heart" />
                        Favorites
                    </div>
                        <input type="checkbox" checked={spot.favorite} />
                    </div>
                    <div className="extra">
                        <div>
                            <img src={handicap} alt="handicap wheelchair" />
                        Suitable for wheelchairs
                    </div>
                        <input type="checkbox" checked={spot.handicap} />
                    </div>
                    <div className="extra">
                        Electric charger
                        <input type="checkbox" />
                    </div>
                    <div className="extra">
                        CCTV
                        <input type="checkbox" checked={spot.cctv} />
                    </div>
                    <div className="extra">
                        Under a roof
                        <input type="checkbox" checked={spot.roofed} />
                    </div>
                    <div className="extra">
                        Gated
                        <input type="checkbox" checked={spot.gated} />
                    </div>
                </div>
                <div className="btn-group">
                    <button className="ghost-btn">Back</button>
                    <button className="primary-btn">Book now for {spot.price} kr</button>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {details}
        </>
    );
}

export default SpotDetails;