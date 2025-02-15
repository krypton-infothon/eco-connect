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

    const distances = ['200m', '600m', '1000m', 'More than 1000m'];
    const [comfortableWalk, setComfortableWalk] = useState(false);
    const [gender, setGender] = useState('');
    const [walkDistance, setWalkDistance] = useState('');
    const [comfortableRun, setComfortableRun] = useState(false);
    const [runDistance, setRunDistance] = useState('');
    const [comfortableCycle, setComfortableCycle] = useState(false);
    const [cycleDistance, setCycleDistance] = useState('');
    const [carPoolPreference, setCarPoolPreference] = useState('');

    return (
        <div className="fixed inset-0 flex items-center justify-center p-4 bg-cover bg-center bg-black bg-opacity-50 overflow-y-auto" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1636930312719-e12a708880d5?auto=format&fit=crop&w=1920&q=80')" }}>
            <div className="relative max-h-[90vh] overflow-y-auto scrollbar-hide w-2/6  bg-gray-900 p-7 rounded-2xl shadow-lg">
                <h2 className="text-xl font-bold text-white mb-4">What is your gender?</h2>
                <div className="flex justify-center gap-5 mb-4">
                    <button onClick={() => setGender('male')} className={clsx("text-5xl p-4 rounded-md transition", gender === 'male' ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <FaMale /> </button>
                    <button onClick={() => setGender('female')} className={clsx("text-5xl p-4 rounded-md transition", gender === 'female' ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <FaFemale /> </button>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-4">Car Pooling Preference</h2>
                <div className="flex justify-center gap-5 mb-4">
                    {['Low', 'Medium', 'High'].map((level) => (
                        <button key={level} onClick={() => setCarPoolPreference(level.toLowerCase())} className={clsx("px-4 py-2 rounded-md transition", carPoolPreference === level.toLowerCase() ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}>{level} Preference</button>
                    ))}
                </div>

                <h2 className="text-xl font-bold text-white mb-4">What Are You Comfortable With?</h2>
                <div className="flex justify-center gap-5 mb-4">
                    <button onClick={() => setComfortableWalk(!comfortableWalk)} className={clsx("text-5xl p-4 rounded-md transition", comfortableWalk ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <MdDirectionsWalk /> </button>
                    <button onClick={() => setComfortableRun(!comfortableRun)} className={clsx("text-5xl p-4 rounded-md transition", comfortableRun ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <FaRunning /> </button>
                    <button onClick={() => setComfortableCycle(!comfortableCycle)} className={clsx("text-5xl p-4 rounded-md transition", comfortableCycle ? "bg-green-500 text-white" : "bg-gray-700 text-gray-300 hover:bg-green-600")}> <IoMdBicycle /> </button>
                </div>
                
                <div className="mt-4 space-y-3">
                    {comfortableWalk && (
                        <div>
                            <p className="text-white text-lg">How far are you willing to walk?</p>
                            <div className="flex gap-5">
                                {distances.map((dist) => (
                                    <label key={dist} className="flex items-center space-x-2 text-white cursor-pointer text-nowrap">
                                        <input  type="radio" name="walkDistance" value={dist} checked={walkDistance === dist} onChange={(e) => setWalkDistance(e.target.value)} className="hidden peer" />
                                       
                                        <span className="px-2 py-2 rounded-md bg-gray-700 peer-checked:bg-green-500 peer-checked:text-white transition text-lg">{dist}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                    {comfortableRun && (
                        <div>
                            <p className="text-white text-lg">How far are you willing to run?</p>
                            <div className="flex gap-5">
                                {distances.map((dist) => (
                                    <label key={dist} className="flex items-center space-x-2 text-white cursor-pointer text-nowrap">
                                        <input type="radio" name="runDistance" value={dist} checked={runDistance === dist} onChange={(e) => setRunDistance(e.target.value)} className="hidden peer" />
                                        <span className="px-2 py-2 rounded-md bg-gray-700 peer-checked:bg-green-500 peer-checked:text-white transition text-lg">{dist}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                    {comfortableCycle && (
                        <div>
                            <p className="text-white text-lg">How far are you willing to cycle?</p>
                            <div className="flex gap-5">
                                {distances.map((dist) => (
                                    <label key={dist} className="flex items-center space-x-2 text-white cursor-pointer text-nowrap">
                                        <input type="radio" name="cycleDistance" value={dist} checked={cycleDistance === dist} onChange={(e) => setCycleDistance(e.target.value)} className="hidden peer" />
                                        <span className="px-2 py-2 rounded-md bg-gray-700 peer-checked:bg-green-500 peer-checked:text-white transition text-lg">{dist}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <Rbutton />
            </div>
        </div>
    );
}
