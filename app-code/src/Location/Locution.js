import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import './location.css';

function Locution() {
    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        //googleMapsApiKey: "AIzaSyBOjXjnkULjxJ6dWnN-3I5FhS5RNdB_eBY",
    });

    if (!isLoaded) return <div>Loading...</div>

    const center = {
        lat: 43.5890,
        lng: -79.6441
    };

    const styles = {
        width: "50vw",
        height: "88vh",
    };

    const seva = { lat: 43.55989, lng: -79.647631};
    const miss = { lat: 43.623902, lng: -79.575136};
    const musl = { lat: 43.575342, lng: -79.646433};

    
    return (
        <div>
            <div className="banks">
                <button className="bank-1">
                    <h2>Seva Food Bank</h2>
                    <h3>3413 Wolfedale Rd Unit #10</h3>
                    <h4>(905) 361-7382 ext. 1</h4>
                </button>
                <button className="bank-2">
                    <h2>Mississauga Food Bank</h2>
                    <h3>3121 Universal Dr</h3>
                    <h4>(905) 270-5589</h4>
                </button>
                <button className="bank-3">
                    <h2>Muslim Welfare Center</h2>
                    <h3>3490 Mavis Rd</h3>
                    <h4>(905) 281-9730</h4>
                </button>
            </div>


            <div className="main-map">
                <GoogleMap zoom={12} mapContainerStyle = {styles} center = {center}>
                    <Marker position={ seva } icon={{ url:"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} } />
                    
                    <Marker position={ miss } icon={{ url:"http://maps.google.com/mapfiles/ms/icons/pink-dot.png"} } />
                    
                    <Marker position={ musl } icon={{ url:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"} } />
                </GoogleMap>
            </div>
        </div>
    );
}

export default Locution;