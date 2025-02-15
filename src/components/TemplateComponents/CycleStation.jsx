import React from 'react'
import { IoMdBicycle } from "react-icons/io";

const CycleStation = ({station}) => {
    return (
        <div className='flex justify-between items-center align-middle gap-6 mx-6'>
            <div className="text-5xl text-white mb-4 font-bold bg-green-900 rounded-[100%] p-2">
                <IoMdBicycle/>
            </div>
            <div>
                <p className="text-2xl font-bold text-green-900 mb-4">{station.name}</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-green-900 mb-4">{station.distance}</p>
            </div>
        </div>
    )
}
export default CycleStation
