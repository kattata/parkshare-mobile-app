import ReactMapGL, { Marker, GeolocateControl } from 'react-map-gl';
import { useEffect, useState } from 'react';
import firebase from '../utils/Firebase';
import SpotDetails from './SpotDetails';


const Map = ({ selectedDate, viewport, setViewport }) => {

    const mapboxToken = 'pk.eyJ1Ijoia2F0dGF0YSIsImEiOiJjazdkMW9samkwamVxM2ZwYTdycWVqeTdnIn0.UiaVPV8_C6knWwC1_K8zkA';
    const mapStyle = 'mapbox://styles/kattata/ckofno0o03js117s4s901yezz';

    const [spots, setSpots] = useState([]);
    const spotsRef = firebase.firestore().collection("spots");

    useEffect(() => {
        let spotsArray = [];

        spotsRef.onSnapshot(function (snapshotData) {
            snapshotData.forEach(function (doc) {
                let spot = doc.data();
                spot.id = doc.id;
                spotsArray.push(spot);
            });
        });

        setSpots(spotsArray);
    }, [])

    const [selectedSpot, setSelectedSpot] = useState(null);
    const [detailsOpen, setDetailsOpen] = useState(false);

    return (
        <>
            <ReactMapGL {...viewport} mapboxApiAccessToken={mapboxToken} onViewportChange={(viewport) => setViewport(viewport)} mapStyle={mapStyle}
            >
                {spots.map(spot => {
                    return (
                        <Marker key={spot.id} latitude={spot.longitude} longitude={spot.latitude} >
                            <button className="marker-btn" onClick={() => {
                                setSelectedSpot(spot);
                                setDetailsOpen(true);
                            }}>
                                {spot.price} kr
                                <span className="triangle"></span>
                            </button>
                        </Marker>
                    )
                }
                )}
                <GeolocateControl
                    positionOptions={{ enableHighAccuracy: true }}
                    trackUserLocation={true}
                    auto={false}
                    className="geolocate-btn"
                />
            </ReactMapGL>
            {selectedSpot && (
                <SpotDetails setSelectedSpot={setSelectedSpot} spot={selectedSpot} selectedDate={selectedDate} detailsOpen={detailsOpen} />
            )}
        </>
    );
}

export default Map;