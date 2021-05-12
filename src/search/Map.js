import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

const Map = () => {

    const mapboxToken = 'pk.eyJ1Ijoia2F0dGF0YSIsImEiOiJjazdkMW9samkwamVxM2ZwYTdycWVqeTdnIn0.UiaVPV8_C6knWwC1_K8zkA';
    const mapStyle = 'mapbox://styles/kattata/ckofno0o03js117s4s901yezz';


    const [viewport, setViewport] = useState({
        width: '100vw',
        height: '100vh',
        latitude: 56.148,
        longitude: 10.213,
        zoom: 12
    });

    return (
        <ReactMapGL {...viewport} mapboxApiAccessToken={mapboxToken} onViewportChange={nextViewport => setViewport(nextViewport)} mapStyle={mapStyle}
        ></ReactMapGL>
    );
}

export default Map;