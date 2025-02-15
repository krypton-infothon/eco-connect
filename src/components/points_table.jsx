'use client';

import { useState } from 'react';
import { FaMedal } from 'react-icons/fa';

const leaderboardData = [
    { id: 1, name: 'Alice', points: 1200 },
    { id: 2, name: 'Bob', points: 1100 },
    { id: 3, name: 'Charlie', points: 1050 },
    { id: 4, name: 'David', points: 900 },
    { id: 5, name: 'Emma', points: 850 }
];

export default function Leaderboard() {
    const [users, setUsers] = useState(leaderboardData);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-green-600 p-4">
            <div className="bg-amber-200 rounded-xl shadow-xl w-full max-w-lg p-6">
                <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Leaderboard</h2>


                <div className="flex items-end justify-center gap-6 mb-10 relative">
                <div className="flex flex-col items-center">
                    <img src="./trophy3.png" alt="3rd Place" className="w-20 h-20" />
                    <p className="text-lg font-semibold text-black ">{leaderboardData[2].name}</p>
                    <p className='font-semibold text-black'>{leaderboardData[2].points} pts</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./trophy2.png" alt="1st Place" className="w-28 h-28" />
                    <p className="text-lg font-bold text-black">{leaderboardData[0].name}</p>
                    <p className="font-semibold text-black">{leaderboardData[0].points} pts</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./trophy2nd.png" alt="2nd Place" className="w-24 h-24" />
                    <p className="text-lg font-semibold text-black">{leaderboardData[1].name}</p>
                    <p className='font-semibold text-black'>{leaderboardData[1].points} pts</p>
                </div>
            </div>

                <div className="space-y-4">
                    {users.map((user, index) => (
                        <div key={user.id} className="flex items-center justify-between bg-green-100 p-3 rounded-md shadow-md">
                            <div className="flex items-center gap-4">
                                <span className="text-lg font-semibold text-green-900">{index + 1}.</span>
                                <span className="text-lg font-medium text-gray-800">{user.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMedal className={`text-xl ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : index === 2 ? 'text-orange-500' : 'text-green-700'}`} />
                                <span className="text-lg font-semibold text-green-900">{user.points} pts</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
