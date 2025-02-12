'use client';

import { useState } from 'react';

import Rbutton from './Rbutton';
import clsx from 'clsx';
import { IoMdBicycle } from "react-icons/io";
import { MdDirectionsWalk } from "react-icons/md";
import { FaRunning } from "react-icons/fa";
export default function OnboardingModal() {
    const onClose = () => {
        router = useRouter();
        router.push("/home");
    }
    const iconBoxStyle = "bg-[#d5fabe] border-s-green-950 hover:bg-green-600 rounded-md px-3.5 py-4";
    const distances = ['200m', '600m', '1000m', 'More than 1000m']
    const [comfortableWalk, setComfortableWalk] = useState(false);
    const [walkDistance, setWalkDistance] = useState('');
    const [comfortableRun, setComfortableRun] = useState(false);
    const [runDistance, setRunDistance] = useState('');
    const [comfortableCycle, setComfortableCycle] = useState(false);
    const [cycleDistance, setCycleDistance] = useState('');
    const handleClick = (target) => {
        target(value => !value);
    }
    return (
        <form id="prefform">

            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-scroll">
                <div className="bg-[#B4E794] p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">What Are You Comfortable With</h2>
                    <div className="flex justify-center gap-5">
                        <button onClick={() => handleClick(setComfortableCycle)} className={clsx("border-s-green-950 text-5xl text-black hover:bg-green-700 hover:text-white rounded-md px-3.5 py-4", comfortableCycle ? "bg-green-600" : "bg-[#d5fabe]")}>
                            <IoMdBicycle />
                        </button>
                        <button onClick={() => handleClick(setComfortableWalk)} className={clsx("border-s-green-950 text-5xl text-black hover:bg-green-700 hover:text-white rounded-md px-3.5 py-4", comfortableWalk ? "bg-green-600" : "bg-[#d5fabe]")}>
                            <MdDirectionsWalk />
                        </button>
                        <button onClick={() => handleClick(setComfortableRun)} className={clsx("border-s-green-950 text-5xl text-black hover:bg-green-700 hover:text-white rounded-md px-3.5 py-4", comfortableRun ? "bg-green-600" : "bg-[#d5fabe]")}>
                            <FaRunning />
                        </button>
                    </div>
                    <div className="flex">
                        {comfortableWalk && (
                            <div className="mt-2">
                                <p className="text-gray-900">How far are you willing to walk?</p>
                                {distances.map((dist) => (
                                    <label key={dist} className="block text-gray-800">
                                        <input
                                            type="radio"
                                            name="walkDistance"
                                            value={dist}
                                            checked={walkDistance === dist}
                                            onChange={(e) => setWalkDistance(e.target.value)}
                                            className="mr-2 text-gray-800"
                                        />
                                        {dist}
                                    </label>
                                ))}
                            </div>
                        )}
                        {comfortableRun && (
                            <div className="mt-2">
                                <p className="text-gray-900">How far are you willing to run?</p>
                                {distances.map((dist) => (
                                    <label key={dist} className="block text-gray-800">
                                        <input
                                            type="radio"
                                            name="runDistance"
                                            value={dist}
                                            checked={runDistance === dist}
                                            onChange={(e) => setRunDistance(e.target.value)}
                                            className="mr-2 text-gray-800"
                                        />
                                        {dist}
                                    </label>
                                ))}
                            </div>
                        )}
                        {comfortableCycle && (
                            <div className="mt-2">
                                <p className="text-gray-900">How far are you willing to cycle?</p>
                                {distances.map((dist) => (
                                    <label key={dist} className="block text-gray-800">
                                        <input
                                            type="radio"
                                            name="cycleDistance"
                                            value={dist}
                                            checked={cycleDistance === dist}
                                            onChange={(e) => setCycleDistance(e.target.value)}
                                            className="mr-2 text-gray-800"
                                        />
                                        {dist}
                                    </label>
                                ))}
                            </div>
                        )}
                    </div>
                    <Rbutton>

                    </Rbutton>
                </div>
            </div>
        </form>)
        ;
}
