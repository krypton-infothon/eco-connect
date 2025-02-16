"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CycleStation from "@/components/TemplateComponents/CycleStation";
import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import { FaMotorcycle } from "react-icons/fa";

const cycleStations = [
    { name: 'Central Park Station', distance: "0.3km", bikes: 8 },
    { name: 'Downtown Hub', distance: "0.5km", bikes: 4 },
    { name: 'Riverside Terminal', distance: "0.7km", bikes: 12 },
    { name: 'Green Valley Point', distance: "1.2km", bikes: 2 },
    { name: 'City Square Depot', distance: "1.4km", bikes: 7 },
    { name: 'Harbor View Station', distance: "1.8km", bikes: 5 },
    { name: 'Mountain Ridge Hub', distance: "2.1km", bikes: 9 },
];

const CyclingPopUp = () => {

    const FiBike = FaMotorcycle
    const [selectedStation, setSelectedStation] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#151C1F]/90 backdrop-blur-xl z-50"
        >
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: "15%" }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 20, stiffness: 200 }}
                className="relative h-[85vh] rounded-t-3xl bg-gradient-to-b from-[#F1F8E9] to-[#B4E794] shadow-2xl"
            >
                {/* Drag handle */}
                <motion.div
                    className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-[#3E7D32] rounded-full"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                />

                <div className="h-full flex flex-col pt-8">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-8 pb-6 sticky top-0 z-10 bg-gradient-to-b from-[#F1F8E9] via-[#F1F8E9]/95 to-transparent"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <FiBike className="text-4xl text-[#4CAF50]" />
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#3E7D32] to-[#4CAF50] bg-clip-text text-transparent">
                                EcoCycle Stations
                            </h1>
                        </div>
                        <div className="flex justify-between text-[#263238] font-medium">
                            <span>Available Stations</span>
                            <span>Distance</span>
                        </div>
                    </motion.div>

                    {/* Stations list */}
                    <div className="flex-1 overflow-y-auto px-6 pb-8 space-y-4">
                        {cycleStations.map((station, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                onClick={() => setSelectedStation(index === selectedStation ? null : index)}
                            >
                                <CycleStation
                                    station={station}
                                    className={`cursor-pointer transition-all duration-300 ${
                                        index === selectedStation
                                            ? 'ring-3 ring-[#4CAF50] bg-gradient-to-br from-[#F1F8E9] to-[#B4E794]'
                                            : 'bg-white hover:bg-[#F1F8E9]/50'
                                    } rounded-2xl p-5 shadow-lg relative overflow-hidden`}
                                    icon={
                                        <FiBike
                                            className={`text-2xl transition-colors ${
                                                index === selectedStation ? 'text-[#4CAF50]' : 'text-[#263238]'
                                            }`}
                                        />
                                    }
                                    badge={
                                        index === selectedStation && (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="absolute top-2 right-2 text-[#4CAF50]"
                                            >
                                                <FiCheckCircle className="text-xl" />
                                            </motion.div>
                                        )
                                    }
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Confirm Button */}
                    <AnimatePresence>
                        {selectedStation !== null && (
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 100 }}
                                className="sticky bottom-0 p-6 bg-gradient-to-t from-[#F1F8E9] via-[#F1F8E9]/80 to-transparent"
                            >
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        background: 'linear-gradient(45deg, #3E7D32, #4CAF50)'
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowConfirm(true)}
                                    className="w-full py-4 bg-gradient-to-r from-[#4CAF50] to-[#3E7D32] text-white rounded-xl shadow-lg font-bold text-lg hover:shadow-[#B4E794]/50 transition-all duration-300"
                                >
                                    Confirm Selection
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>

            {/* Confirmation Dialog */}
            <AnimatePresence>
                {showConfirm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#151C1F]/80 backdrop-blur-sm flex items-center justify-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-[90%]"
                        >
                            <div className="flex flex-col items-center mb-6">
                                <FiAlertTriangle className="text-5xl text-[#FFC107] mb-4 animate-pulse" />
                                <h3 className="text-2xl font-bold text-[#263238] mb-2">
                                    Confirm Selection?
                                </h3>
                                <p className="text-center text-[#3E7D32]">
                                    You're selecting <span className="font-semibold">{cycleStations[selectedStation]?.name}</span>.
                                    This will reserve a bike for 15 minutes.
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setShowConfirm(false)}
                                    className="flex-1 py-3 bg-[#F1F8E9] text-[#3E7D32] rounded-lg font-medium hover:bg-[#B4E794] transition-colors"
                                >
                                    Cancel
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => { /* handle confirmation */ }}
                                    className="flex-1 py-3 bg-gradient-to-r from-[#4CAF50] to-[#3E7D32] text-white rounded-lg font-medium shadow-lg hover:shadow-[#B4E794]/50 transition-all"
                                >
                                    Confirm
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default CyclingPopUp;