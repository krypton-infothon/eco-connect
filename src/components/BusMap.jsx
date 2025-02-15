"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader, Polyline } from "@react-google-maps/api";

// Custom SVG Icons
const BusIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 11H6V6h12v5zM16.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
        <path fillRule="evenodd" d="M4 16.5v3h3v-1.5h10V19h3v-3h-1.5V6a2 2 0 00-2-2H6.5a2 2 0 00-2 2v10.5H4zm2.5-10h10v9h-10v-9z" clipRule="evenodd"/>
    </svg>
);

const ClockIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2"/>
        <path d="M12 6v6l4 2" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const SeatIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 18h10v1H7zM7 15h10v1H7z"/>
        <path fillRule="evenodd" d="M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h12V6H6z" clipRule="evenodd"/>
    </svg>
);

const LoadingSpinner = () => (
    <svg className="animate-spin h-12 w-12 text-primary" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
    </svg>
);

// Dummy data for buses
const dummyBuses = [
    { id: 1, number: "BUS-101", route: "Central Station ↔ Downtown", time: "10 mins", seats: "12 seats available" },
    { id: 2, number: "BUS-205", route: "North Station ↔ South Hub", time: "15 mins", seats: "5 seats available" },
    { id: 3, number: "BUS-308", route: "East Park ↔ West Mall", time: "8 mins", seats: "20 seats available" },
];

const containerStyle = {
    width: "100%",
    height: "100vh",
};

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

    const handleFindRoute = async (busStation) => {
        if (!selectedFrom || !selectedTo) return;
        setSelectedBusStation(busStation);
        const response = await axios.post("http://localhost:5050/api/getRoute", {
            from: selectedFrom,
            busStation: busStation.location,
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
        <div className="relative h-screen w-full bg-errieBlack">
            <style>{`
        @keyframes route-pulse {
          0% { stroke-opacity: 0.4; }
          50% { stroke-opacity: 1; }
          100% { stroke-opacity: 0.4; }
        }
        .route-pulse {
          animation: route-pulse 1.5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

            {/* Search Container */}
            <div className="absolute top-4 left-4 right-4 z-10 max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-4 transform transition-all duration-300 hover:shadow-2xl float">
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 relative">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="From"
                            value={from}
                            onChange={(e) => handleSearch(e.target.value, "from")}
                            className="flex-1 p-3 rounded-lg border border-honeydew focus:outline-none focus:ring-2 focus:ring-accent pl-12 pr-4"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute right-3" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <div className="flex items-center space-x-2 relative">
                        <div className="flex items-center justify-center w-8 h-8 bg-secondary rounded-full text-white">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="To"
                            value={to}
                            onChange={(e) => handleSearch(e.target.value, "to")}
                            className="flex-1 p-3 rounded-lg border border-honeydew focus:outline-none focus:ring-2 focus:ring-accent pl-12 pr-4"
                        />
                        <svg className="w-5 h-5 text-gray-400 absolute right-3" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
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
                                <svg className="w-5 h-5 text-secondary mr-2" fill="none" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {result.description}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={userLocation}
                zoom={14}
                onClick={handleMapClick}
                options={{ styles: [{ elementType: "labels", stylers: [{ visibility: "off" }] }] }}
            >
                {userLocation && <Marker position={userLocation} icon={{
                    path: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z",
                    fillColor: "#4caf50",
                    fillOpacity: 1,
                    scale: 1.8,
                    strokeColor: "white",
                    strokeWeight: 2,
                }} />}

                {selectedFrom && <Marker position={selectedFrom} label="F" />}
                {selectedTo && <Marker position={selectedTo} label="T" />}

                {busStations.map((station) => (
                    <Marker
                        key={station.id}
                        position={station.location}
                        icon={{
                            path: "M12 2C2 2 0 10 0 12s2 10 12 10 12-8 12-10-2-10-12-10zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z",
                            fillColor: "#FFC107",
                            fillOpacity: 1,
                            scale: 1.2,
                            strokeColor: "#3E7D32",
                            strokeWeight: 1,
                        }}
                        onClick={() => handleFindRoute(station)}
                    />
                ))}

                {routeSegments.map((segment, index) => (
                    <Polyline
                        key={index}
                        path={segment.path}
                        options={{
                            strokeColor: segment.color,
                            strokeWeight: 5,
                            strokeOpacity: 0.8,
                            icons: [{
                                icon: { path: google.maps.SymbolPath.CIRCLE },
                                offset: '0',
                                repeat: '20px'
                            }]
                        }}
                        className="route-pulse"
                    />
                ))}
            </GoogleMap>

            { (
                <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl animate-slide-up">
                    <div className="flex justify-center p-2">
                        <div className="w-24 h-1 bg-gray-200 rounded-full transform transition-all duration-300 hover:bg-accent cursor-pointer"></div>
                    </div>

                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gunmetal mb-4 flex items-center gap-2">
                            <BusIcon className="w-8 h-8 text-accent animate-bounce" />
                            Available Rides
                        </h3>

                        <div className="space-y-4">
                            {dummyBuses.map((bus) => (
                                <div key={bus.id} className="group relative p-4 bg-honeydew rounded-xl border-2 border-honeydew hover:border-accent transition-all duration-300 cursor-pointer hover:shadow-lg">
                                    <div className="absolute right-4 top-4 flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full">
                                        <SeatIcon className="w-4 h-4 text-primary" />
                                        <span className="text-sm font-semibold text-primary">{bus.seats}</span>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                                            <BusIcon className="w-8 h-8 text-white transform group-hover:rotate-12 transition-transform" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gunmetal">{bus.number}</h4>
                                            <p className="text-sm text-gray-600">{bus.route}</p>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-secondary">
                                            <ClockIcon className="w-5 h-5" />
                                            <span className="font-medium">Depart in {bus.time}</span>
                                        </div>
                                        <button className="px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {distance && (
                            <div className="mt-6 p-4 bg-errieBlack rounded-xl text-white backdrop-blur-lg bg-opacity-95 transform transition-all hover:scale-[1.02]">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-6 h-6 text-greenFg" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                                        </svg>
                                        <div>
                                            <p className="text-sm opacity-90">Total Distance</p>
                                            <p className="text-xl font-bold">{distance}</p>
                                        </div>
                                    </div>

                                    <div className="h-8 w-px bg-white/20"></div>

                                    <div className="flex items-center gap-2">
                                        <ClockIcon className="w-6 h-6 text-greenFg" />
                                        <div>
                                            <p className="text-sm opacity-90">Estimated Time</p>
                                            <p className="text-xl font-bold">{duration}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    ) : (
        <div className="h-screen w-full flex items-center justify-center bg-errieBlack">
            <LoadingSpinner />
            <span className="sr-only">Loading Map...</span>
        </div>
    );
};

export default BusMap;