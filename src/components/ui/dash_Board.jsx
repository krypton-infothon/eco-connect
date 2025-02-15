// 'use client';

// import { useState } from 'react';
// import { FaInfoCircle } from 'react-icons/fa';
// import { MdHistory } from 'react-icons/md';

// export default function Dashboard() {
//     const [from, setFrom] = useState('');
//     const [to, setTo] = useState('');
//     const searchResults = [];
//     const previousRides = [
//         { id: 1, route: 'A to B', date: '2025-02-10' },
//         { id: 2, route: 'C to D', date: '2025-02-12' },
//         { id: 3, route: 'E to F', date: '2025-02-14' }
//     ];

//     return (
//         <div className="p-6 bg-errieBlack min-h-screen text-honeydew">
//             {/* From and To Input Fields */}
//             <div className="bg-gunmetal p-6 rounded-lg shadow-md mb-6">
                
//                 <label className="block text-sm font-medium mb-1">From</label>
//                 <input
//                     type="text"
//                     placeholder="Enter starting location"
//                     value={from}
//                     onChange={(e) => setFrom(e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-800 text-white placeholder-gray-400 mb-3"
//                 />
//                 <label className="block text-sm font-medium mb-1">To</label>
//                 <input
//                     type="text"
//                     placeholder="Enter destination"
//                     value={to}
//                     onChange={(e) => setTo(e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-800 text-white placeholder-gray-400"
//                 />
//             </div>

//             {/* Dashboard Sections */}
//             <div className="grid grid-cols-3 gap-4 mb-6">
//                 <div className="bg-gunmetal p-6 rounded-lg shadow-md flex items-center justify-center text-xl font-bold">Current Points: 1200</div>
//                 <div className="bg-gunmetal p-6 rounded-lg shadow-md flex items-center justify-center text-xl font-bold">
//                     <FaInfoCircle className="mr-2" /> About Us
//                 </div>
//                 <div className="bg-gunmetal p-6 rounded-lg shadow-md text-xl font-bold">
//                     <MdHistory className="mr-2" /> Previous Rides
//                     <ul className="mt-2 text-sm">
//                         {previousRides.map(ride => (
//                             <li key={ride.id} className="border-b border-gray-700 py-1">{ride.route} - {ride.date}</li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//             {/* Carbon Footprint Section */}
//             <div className="bg-gunmetal p-6 rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold mb-3">Carbon Footprint</h2>
//                 <div className="grid grid-cols-3 gap-4">
//                     <div className="bg-gray-800 p-4 rounded-lg text-center">
//                         <p className="text-lg font-bold">Points per Day</p>
//                         <p className="text-2xl">50</p>
//                     </div>
//                     <div className="bg-gray-800 p-4 rounded-lg text-center">
//                         <p className="text-lg font-bold">Points per Month</p>
//                         <p className="text-2xl">1500</p>
//                     </div>
//                     <div className="bg-gray-800 p-4 rounded-lg text-center">
//                         <p className="text-lg font-bold">Points per Year</p>
//                         <p className="text-2xl">18000</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

'use client';

import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { MdHistory } from 'react-icons/md';

export default function Dashboard() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const searchResults = [];
    const previousRides = [
        { id: 1, route: 'A to B', date: '2025-02-10' },
        { id: 2, route: 'C to D', date: '2025-02-12' },
        { id: 3, route: 'E to F', date: '2025-02-14' }
    ];

    return (
        <div className="p-8 bg-gray-900 min-h-screen text-gray-100">
            {/* From and To Input Fields */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg mb-8">
                <h2 className="text-3xl font-black mb-6 text-center text-honeydew">Plan Your Ride</h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-md mb-2 text-honeydew">From</label>
                        <input
                            type="text"
                            placeholder="Enter starting location"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-700 text-white placeholder-gray-400 transition-all duration-200 hover:border-gray-600"
                        />
                    </div>
                    <div>
                        <label className="block text-md mb-2 text-honeydew">To</label>
                        <input
                            type="text"
                            placeholder="Enter destination"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                            className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-gray-700 text-white placeholder-gray-400 transition-all duration-200 hover:border-gray-600"
                        />
                    </div>
                </div>
            </div>

            {/* Dashboard Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-750 transition-all duration-200">
                    <span className="text-accent">Current Points:</span> <span className="ml-2 text-green-400">1200</span>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-750 transition-all duration-200">
                    <FaInfoCircle className="mr-2 text-accent" /> <span className="text-gray-300">Refer a Friend</span>
                </div>
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-750 transition-all duration-200">
                    <div className="flex items-center text-xl font-bold mb-4">
                        <MdHistory className="mr-2 text-accent" /> <span className="text-gray-300">Previous Rides</span>
                    </div>
                    <ul className="space-y-2">
                        {previousRides.map(ride => (
                            <li key={ride.id} className="bg-gray-700 p-3 rounded-lg text-sm text-gray-300 hover:bg-gray-650 transition-all duration-200">
                                {ride.route} - <span className="text-gray-400">{ride.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Carbon Footprint Section */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-accent">Carbon Footprint</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-650 transition-all duration-200">
                        <p className="text-lg font-bold text-gray-300">Points of Day</p>
                        <p className="text-3xl font-bold text-green-400">50</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-650 transition-all duration-200">
                        <p className="text-lg font-bold text-gray-300">Points of the Month</p>
                        <p className="text-3xl font-bold text-green-400">1500</p>
                    </div>
                    <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-650 transition-all duration-200">
                        <p className="text-lg font-bold text-gray-300">Points of the Year</p>
                        <p className="text-3xl font-bold text-green-400">18000</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

