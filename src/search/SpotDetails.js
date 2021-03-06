import blackHeart from '../assets/heart-black.svg';
import pinkHeart from '../assets/heart-pink.png';
import close from '../assets/x.svg';
import handicap from '../assets/disabled.svg';
import './spot.scss';
import '../utils/utils.scss';
import FromTo from '../utils/FromTo';

const SpotDetails = ({ spot, setSelectedSpot, selectedDate, setDetailsOpen, detailsOpen, setChooseDateState, setChooseVehicleState }) => {

    const details = (
        <div className={detailsOpen ? 'spot-details bottom-slide-out active' : 'spot-details bottom-slide-out'}>
            <span className="swipe-line"></span>
            <div className="content">
                <h2>{spot.address}</h2>
                <img src={close} alt="letter x" className="close" onClick={() => setSelectedSpot(null)} />
                <div className="top">
                    <div className="secondary-btn">
                        See directions
                    </div>
                    {spot.favorite ? (
                        <img src={pinkHeart} alt="pink heart" className="heart" />
                    ) : (
                        <img src={blackHeart} alt="black heart" className="heart" />
                    )}
                </div>
                <FromTo setChooseDateState={setChooseDateState} selectedDate={selectedDate} setChooseVehicleState={setChooseVehicleState} detailsOpen={detailsOpen} setDetailsOpen={setDetailsOpen} />
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
                <p className="description">
                    <h4>Description</h4>
                    {spot.description}
                </p>
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
                    <h4>Extras</h4>
                    {spot.handicap && (
                        <div className="extra">
                            <div>
                                <img src={handicap} alt="handicap wheelchair" />
                        Suitable for wheelchairs
                    </div>
                        </div>
                    )}
                    {spot.cctv && (
                        <div className="extra">
                            CCTV
                        </div>
                    )}
                    {spot.roofed && (
                        <div className="extra">
                            Under a roof
                        </div>
                    )}
                    {spot.gated && (
                        <div className="extra">
                            Gated
                        </div>
                    )}
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