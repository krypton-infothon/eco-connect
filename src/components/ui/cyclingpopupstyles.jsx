
    // <div className="bottom-sheet">
    //     <h3>Cycle Stations</h3>
    //     <ul>
    //         {cycleStations.map((station) => (
    //             <li key={station.id} /*onClick={() => handleFindRoute(station)}*/>
    //                 <img src="cycle_icon_url_here" alt="cycle" />
    //                 {station.name} - {station.charge}/hour
    //             </li>
    //         ))}
    //     </ul>
    //     {distance && <p>Distance: {distance}</p>}
    //     {duration && <p>Estimated Time: {duration}</p>}
    // </div>
    // 
'use client';

import React, { useState } from 'react';
import { FaBicycle, FaMotorcycle, FaCar, FaTaxi } from 'react-icons/fa';
import { MdElectricRickshaw } from "react-icons/md";
import { GiQuickSlash } from 'react-icons/gi';
import Image from 'next/image';

const RideConfirmationPopup = ({ onClose }) => {
    const rideOptions = [
      { name: "Cycle", icon: <FaBicycle className="text-black text-4xl" />, time: "1 min", price: "₹59" },
      { name: "Bike", icon: <FaMotorcycle className="text-yellow-500 text-4xl" />, time: "3 mins", price: "₹58", oldPrice: "₹64" },
      { name: "Auto", icon: <MdElectricRickshaw className="text-green-500 text-4xl" />, time: "1 min", price: "₹97", fastest: true },
      { name: "Cab Economy", icon: <FaCar className="text-blue-500 text-4xl" />, time: "1 min", price: "₹133" },
      { name: "Cab Pooling", icon: <FaTaxi className="text-purple-500 text-4xl" />, time: "1 min", price: "₹141" }
    ];
  
    return (
      <div className="fixed inset-0 bg-yellow-100 flex flex-col justify-end shadow-2xl">
        <div className="relative p-4 bg-white rounded-t-3xl shadow-xl">
          <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
            ✖
          </button>
          <p className="text-center text-green-700 font-semibold text-xl py-2">Saving ₹6 with Green Points</p>
          <div className="space-y-3">
            {rideOptions.map((ride, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-3">
                  {ride.icon}
                  <div>
                    <p className="font-semibold text-black">{ride.name}</p>
                    <p className="text-sm text-gray-500 font-semibold">{ride.time} away</p>
                  </div>
                </div>
                <div className="text-right">
                  {ride.fastest && <span className="bg-green-200 text-green-700 text-xs px-2 py-1 rounded">FASTEST</span>}
                  <p className="text-lg font-bold text-black">{ride.price}</p>
                  {ride.oldPrice && <p className="text-sm line-through text-gray-700">{ride.oldPrice}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center p-4">
            <button className="px-4 py-2 bg-green-300 hover:bg-green-500 rounded-lg text-black font-semibold">Cash</button>
            <button className="px-4 py-2 bg-green-300 hover:bg-green-500 text-black rounded-lg font-semibold">Offers</button>
          </div>
          <button className="w-full bg-yellow-300 hover:bg-yellow-500 text-black py-4 rounded-lg font-bold text-lg">Book Ride</button>
        </div>
      </div>
    );
  };
  
  export default RideConfirmationPopup;



  