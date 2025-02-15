"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader, Polyline } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const CyclingMap = () => {
    const [userLocation, setUserLocation] = useState(null);
    const [cycleStations, setCycleStations] = useState([]);
    const [directions, setDirections] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [selectedTo, setSelectedTo] = useState(null);
    const [selectedCycleStation, setSelectedCycleStation] = useState(null);
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
        axios.get("http://localhost:5050/api/cycle-stations").then((response) => {
            setCycleStations(response.data);
        });
    }, []);

    const handleSearch = async (query, type) => {
        if (!query) return;
        const response = await axios.get(`http://localhost:5050/api/locationSearch?query=${query}`);
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

    const handleFindRoute = async (cycleStation) => {
        if (!selectedFrom || !selectedTo) return;
        setSelectedCycleStation(cycleStation);
        const response = await axios.post("http://localhost:5050/api/getRoute", {
            from: selectedFrom,
            cycleStation: cycleStation.location,
            to: selectedTo,
        });
        cycleroute = response.data;
        setDirections(cycleroute);
        setRouteSegments([
            { path: cycleroute.route1.routes[0].overview_polyline.points, color: "blue" },
            { path: cycleroute.route2.routes[0].overview_polyline.points, color: "green" },
        ]);
        setDistance(cycleroute.route1.routes[0].legs[0].distance.text + " + " + cycleroute.route2.routes[0].legs[0].distance.text);
        setDuration(cycleroute.route2.routes[0].legs[0].duration.text);
    };

    const handleMapClick = (event) => {
        if (!selectedFrom) {
            setSelectedFrom({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        } else {
            setSelectedTo({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        }
    };

    return isLoaded ? (
   
        <div className="bg-errieBlack min-h-screen flex flex-col items-center p-4">
            <h2 className="text-white text-3xl font-semibold  mb-4">Plan your ride</h2>

            <div className="w-full max-w-md bg-errieBlack rounded-lg p-4">
                <div className="flex flex-col space-y-2">
                    {/* From Input */}
                    <div className="flex items-center bg-errieBlack text-white px-3 py-2 rounded-lg border border-accent">
                        <span className="mr-2">📍</span>
                        <input
                            type="text"
                            placeholder="From"
                            value={from}
                            onChange={(e) => handleSearch(e.target.value, "from")}
                            className="bg-transparent text-white outline-none w-full"
                        />
                    </div>

                    {/* To Input */}
                    <div className="flex items-center bg-errieBlack text-white px-3 py-2 rounded-lg border border-accent">
                        <span className="mr-2">⬇️</span>
                        <input
                            type="text"
                            placeholder="Where to?"
                            value={to}
                            onChange={(e) => handleSearch(e.target.value, "to")}
                            className="bg-transparent text-white outline-none w-full"
                        />
                    </div>
                </div>
            </div>

            {/* Search Results */}
            <ul className="mt-4 w-full max-w-md bg-errieBlack rounded-lg p-3 text-white">
                {searchResults.map((result) => (
                    <li
                            key={result.place_id}
                            onClick={() => handleSelectLocation(result, "from")}
                            className="p-2 hover:bg-gray-700 cursor-pointer rounded"
                        >
                            {result.description}
                        </li>
                    ))}
                </ul>
            
            <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={14} onClick={handleMapClick}>
                {userLocation && <Marker position={userLocation} />}
                {selectedFrom && <Marker position={selectedFrom} label="F" />}
                {selectedTo && <Marker position={selectedTo} label="T" />}
                {cycleStations.map((station) => (
                    <Marker
                        key={station.id}
                        position={station.location}
                        icon={{ url: "cycle_icon_url_here" }}
                        onClick={() => handleFindRoute(station)}
                    />
                ))}
                {routeSegments.map((segment, index) => (
                    <Polyline key={index} path={segment.path} options={{ strokeColor: segment.color, strokeWeight: 5 }} />
                ))}
            </GoogleMap>
            {selectedCycleStation && (
                <div className="bottom-sheet">
                    <h3>Cycle Stations</h3>
                    <ul>
                        {cycleStations.map((station) => (
                            <li key={station.id} /*onClick={() => handleFindRoute(station)}*/>
                                <img src="cycle_icon_url_here" alt="cycle" />
                                {station.name} - {station.charge}/hour
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

export default CyclingMap;
