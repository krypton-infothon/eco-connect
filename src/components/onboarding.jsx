'use client';

import { useState } from 'react';

import Rbutton from './Rbutton';
export default function OnboardingModal() {
    const onClose = () => {
        router = useRouter();
        router.push("/home");
    }

    const [comfortableWalk, setComfortableWalk] = useState(false);
    const [walkDistance, setWalkDistance] = useState('');
    const [comfortableRun, setComfortableRun] = useState(false);
    const [runDistance, setRunDistance] = useState('');
    const [comfortableCycle, setComfortableCycle] = useState(false);
    const [cycleDistance, setCycleDistance] = useState('');

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#B4E794] p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Green Commute Preferences</h2>

                <label className="block text-gray-700">
                    <input
                        type="checkbox"
                        checked={comfortableWalk}
                        onChange={() => setComfortableWalk(!comfortableWalk)}
                        className="mr-2"
                    />
                    Are you comfortable walking?
                </label>
                {comfortableWalk && (
                    <div className="mt-2">
                        <p className="text-gray-700">How far are you willing to walk?</p>
                        {['200m', '400m', '600m', '1000m+', 'More than 1000m'].map((dist) => (
                            <label key={dist} className="block">
                                <input
                                    type="radio"
                                    name="walkDistance"
                                    value={dist}
                                    checked={walkDistance === dist}
                                    onChange={(e) => setWalkDistance(e.target.value)}
                                    className="mr-2"
                                />
                                {dist}
                            </label>
                        ))}
                    </div>
                )}

                <label className="block text-gray-700 mt-4">
                    <input
                        type="checkbox"
                        checked={comfortableRun}
                        onChange={() => setComfortableRun(!comfortableRun)}
                        className="mr-2"
                    />
                    Are you comfortable running?
                </label>
                {comfortableRun && (
                    <div className="mt-2">
                        <p className="text-gray-700">How far are you willing to run?</p>
                        {['200m', '400m', '600m', '1000m+', 'More than 1000m'].map((dist) => (
                            <label key={dist} className="block">
                                <input
                                    type="radio"
                                    name="runDistance"
                                    value={dist}
                                    checked={runDistance === dist}
                                    onChange={(e) => setRunDistance(e.target.value)}
                                    className="mr-2"
                                />
                                {dist}
                            </label>
                        ))}
                    </div>
                )}

                <label className="block text-gray-700 mt-4">
                    <input
                        type="checkbox"
                        checked={comfortableCycle}
                        onChange={() => setComfortableCycle(!comfortableCycle)}
                        className="mr-2"
                    />
                    Are you comfortable cycling?
                </label>
                {comfortableCycle && (
                    <div className="mt-2">
                        <p className="text-gray-700">How far are you willing to cycle?</p>
                        {['200m', '400m', '600m', '1000m+', 'More than 1000m'].map((dist) => (
                            <label key={dist} className="block">
                                <input
                                    type="radio"
                                    name="cycleDistance"
                                    value={dist}
                                    checked={cycleDistance === dist}
                                    onChange={(e) => setCycleDistance(e.target.value)}
                                    className="mr-2"
                                />
                                {dist}
                            </label>
                        ))}
                    </div>
                )}

                <Rbutton>

                </Rbutton>
            </div>
        </div>
    )
        ;
}
