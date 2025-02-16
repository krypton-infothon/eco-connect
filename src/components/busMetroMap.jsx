"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader, Polyline } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100vh",
};
// Additional Considerations:
//     Bus Routes: Ensure that your backend API returns bus routes and other relevant information for each bus station.
//
//     Icons: Replace "bus_icon_url_here" with the actual URL of your bus icon.
//
//     Styling: Adjust the CSS and layout as needed to fit the bus station map's design.
const BusMap = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [busStations, setBusStations] = useState([]);
    const [directions, setDirections] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [selectedTo, setSelectedTo] = useState(null);
    const [selectedBusStation, setSelectedBusStation] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);
    const [routeSegments, setRouteSegments] = useState([]);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setUserLocation(location);
                setSelectedFrom(location);
            });
        }
    }, []);

    useEffect(() => {
        axios.get("http://localhost:5050/api/bus-stations").then((response) => {
            setBusStations(response.data);
        });
    }, []);

    const handleSearch = async (query, type) => {
        if (!query) return;
        const response = await axios.get("http://localhost:5050/api/locationSearch?query=${query}");
        setSearchResults(response.data);
    };

    const handleSelectLocation = (location, type) => {
        if (type === "from") {
            setSelectedFrom(location.geometry.location);
            setFrom(location.description);
        } else {
            setSelectedTo(location.geometry.location);
            setTo(location.description);
        }
        setSearchResults([]);
    };

    const handleFindRoute = async (busStation) => {
        if (!selectedFrom || !selectedTo) return;
        setSelectedBusStation(busStation);
        const response = await axios.post("http://localhost:5050/api/getRoute", {
            from: selectedFrom,
            busStation: busStation.route,
            to: selectedTo,
        });
        const busRoute = response.data;
        setDirections(busRoute);
        setRouteSegments([
            { path: busRoute.route1.routes[0].overview_polyline.points, color: "blue" },
            { path: busRoute.route2.routes[0].overview_polyline.points, color: "green" },
        ]);
        setDistance(busRoute.route1.routes[0].legs[0].distance.text + " + " + busRoute.route2.routes[0].legs[0].distance.text);
        setDuration(busRoute.route2.routes[0].legs[0].duration.text);
    };

    const handleMapClick = (event) => {
        if (!selectedFrom) {
            setSelectedFrom({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        } else {
            setSelectedTo({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        }
    };

    return isLoaded ? (
        <div>
            <input
                type="text"
                placeholder="From"
                value={from}
                onChange={(e) => handleSearch(e.target.value, "from")}
                onFocus={() => { setFocus("to") }} />
            <input
                type="text"
                placeholder="To"
                value={to}
                onChange={(e) => handleSearch(e.target.value, "to")}
                onKeyDown={(e) => { if (e.key == 'Enter') { handleSelectLocation(result, "from") } }}
            />
            <ul>
                {searchResults.map((result) => (
                    <li key={result.place_id} onClick={() => handleSelectLocation(result, "from")} >{result.description}</li>
                ))}
            </ul>
            <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={14} onClick={handleMapClick}>
                {userLocation && <Marker position={userLocation} />}
                {selectedFrom && <Marker position={selectedFrom} label="F" />}
                {selectedTo && <Marker position={selectedTo} label="T" />}
                {busStations.map((station) => (
                    <Marker
                        key={station.id}
                        position={station.location}
                        icon={{ url: "bus_icon_url_here" }}
                        onClick={() => handleFindRoute(station)}
                    />
                ))}
                {routeSegments.map((segment, index) => (
                    <Polyline key={index} path={segment.path} options={{ strokeColor: segment.color, strokeWeight: 5 }} />
                ))}
            </GoogleMap>
            {selectedBusStation && (
                <div className="bottom-sheet">
                    <h3>Bus Stations</h3>
                    <ul>
                        {busStations.map((station) => (
                            <li key={station.id} onClick={() => handleFindRoute(station)}>
                                <img src="bus_icon_url_here" alt="bus" />
                                {station.name} - {station.routes.join(", ")}
                            </li>
                        ))}
                    </ul>
                    {distance && <p>Distance: {distance}</p>}
                    {duration && <p>Estimated Time: {duration}</p>}
                </div>
            )}
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default BusMap;