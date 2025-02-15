"use client"
import React from 'react'
import {CardContainer, CardItem} from "@/components/ui/3d-card";

const RedeemCard = ({title, cost, logo, description}) => {
    return (
        <div >
            <CardContainer className="inter-var">
                <CardItem
                    translateZ="100"
                    className="w-full max-w-sm bg-white p-8 rounded-xl shadow-lg border border-gray-200"
                >
                    {/* Logo Placeholder */}
                    <CardItem translateZ="50" className="mb-6">
                        <div className="h-24 w-24 bg-red-500 rounded-full mx-auto flex items-center justify-center">
                            {/* <span className="text-white text-xl font-bold">{logo}</span> */}
                            <img src ={logo} className=' h-full rounded-full mx-auto flex items-center justify-center'/>
                        </div>
                    </CardItem>

                    {/* Reward Details */}
                    <CardItem translateZ="80" className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
                        <p className="text-4xl font-extrabold text-red-500 mb-4">{cost} PTS</p>
                        <p className="text-gray-600 mb-4">
                            {description}
                        </p>
                    </CardItem>

                    {/* Redeem Button */}
                    <CardItem translateZ="120" className="text-center">
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full
                                    transition-colors duration-200 transform hover:scale-105"
                            onClick={() => console.log('Redeem clicked')}
                        >
                            Redeem Now
                        </button>
                    </CardItem>
                </CardItem>
            </CardContainer>
        </div>
    )
}
export default RedeemCard