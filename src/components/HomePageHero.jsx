"use client"
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight, PhoneCall } from "lucide-react";

export const Hero5 = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(
        () => ["Environment Friendly", "Car Pooling", "Cycling", "walking", "Running"],
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (titleNumber === titles.length - 1) {
                setTitleNumber(0);
            } else {
                setTitleNumber(titleNumber + 1);
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    return (
        <div className="w-full">
            <div className="container mx-auto">
                <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
                    <div>
                    </div>
                    <div className="flex gap-4 flex-col">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-Lexend">
                            <span className="text-honeydew font-Lexend">Your Rides,<span className="text-primary font-Lexend">Our Responsibility.</span> </span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center font-Lexend md:pb-4 md:pt-1">
                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-Lexend font-semibold"
                                        initial={{ opacity: 0, y: "-100" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? {
                                                    y: 0,
                                                    opacity: 1,
                                                }
                                                : {
                                                    y: titleNumber > index ? -150 : 150,
                                                    opacity: 0,
                                                }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
              </span>
                        </h1>

                        <p className="text-lg md:text-xl font-Lexend leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                            Carpool, cycle, or take public transport—reduce your carbon footprint while commuting smarter!
                        </p>
                    </div>
                    <div className="flex flex-row gap-3 justify-center align-center gap-4">
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg" />
                            <div className="px-8 py-2  font-Lexend bg-gunmetal rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                Get A Ride
                            </div>
                        </button>
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg" />
                            <div className="px-8 py-2 font-Lexend bg-gunmetal rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                Sign Up
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
