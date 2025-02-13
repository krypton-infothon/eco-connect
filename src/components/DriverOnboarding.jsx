"use client"
import React from 'react'
import { useState } from 'react';
import Rbutton from './Rbutton';
import clsx from 'clsx';
import {FaFemale, FaMale, FaRunning} from "react-icons/fa";
import {IoMdBicycle} from "react-icons/io";
import {MdDirectionsWalk} from "react-icons/md";
import { FaCarAlt } from "react-icons/fa";

const DriverOnboarding = () => {
    const onClose = () => {
        router = useRouter();
        router.push("/home");
    }
    const [vehicleType, setVehicleType] = useState('')
    const [vehicleNumber, setVehicleNumber] = useState('');
    const handleClick = (action, value) => {
        action(value);
    }
    return (
        <div>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto overflow-x-hidden">
                <div className="overflow-y-auto relative max-h-[90vh] scrollbar-hide">
                    <div className="bg-[#B4E794] p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">What Type Of Vehicle Are You Driving?</h2>
                            <div className="flex gap-[10%] justify-center m-2">
                                <button onClick={() => handleClick(setVehicleType, 'car')} className={clsx("border-s-green-950 text-xl text-black hover:bg-green-700 hover:text-white rounded-md px-3.5 py-4", vehicleType === 'car' ? "bg-green-600" : "bg-[#d5fabe]")}>
                                    <FaCarAlt />
                                </button>
                                <button onClick={() => handleClick(setVehicleType, 'auto')} className={clsx("border-s-green-950 text-xl text-black hover:bg-green-700 hover:text-white rounded-md px-3.5 py-4", vehicleType === 'auto' ? "bg-green-600" : "bg-[#d5fabe]")}>
                                    AutoRikshaw
                                </button>
                            </div>
                        <h2 className="text-xl font-bold text-gray-800 mb-4">What is your vehicle Number?</h2>
                        <div>
                            <input type={"text"} value={vehicleNumber} onChange={(e) => {setVehicleNumber(e.target.value)}} placeholder={"Enter your Vehicle Number"}/>
                        </div>
                        <Rbutton>

                        </Rbutton>
                    </div>

                 </div>

          </div>
        </div>
    )
}
export default DriverOnboarding
