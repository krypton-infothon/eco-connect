"use client"
import React from 'react'
import {CardContainer, CardItem} from "@/components/ui/3d-card";

const RedeemCard = ({title, cost, logo, description}) => {
    return (
        <div >
            <CardContainer className="inter-var w-5/15">
                <CardItem
                    translateZ="100"
                    className="w-full max-w-sm bg-errieBlack p-8 rounded-xl shadow-lg border border-accent"
                >
                    {/* Logo Placeholder */}
                    <CardItem translateZ="50" className="mb-6">
                        <div className="h-24 w-24 bg-black rounded-full mx-auto flex items-center justify-center">
                            {/* <span className="text-white text-xl font-bold">{logo}</span> */}
                            <img src ={logo} alt={logo} className='w-full h-full object-cover border-6 border-black rounded-full'/>
                        </div>
                    </CardItem>

                    {/* Reward Details */}
                    <CardItem translateZ="80" className="text-center mb-6">
                        <h2 className="text-2xl font-bold text-honeydew mb-2">{title}</h2>
                        <p className="text-4xl font-extrabold text-accent mb-4">{cost} PTS</p>
                        <p className="text-honeydew mb-4">
                            {description}
                        </p>
                    </CardItem>

                    {/* Redeem Button */}
                    <CardItem translateZ="120" className="text-center">
                        <button
                            className="bg-accent hover:bg-lighterAccent text-white font-bold py-3 px-8 rounded-full
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