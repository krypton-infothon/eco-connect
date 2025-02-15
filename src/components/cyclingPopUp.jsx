import React from 'react'
import CycleStation from "@/components/TemplateComponents/CycleStation";
const cycleStations = [
    {
        name: 'name1',
        distance: "3km"
    },
    {
        name: 'name1',
        distance: "3km"
    },
    {
        name: 'name1',
        distance: "3km"
    },
    {
        name: 'name1',
        distance: "3km"
    }
]

const CyclingPopUp = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 overflow-y-auto ">
            <div className="overflow-y-auto relative max-h-[90vh] scrollbar-hide">
                <div className="bg-[#B4E794] p-6 rounded-lg shadow-lg">
                        <div>
                            <h1 className="text-6xl text-green-900 justify-center align-middle m-4 pb-2">Cycle Stations Nearby</h1>
                        </div>
                        <div className=" flex flex-col justify-center mx-auto">
                            {cycleStations.map((station, index) => {
                                return (<CycleStation key={index} station={station} />)
                            })}
                        </div>
                    {/* list of cycle stations */}
                </div>
            </div>
        </div>
    )
}
export default CyclingPopUp
