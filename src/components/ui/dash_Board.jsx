'use client';

import { useState } from 'react';
import { FaInfoCircle, FaCarSide } from 'react-icons/fa';
import { MdHistory, MdElectricCar } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCard = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/40 backdrop-blur-xl border border-gray-700/30"
        >
            {children}
            <motion.div
                initial={false}
                animate={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(circle at ${isHovered ? '50% 50%' : '100% 100'}, rgba(72,187,120,0.15) 0%, transparent 70%)`
                }}
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            />
        </motion.div>
    );
};

const CarbonMetric = ({ icon, title, value, progress, color }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`p-6 rounded-xl backdrop-blur-lg border border-${color}-400/20 bg-gradient-to-br from-${color}-400/10 to-transparent`}
        >
            <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg bg-${color}-400/20`}>
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-300">{title}</h3>
            </div>
            <div className="flex justify-between items-center">
        <span className={`text-4xl font-bold bg-gradient-to-r from-${color}-400 to-${color}-600 bg-clip-text text-transparent`}>
          {value}
        </span>
                <div className="relative w-24 h-24">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            className={`stroke-current text-${color}-400/20`}
                            strokeWidth="8"
                            fill="none"
                        />
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            className={`stroke-current text-${color}-400`}
                            strokeWidth="8"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={`${2 * Math.PI * 45}`}
                            strokeDashoffset={inView ? `${2 * Math.PI * 45 * (1 - progress)}` : `${2 * Math.PI * 45}`}
                            transform="rotate(-90 50 50)"
                            style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                        />
                    </svg>
                    <span className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-${color}-400 font-bold`}>
            {Math.round(progress * 100)}%
          </span>
                </div>
            </div>
        </motion.div>
    );
};

export default function Dashboard() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const previousRides = [
        { id: 1, route: 'Downtown Hub to Tech Park', date: '2025-02-10', distance: '8.2km', points: 120 },
        { id: 2, route: 'Central Station to Mountain View', date: '2025-02-12', distance: '15.7km', points: 230 },
        { id: 3, route: 'Green Valley to Sunset Blvd', date: '2025-02-14', distance: '12.4km', points: 180 }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-errieBlack to-gray-900 text-gray-100 p-8">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-3xl p-8 backdrop-blur-2xl border border-gray-700/30 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                    <div className="relative z-10 space-y-8">
                        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            EcoCommute Dashboard
                        </h1>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder=" "
                                        value={from}
                                        onChange={(e) => setFrom(e.target.value)}
                                        className="w-full px-6 py-4 text-lg bg-gray-800/40 backdrop-blur-sm border-2 border-gray-600/30 rounded-xl focus:outline-none focus:border-green-400/50 peer transition-all"
                                    />
                                    <label className="absolute left-4 top-1/2 -translate-y-1/2 px-2 bg-gray-900/80 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-9 peer-focus:text-green-400 peer-focus:bg-gray-900 peer-placeholder-shown:-translate-y-1/2">
                                        From Location
                                    </label>
                                    <FaCarSide className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-green-400 transition-colors" />
                                </div>

                                <div className="relative group">
                                    <input
                                        type="text"
                                        placeholder=" "
                                        value={to}
                                        onChange={(e) => setTo(e.target.value)}
                                        className="w-full px-6 py-4 text-lg bg-gray-800/40 backdrop-blur-sm border-2 border-gray-600/30 rounded-xl focus:outline-none focus:border-cyan-400/50 peer transition-all"
                                    />
                                    <label className="absolute left-4 top-1/2 -translate-y-1/2 px-2 bg-gray-900/80 text-gray-400 pointer-events-none transition-all duration-300 peer-focus:-translate-y-9 peer-focus:text-cyan-400 peer-focus:bg-gray-900 peer-placeholder-shown:-translate-y-1/2">
                                        Destination
                                    </label>
                                    <MdElectricCar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <div className="p-6 bg-gradient-to-br from-green-400/10 to-cyan-400/10 rounded-xl border border-gray-700/30 backdrop-blur-sm">
                                    <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">Current Points</span>
                                            <span className="text-2xl font-bold text-green-400">1,240</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-400">Carbon Saved</span>
                                            <span className="text-2xl font-bold text-cyan-400">342kg</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Content Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
                <AnimatedCard>
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <MdHistory className="text-cyan-400 text-3xl" />
                            Ride History
                        </h2>
                        <div className="space-y-6">
                            {previousRides.map((ride) => (
                                <motion.div
                                    key={ride.id}
                                    whileHover={{ scale: 1.01 }}
                                    className="p-4 bg-gray-800/30 rounded-xl border border-gray-700/30 backdrop-blur-sm"
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4 className="font-semibold text-gray-300">{ride.route}</h4>
                                            <p className="text-sm text-gray-500">{ride.date}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-green-400 font-bold">+{ride.points}pts</p>
                                            <p className="text-sm text-gray-500">{ride.distance}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedCard>

                <AnimatedCard>
                    <div className="p-8">
                        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                            <FaInfoCircle className="text-green-400 text-3xl" />
                            Environmental Impact
                        </h2>
                        <div className="space-y-8">
                            <CarbonMetric
                                icon={<MdElectricCar className="text-3xl text-green-400" />}
                                title="Daily Impact"
                                value="50pts"
                                progress={0.35}
                                color="green"
                            />
                            <CarbonMetric
                                icon={<MdHistory className="text-3xl text-cyan-400" />}
                                title="Monthly Impact"
                                value="1.5K"
                                progress={0.65}
                                color="cyan"
                            />
                            <CarbonMetric
                                icon={<FaInfoCircle className="text-3xl text-purple-400" />}
                                title="Annual Impact"
                                value="18K"
                                progress={0.85}
                                color="purple"
                            />
                        </div>
                    </div>
                </AnimatedCard>
            </div>

            {/* Achievement Banner */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-6xl mx-auto mb-16 p-8 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl border border-gray-700/30 backdrop-blur-xl"
            >
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Eco Champion Achieved!</h3>
                        <p className="text-gray-400">You've saved more carbon than 92% of users</p>
                    </div>
                    <div className="text-6xl">🌿</div>
                </div>
            </motion.div>
        </div>
    );
}