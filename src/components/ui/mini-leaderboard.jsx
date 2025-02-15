'use client';

import { FaMedal } from 'react-icons/fa';

const leaderboardData = [
    { id: 1, name: 'Alice', points: 1200 },
    { id: 2, name: 'Bob', points: 1100 },
    { id: 3, name: 'Charlie', points: 1050 },
];

export default function MiniLeaderboard() {
    return (
        <div >
            {/* Mini Leaderboard Container */}
            <div className="bg-errieBlack rounded-xl border-2 border-accent shadow-xl w-[4.5in] h-[3.5in] p-12 flex flex-col justify-between">
                <h2 className=" text-lg font-bold text-center text-honeydew mb-2">Top 3 Players</h2>

                
                <div className="flex items-end justify-center gap-6 mt-0 relative">
                <div className="flex flex-col items-center">
                    <img src="./trophy3.png" alt="3rd Place" className="w-20 h-20" />
                    <p className="text-lg font-semibold text-honeydew ">{leaderboardData[2].name}</p>
                    <p className='font-semibold text-honeydew'>{leaderboardData[2].points} pts</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./trophy2.png" alt="1st Place" className="w-28 h-28" />
                    <p className="text-lg font-bold text-honeydew">{leaderboardData[0].name}</p>
                    <p className="font-semibold text-honeydew">{leaderboardData[0].points} pts</p>
                </div>
                <div className="flex flex-col items-center">
                    <img src="./trophy2nd.png" alt="2nd Place" className="w-24 h-24" />
                    <p className="text-lg font-semibold text-honeydew">{leaderboardData[1].name}</p>
                    <p className='font-semibold text-honeydew'>{leaderboardData[1].points} pts</p>
                </div>
            </div>

                    
                </div>

                {/* Footer */}
                <p className="text-xs text-center text-gray-600 mt-2">Updated: Today</p>
            </div>
        // </div>
    );
}


