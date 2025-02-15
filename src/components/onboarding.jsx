// 'use client';

// import { useState } from 'react';

// import Rbutton from './Rbutton';
// import clsx from 'clsx';
// import { IoMdBicycle } from "react-icons/io";
// import { MdDirectionsWalk } from "react-icons/md";
// import { FaRunning, FaMale, FaFemale } from "react-icons/fa";
// export default function OnboardingModal() {
//     const onClose = () => {
//         router = useRouter();
//         router.push("/home");
//     }
//     const iconBoxStyle = "bg-gunmetal border-s-accent hover:bg-accent rounded-md px-3.5 py-4";
//     const distances = ['200m', '600m', '1000m', 'More than 1000m']
//     const [comfortableWalk, setComfortableWalk] = useState(false);
//     const [gender, setGender] = useState('');
//     const [walkDistance, setWalkDistance] = useState('');
//     const [comfortableRun, setComfortableRun] = useState(false);
//     const [runDistance, setRunDistance] = useState('');
//     const [comfortableCycle, setComfortableCycle] = useState(false);
//     const [cycleDistance, setCycleDistance] = useState('');
//     const [carPoolPreference, setCarPoolPreference] = useState('');
//     const handleClick = (target) => {
//         target(value => !value);
//     }
//     const handleCarPoolPreference = (value) => {
//         setCarPoolPreference(value);
//     }
//     const handleGender = (value) => {
//         setGender(value);
//     }
//     return (

//         <div className="fixed inset-0 flex items-center justify-center p-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1636930312719-e12a708880d5?auto=format&fit=crop&w=1920&q=80')" }}>

//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden">
//             <div className="overflow-y-auto relative max-h-[90vh] scrollbar-hide">
//                 <div className="bg-errieBlack p-7 rounded-2xl shadow-lg w-11/12 max-w-md">
//                     <h2 className="text-xl font-bold text-honeydew mb-4">What is your gender?</h2>
//                     <div className="flex justify-center gap-5 mb-4">
//                         <button onClick={() => handleGender('male')} className={clsx("border-s-accent text-5xl text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", gender === 'male' ? "bg-accent" : "bg-gunmetal")}>
//                             <FaMale />
//                         </button>
//                         <button onClick={() => handleGender('female')} className={clsx("border-s-accent text-5xl text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", gender === 'female' ? "bg-accent" : "bg-gunmetal")}>
//                             <FaFemale />
//                         </button>
//                     </div>
//                     <h2 className="text-xl font-bold text-honeydew mb-4">What is your preference for Car Pooling?</h2>
//                     <div className="flex justify-center gap-5 mb-4">
//                         <button onClick={() => handleCarPoolPreference('low')} className={clsx("border-s-accent text-md text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", carPoolPreference === 'low' ? "bg-accent" : "bg-gunmetal")}>
//                             <p>Low Preference</p>
//                         </button>
//                         <button onClick={() => handleCarPoolPreference('medium')} className={clsx("border-s-accent text-md text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", carPoolPreference === 'medium' ? "bg-accent" : "bg-gunmetal")}>
//                             <p>Medium Preference</p>
//                         </button>
//                         <button onClick={() => handleCarPoolPreference('high')} className={clsx("border-s-accent text-md text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", carPoolPreference === 'high' ? "bg-accent" : "bg-gunmetal")}>
//                             <p>High Preference</p>
//                         </button>
//                     </div>
//                     <h2 className="text-xl font-bold text-honeydew mb-4">What Are You Comfortable With</h2>
//                     <div className="flex justify-center gap-5 mb-4">

//                         <button onClick={() => handleClick(setComfortableWalk)} className={clsx("border-s-accent text-5xl text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", comfortableWalk ? "bg-accent" : "bg-gunmetal")}>
//                             <MdDirectionsWalk />
//                         </button>
//                         <button onClick={() => handleClick(setComfortableRun)} className={clsx("border-s-accent text-5xl text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", comfortableRun ? "bg-accent" : "bg-gunmetal")}>
//                             <FaRunning />
//                         </button>
//                         <button onClick={() => handleClick(setComfortableCycle)} className={clsx("border-s-accent text-5xl text-honeydew hover:bg-lighterAccent hover:text-white rounded-md px-3.5 py-4", comfortableCycle ? "bg-accent" : "bg-gunmetal")}>
//                             <IoMdBicycle />
//                         </button>

//                     </div>
//                     <div className="flex">
//                         {comfortableWalk && (
//                             <div className="mt-2">
//                                 <p className="text-honeydew">How far are you willing to walk?</p>
//                                 {distances.map((dist) => (
//                                     <label key={dist} className="block text-honeydew">
//                                         <input
//                                             type="radio"
//                                             name="walkDistance"
//                                             value={dist}
//                                             checked={walkDistance === dist}
//                                             onChange={(e) => setWalkDistance(e.target.value)}
//                                             className="mr-2 text-honeydew"
//                                         />
//                                         {dist}
//                                     </label>
//                                 ))}
//                             </div>
//                         )}
//                         {comfortableRun && (
//                             <div className="mt-2">
//                                 <p className="text-honeydew">How far are you willing to run?</p>
//                                 {distances.map((dist) => (
//                                     <label key={dist} className="block text-honeydew">
//                                         <input
//                                             type="radio"
//                                             name="runDistance"
//                                             value={dist}
//                                             checked={runDistance === dist}
//                                             onChange={(e) => setRunDistance(e.target.value)}
//                                             className="mr-2 text-honeydew"
//                                         />
//                                         {dist}
//                                     </label>
//                                 ))}
//                             </div>
//                         )}
//                         {comfortableCycle && (
//                             <div className="mt-2">
//                                 <p className="text-honeydew">How far are you willing to cycle?</p>
//                                 {distances.map((dist) => (
//                                     <label key={dist} className="block text-honeydew">
//                                         <input
//                                             type="radio"
//                                             name="cycleDistance"
//                                             value={dist}
//                                             checked={cycleDistance === dist}
//                                             onChange={(e) => setCycleDistance(e.target.value)}
//                                             className="mr-2 text-honeydew"
//                                         />
//                                         {dist}
//                                     </label>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                     <Rbutton>

//                     </Rbutton>
//                 </div>
//             </div> </div>
//             </div>
//     )
//         ;
// }

// 'use client';
//
// import { useState } from 'react';
// import Rbutton from './Rbutton';
// import clsx from 'clsx';
// import { IoMdBicycle } from 'react-icons/io';
// import { MdDirectionsWalk } from 'react-icons/md';
// import { FaRunning, FaMale, FaFemale } from 'react-icons/fa';
// import { useRouter } from 'next/navigation';
//
// export default function OnboardingModal() {
//     const router = useRouter();
//     const onClose = () => {
//         router.push('/home');
//     };
//
//     const distances = ['200m', '600m', '1000m', 'More than 1000m'];
//     const [comfortableWalk, setComfortableWalk] = useState(false);
//     const [gender, setGender] = useState('');
//     const [walkDistance, setWalkDistance] = useState('');
//     const [comfortableRun, setComfortableRun] = useState(false);
//     const [runDistance, setRunDistance] = useState('');
//     const [comfortableCycle, setComfortableCycle] = useState(false);
//     const [cycleDistance, setCycleDistance] = useState('');
//     const [carPoolPreference, setCarPoolPreference] = useState('');
//
//     return (
//         <div className="fixed inset-0 flex items-center justify-center p-4 bg-cover bg-center bg-black bg-opacity-50 overflow-y-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1636930312719-e12a708880d5?auto=format&fit=crop&w=1920&q=80')" }}>
//             <div className="relative max-h-[90vh] overflow-y-auto scrollbar-hide w-2/6  bg-gray-900 p-7 rounded-2xl shadow-lg">
//                 <h2 className="text-xl font-bold text-white mb-4">What is your gender?</h2>
//                 <div className="flex justify-center gap-5 mb-4">
//                     <button onClick={() => setGender('male')} className={clsx("text-5xl p-4 rounded-md transition", gender === 'male' ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <FaMale /> </button>
//                     <button onClick={() => setGender('female')} className={clsx("text-5xl p-4 rounded-md transition", gender === 'female' ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <FaFemale /> </button>
//                 </div>
//
//                 <h2 className="text-xl font-bold text-white mb-4">Car Pooling Preference</h2>
//                 <div className="flex justify-center gap-5 mb-4">
//                     {['Low', 'Medium', 'High'].map((level) => (
//                         <button key={level} onClick={() => setCarPoolPreference(level.toLowerCase())} className={clsx("px-4 py-2 rounded-md transition", carPoolPreference === level.toLowerCase() ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}>{level} Preference</button>
//                     ))}
//                 </div>
//
//                 <h2 className="text-xl font-bold text-white mb-4">What Are You Comfortable With?</h2>
//                 <div className="flex justify-center gap-5 mb-4">
//                     <button onClick={() => setComfortableWalk(!comfortableWalk)} className={clsx("text-5xl p-4 rounded-md transition", comfortableWalk ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <MdDirectionsWalk /> </button>
//                     <button onClick={() => setComfortableRun(!comfortableRun)} className={clsx("text-5xl p-4 rounded-md transition", comfortableRun ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <FaRunning /> </button>
//                     <button onClick={() => setComfortableCycle(!comfortableCycle)} className={clsx("text-5xl p-4 rounded-md transition", comfortableCycle ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <IoMdBicycle /> </button>
//                 </div>
//
//                 <div className="mt-4 space-y-3">
//                     {comfortableWalk && (
//                         <div>
//                             <p className="text-white text-lg">How far are you willing to walk?</p>
//                             <div className="flex gap-5">
//                                 {distances.map((dist) => (
//                                     <label key={dist} className="flex items-center space-x-2 text-white cursor-pointer text-nowrap">
//                                         <input  type="radio" name="walkDistance" value={dist} checked={walkDistance === dist} onChange={(e) => setWalkDistance(e.target.value)} className="hidden peer" />
//
//                                         <span className="px-2 py-2 rounded-md bg-gray-700 peer-checked:bg-green-500 peer-checked:text-white transition text-lg">{dist}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                     {comfortableRun && (
//                         <div>
//                             <p className="text-white text-lg">How far are you willing to run?</p>
//                             <div className="flex gap-5">
//                                 {distances.map((dist) => (
//                                     <label key={dist} className="flex items-center space-x-2 text-white cursor-pointer text-nowrap">
//                                         <input type="radio" name="runDistance" value={dist} checked={runDistance === dist} onChange={(e) => setRunDistance(e.target.value)} className="hidden peer" />
//                                         <span className="px-2 py-2 rounded-md bg-gray-700 peer-checked:bg-green-500 peer-checked:text-white transition text-lg">{dist}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                     {comfortableCycle && (
//                         <div>
//                             <p className="text-white text-lg">How far are you willing to cycle?</p>
//                             <div className="flex gap-5">
//                                 {distances.map((dist) => (
//                                     <label key={dist} className="flex items-center space-x-2 text-white cursor-pointer text-nowrap">
//                                         <input type="radio" name="cycleDistance" value={dist} checked={cycleDistance === dist} onChange={(e) => setCycleDistance(e.target.value)} className="hidden peer" />
//                                         <span className="px-2 py-2 rounded-md bg-gray-700 peer-checked:bg-green-500 peer-checked:text-white transition text-lg">{dist}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>
//                     )}
//                 </div>
//                 <Rbutton />
//             </div>
//         </div>
//     );
// }
'use client';

import { useState } from 'react';
import Rbutton from './Rbutton';
import clsx from 'clsx';
import { IoMdBicycle } from 'react-icons/io';
import { MdDirectionsWalk } from 'react-icons/md';
import { FaRunning, FaMale, FaFemale } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function OnboardingModal() {
    const router = useRouter();
    const onClose = () => {
        router.push('/home');
    };

    const distances = ['200m', '600m', '1000m', '1000m+'];
    const [comfortableWalk, setComfortableWalk] = useState(false);
    const [gender, setGender] = useState('');
    const [walkDistance, setWalkDistance] = useState('');
    const [comfortableRun, setComfortableRun] = useState(false);
    const [runDistance, setRunDistance] = useState('');
    const [comfortableCycle, setComfortableCycle] = useState(false);
    const [cycleDistance, setCycleDistance] = useState('');
    const [carPoolPreference, setCarPoolPreference] = useState('');

    return (
        <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1636930312719-e12a708880d5?auto=format&fit=crop&w=1920&q=80')" }} className="fixed inset-0 flex items-center justify-center p-4 bg-cover bg-center bg-black bg-opacity-50 overflow-y-auto backdrop-blur-sm">
            <div className="relative max-h-[90vh] overflow-y-auto scrollbar-hide w-full max-w-2xl bg-[#151C1F] p-8 rounded-3xl shadow-2xl border border-[#263238]">
                <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC36] to-[#FFC107] mb-8 text-center animate-pulse">
                    Let's Personalize Your Experience
                </h1>

                {/* Gender Section */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#B4E794] mb-6">What is your gender?</h2>
                    <div className="flex justify-center gap-8 mb-4">
                        <button
                            onClick={() => setGender('male')}
                            className={clsx(
                                "p-6 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg",
                                gender === 'male'
                                    ? "bg-gradient-to-br from-[#4caf50] to-[#3E7D32] shadow-[#4caf50]/50"
                                    : "bg-[#263238] hover:bg-[#3E7D32]/30"
                            )}
                        >
                            <FaMale className="text-6xl text-[#F1F8E9]" />
                        </button>
                        <button
                            onClick={() => setGender('female')}
                            className={clsx(
                                "p-6 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg",
                                gender === 'female'
                                    ? "bg-gradient-to-br from-[#FFC107] to-[#FFCC36] shadow-[#FFCC36]/50"
                                    : "bg-[#263238] hover:bg-[#FFC107]/30"
                            )}
                        >
                            <FaFemale className="text-6xl text-[#F1F8E9]" />
                        </button>
                    </div>
                </section>

                {/* Car Pool Section */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#B4E794] mb-6">Car Pooling Preference</h2>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        {['Low', 'Medium', 'High'].map((level) => (
                            <button
                                key={level}
                                onClick={() => setCarPoolPreference(level.toLowerCase())}
                                className={clsx(
                                    "py-3 rounded-xl transition-all duration-300 border-2 font-semibold",
                                    carPoolPreference === level.toLowerCase()
                                        ? "border-[#FFCC36] bg-[#FFC107]/20 text-[#FFCC36] shadow-[#FFCC36]/30 shadow-lg"
                                        : "border-[#263238] text-[#F1F8E9] hover:border-[#FFCC36] hover:text-[#FFCC36]"
                                )}
                            >
                                {level} Preference
                            </button>
                        ))}
                    </div>
                </section>

                {/* Activities Section */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-[#B4E794] mb-6">Preferred Activities</h2>
                    <div className="flex justify-center gap-6 mb-8">
                        <ActivityButton
                            icon={<MdDirectionsWalk className="text-5xl" />}
                            active={comfortableWalk}
                            onClick={() => setComfortableWalk(!comfortableWalk)}
                            color="from-[#4caf50] to-[#3E7D32]"
                        />
                        <ActivityButton
                            icon={<FaRunning className="text-5xl" />}
                            active={comfortableRun}
                            onClick={() => setComfortableRun(!comfortableRun)}
                            color="from-[#FFC107] to-[#FFCC36]"
                        />
                        <ActivityButton
                            icon={<IoMdBicycle className="text-5xl" />}
                            active={comfortableCycle}
                            onClick={() => setComfortableCycle(!comfortableCycle)}
                            color="from-[#B4E794] to-[#4caf50]"
                        />
                    </div>
                </section>

                {/* Distance Sections */}
                <div className="space-y-8">
                    {comfortableWalk && (
                        <DistanceSection
                            label="walk"
                            distance={walkDistance}
                            setDistance={setWalkDistance}
                            iconColor="text-[#4caf50]"
                        />
                    )}
                    {comfortableRun && (
                        <DistanceSection
                            label="run"
                            distance={runDistance}
                            setDistance={setRunDistance}
                            iconColor="text-[#FFC107]"
                        />
                    )}
                    {comfortableCycle && (
                        <DistanceSection
                            label="cycle"
                            distance={cycleDistance}
                            setDistance={setCycleDistance}
                            iconColor="text-[#B4E794]"
                        />
                    )}
                </div>

                <div className="mt-12 flex justify-center">
                    <Rbutton className="px-12 py-4 text-xl font-bold rounded-2xl bg-gradient-to-r from-[#4caf50] to-[#3E7D32] hover:from-[#B4E794] hover:to-[#4caf50] transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#4caf50]/30" />
                </div>
            </div>
        </div>
    );
}

function ActivityButton({ icon, active, onClick, color }) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                "p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg",
                active
                    ? `bg-gradient-to-br ${color} shadow-current/50 scale-110`
                    : "bg-[#263238] hover:bg-[#3E7D32]/30"
            )}
        >
            <div className={clsx("transition-colors", active ? "text-[#F1F8E9]" : "text-[#B4E794]")}>
                {icon}
            </div>
        </button>
    );
}

function DistanceSection({ label, distance, setDistance, iconColor }) {
    const distances = ['200m', '600m', '1000m', '1000m+'];
    const icons = {
        walk: <MdDirectionsWalk className="text-3xl" />,
        run: <FaRunning className="text-3xl" />,
        cycle: <IoMdBicycle className="text-3xl" />
    };

    return (
        <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg bg-[#263238] ${iconColor}`}>
                    {icons[label]}
                </div>
                <h3 className="text-lg font-semibold text-[#F1F8E9]">
                    How far are you willing to {label}?
                </h3>
            </div>
            <div className="grid grid-cols-4 gap-3">
                {distances.map((dist) => (
                    <button
                        key={dist}
                        onClick={() => setDistance(dist)}
                        className={clsx(
                            "py-3 rounded-xl transition-all duration-300 border-2 font-medium",
                            distance === dist
                                ? "border-[#FFCC36] bg-[#FFC107]/20 text-[#FFCC36] shadow-[#FFCC36]/30 shadow-inner"
                                : "border-[#263238] text-[#F1F8E9] hover:border-[#FFCC36] hover:text-[#FFCC36]"
                        )}
                    >
                        {dist}
                    </button>
                ))}
            </div>
        </div>
    );
}