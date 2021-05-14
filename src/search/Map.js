import ReactMapGL, { Marker, FlyToInterpolator } from 'react-map-gl';
import { useEffect, useState } from 'react';
import firebase from '../utils/Firebase';


const Map = () => {

    const mapboxToken = 'pk.eyJ1Ijoia2F0dGF0YSIsImEiOiJjazdkMW9samkwamVxM2ZwYTdycWVqeTdnIn0.UiaVPV8_C6knWwC1_K8zkA';
    const mapStyle = 'mapbox://styles/kattata/ckofno0o03js117s4s901yezz';

    const [viewport, setViewport] = useState({
        latitude: 56.148,
        longitude: 10.213,
        zoom: 12,
        width: '100%',
        height: '100%'
    });

    const [spots, setSpots] = useState([]);
    const spotsRef = firebase.firestore().collection("spots");

    useEffect(() => {

        spotsRef.onSnapshot(function (snapshotData) {
            let spotsArray = [];
            snapshotData.forEach(function (doc) {
                let spot = doc.data();
                spot.id = doc.id;
                spotsArray.push(spot);
            });
            setSpots(spotsArray);
            // console.log(spotsArray);
        });
    }, [])


    // const [selectedSpot, setSelectedSpot] = useState(null);
    // const openSpotDetails = (e) => {

    // }

    return (
        // <div className="map">
        <ReactMapGL {...viewport} mapboxApiAccessToken={mapboxToken} onViewportChange={(viewport) => setViewport(viewport)} mapStyle={mapStyle}
        >
            {/* <Marker latitude={56.131092} longitude={10.149503}>
                    <button className="marker-btn" id="1234" onClick={}>
                        30 kr
                    </button>
                </Marker> */}
            {/* {spots && spots.map(spot => {
                    return (
                        <Marker key={spot.id} longitude={spot.Longitude} latitude={spot.Latitude}>{spot.Price}</Marker>
                    )
                })} */}
        </ReactMapGL>

        // </div>
    );
}

export default Map;