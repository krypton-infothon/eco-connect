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

// ... [Keep all SVG icon components and LoadingSpinner same as before] ...


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
====== b 1 0
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
aaaaaaa
        return sortBy === "green"
            ? b.greenScore - a.greenScore
            : a.price - b.price;
    });
    return isLoaded ? (
        <div className="relative h-screen w-full bg-errieBlack">
            <style>{`
                @keyframes route-pulse {
                    0% { stroke-opacity: 0.4; }
                    50% { stroke-opacity: 1; }
                    100% { stroke-opacity: 0.4; }
                }
                .route-pulse { animation: route-pulse 1.5s ease-in-out infinite; }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                }
                .float { animation: float 3s ease-in-out infinite; }
            `}</style>

            {/* Search Container */}
            <div className="absolute top-4 left-4 right-4 z-10 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 transform transition-all duration-300 hover:shadow-2xl float">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 relative">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white">
                            {/*<DriverIcon className="w-5 h-5" />*/}
                        </div>
                        <input
                            type="text"
                            placeholder="From"
                            value={from}
                            onChange={(e) => handleSearch(e.target.value, "from")}
                            className="flex-1 p-3 rounded-lg border border-honeydew focus:outline-none focus:ring-2 focus:ring-accent pl-12 pr-4"
                        />
                    </div>

                    <div className="flex items-center space-x-2 relative">
                        <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-full text-white">
                            {/*<CarIcon className="w-5 h-5" />*/}
                        </div>
                        <input
                            type="text"
                            placeholder="To"
                            value={to}
                            onChange={(e) => handleSearch(e.target.value, "to")}
                            className="flex-1 p-3 rounded-lg border border-honeydew focus:outline-none focus:ring-2 focus:ring-accent pl-12 pr-4"
                        />
                    </div>
                </div>

                {searchResults.length > 0 && (
                    <ul className="mt-4 space-y-2 max-h-60 overflow-y-auto">
                        {searchResults.map((result) => (
                            <li
                                key={result.place_id}
                                onClick={() => handleSelectLocation(result, "from")}
                                className="p-3 hover:bg-greenFg rounded-lg cursor-pointer transition-colors duration-200 flex items-center"
                            >
                                <DriverIcon className="w-5 h-5 text-secondary mr-2" />
                                {result.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Map */}
            <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={14} onClick={handleMapClick}>
                {userLocation && <Marker position={userLocation} icon={{
                    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
                    fillColor: "#4caf50",
                    fillOpacity: 1,
                    scale: 1.8,
                    strokeColor: "white",
                    strokeWeight: 2,
                }} />}

                {sortedDrivers.map((driver) => (
                    <Marker
                        key={driver.id}
                        position={driver.location}
                        icon={{
                            path: "M12 2C2 2 0 10 0 12s2 10 12 10 12-8 12-10-2-10-12-10zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
                            fillColor: driver === selectedDriver ? "#FFC107" : "#3E7D32",
                            fillOpacity: 1,
                            scale: 1.2,
                            strokeColor: "#ffffff",
                            strokeWeight: 1,
                        }}
                        onClick={() => handleSelectDriver(driver)}
                    />
                ))}

                {pickupRoute && <Polyline path={pickupRoute} options={{ strokeColor: "blue", strokeWeight: 5 }} className="route-pulse" />}
                {optimizedRoute && <Polyline path={optimizedRoute} options={{ strokeColor: "green", strokeWeight: 5 }} className="route-pulse" />}
            </GoogleMap>

            {/* Always Visible Bottom Sheet */}
            <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl h-[50vh]">
                <div className="flex justify-center p-2">
                    <div className="w-24 h-1.5 bg-gray-200 rounded-full"></div>
                </div>

                <div className="p-6 h-full flex flex-col">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-gunmetal flex items-center gap-2">
                            {/*<CarIcon className="w-8 h-8 text-accent" />*/}
                            Available Rides
                        </h3>
                        <select
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 rounded-lg border border-honeydew focus:outline-none focus:ring-2 focus:ring-accent"
                        >
                            <option value="green">🌿 Greenest</option>
                            <option value="price">💰 Cheapest</option>
                        </select>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-3">
                        {sortedDrivers.map((driver) => (
                            <div
                                key={driver.id}
                                onClick={() => handleSelectDriver(driver)}
                                className={`p-4 rounded-xl border-2 ${driver === selectedDriver ? 'border-accent bg-greenFg' : 'border-honeydew'} transition-all duration-300 cursor-pointer hover:shadow-lg`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                                            {/*<DriverIcon className="w-6 h-6 text-white" />*/}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gunmetal">{driver.name}</h4>
                                            <p className="text-sm text-gray-600">{driver.vehicleBrand} ({driver.vehicleNumber})</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xl font-bold text-primary">${driver.price}</p>
                                        <p className="text-sm text-secondary">🌿 {driver.greenScore}/10</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedDriver && (
                        <div className="mt-4 pt-4 border-t border-honeydew">
                            <div className="flex gap-4">
                                <button
                                    onClick={handleConfirmPickup}
                                    className="flex-1 px-6 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all transform hover:scale-105"
                                >
                                    ✅ Accept Ride
                                </button>
                                <button
                                    onClick={handleRequestRedirection}
                                    className="flex-1 px-6 py-3 bg-secondary text-white rounded-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105"
                                >
                                    🔄 Request Detour
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) : (
        <div className="h-screen w-full flex items-center justify-center bg-errieBlack">

            <span className="sr-only">Loading Map...</span>
        </div>
    );
};

export default CarpoolingMap;

