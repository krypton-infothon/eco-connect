"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, Marker, Polyline, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100vh",
};

const CarpoolingMap = () => {
    // State variables
    const [userLocation, setUserLocation] = useState(null);
    const [drivers, setDrivers] = useState([]);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [pickupRoute, setPickupRoute] = useState(null);
    const [redirectedRoute, setRedirectedRoute] = useState(null);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [selectedFrom, setSelectedFrom] = useState(null);
    const [selectedTo, setSelectedTo] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [sortBy, setSortBy] = useState("green"); // Sorting state
    const [focus, setFocus] = useState("from")

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    // Fetch user location
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

    // Fetch available carpooling drivers
    useEffect(() => {
        axios.get("http://localhost:5050/api/drivers").then((response) => {
            setDrivers(response.data);
        });
    }, []);

    // Handle search queries for locations
    const handleSearch = async (query, type) => {
        if (!query) return;
        const response = await axios.get(`http://localhost:5050/api/locationSearch?query=${query}`);
        setSearchResults(response.data);
    };

    // Select location from search
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

    // Handle map click to select locations
    const handleMapClick = (event) => {
        if (!selectedFrom) {
            setSelectedFrom({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        } else {
            setSelectedTo({ lat: event.latLng.lat(), lng: event.latLng.lng() });
        }
    };

    // Fetch and display driver's route
    const handleSelectDriver = async (driver) => {
        setSelectedDriver(driver);
        const response = await axios.get(`http://localhost:5050/api/getDriverRoute?driverId=${driver.id}`);


        setDriverRoute(response.data);
    };

    // Handle confirmation of pickup model
    const handleConfirmPickup = () => {
        setPickupRoute(true);
    };


    // Handle redirection request
    const handleRequestRedirection = async () => {
        const response = await axios.post("http://localhost:5050/api/redirectDriver", {
            driver: selectedDriver,
            userLocation: selectedFrom,
            destination: selectedTo,

        });
        setRedirectedRoute(response.data.legs);
    };

    // Sorting function
    const sortedDrivers = [...drivers].sort((a, b) => {
        if (sortBy === "green") {
            return a.greenScore - b.greenScore;
        } else {
            return a.price - b.price;
        }
    });

    return (drivers && userLocation) ? (
        <div>
            {/* Location Inputs */}
            <input type="text" placeholder="From" value={from} onChange={(e) => handleSearch(e.target.value, "from")} onFocus={setFocus("from")} />
            <input type="text" placeholder="To" value={to} onChange={(e) => handleSearch(e.target.value, "to")} onFocus={setFocus("to")} />

            {/* Search Results */}
            <ul>
                {searchResults.map((result) => (
                    <li key={result.place_id} onClick={() => handleSelectLocation(result, focus)}>{result.description}</li>
                ))}
            </ul>

            {/* Map */}
            <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={14} onClick={handleMapClick}>
                {userLocation && <Marker position={userLocation} label="U" />}
                {selectedFrom && <Marker position={selectedFrom} label="F" />}
                {selectedTo && <Marker position={selectedTo} label="T" />}
                {sortedDrivers.map((driver) => (
                    <Marker key={driver.id} position={driver.location} label={driver.name.charAt(0)} onClick={() => handleSelectDriver(driver)} />
                ))}
                {selectedDriverRoute && <Polyline path={google.maps.geometry.encoding.decodePath(selectedDriverRoute)} options={{ strokeColor: "blue", strokeWeight: 5 }} />}
                {pickupRoute && <Polyline path={pickupRoute} options={{ strokeColor: "blue", strokeWeight: 5 }} />}
                {redirectedRoute.map((segment, index) => { <Polyline key={index} path={google.maps.geometry.encoding.decodePath(segment.polyline)} options={{ strokeColor: "green", strokeWeight: 5 }} /> })}
            </GoogleMap>

            {/* Sorting Dropdown */}
            <select onChange={(e) => setSortBy(e.target.value)}>
                <option value="green">Sort by Green Score</option>
                <option value="price">Sort by Price</option>
            </select>

            {/* Bottom Sheet: Driver List */}
            (from && to && <div className="bottom-sheet">
                <h3>Available Drivers</h3>
                <ul>
                    {sortedDrivers.map((driver) => (
                        <li key={driver.id} onClick={() => handleSelectDriver(driver)}>
                            <img src={driver.profileIcon} alt="Driver" />
                            {driver.name} - {driver.vehicleBrand} ({driver.vehicleNumber})
                        </li>
                    ))}
                </ul>
            </div>)

            {/* Confirmation Bottom Sheet */}
            {selectedDriver && (
                <div className="bottom-sheet">
                    <h3>Confirm Pickup</h3>
                    <button onClick={handleConfirmPickup}>Accept Pickup Model</button>
                    <button onClick={handleRequestRedirection}>Request Redirection</button>
                </div>
            )}
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default CarpoolingMap;
