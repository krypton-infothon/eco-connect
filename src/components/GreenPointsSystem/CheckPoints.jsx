"use client";
import React from "react";
import UserAvatar from "@/components/TemplateComponents/UserAvatar";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const CheckPoints = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    const router = useRouter();

    if (!isLoaded) {
        return <div className="flex justify-center items-center h-screen text-green-600">Loading...</div>;
    }

    if (!isSignedIn) {
        router.push("/signin");
        return null;
    }

    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-xl">
                {/* Card Header */}
                <div className="bg-green-800 px-6 py-4 rounded-t-2xl flex items-center gap-4">
                    <div className="border-2 border-green-300 rounded-full p-1">
                        <UserAvatar />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-white">{user.username}</h2>
                        <p className="text-green-200 text-sm">Welcome back!</p>
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-6">
                    <div className="text-center">
                        <div className="inline-block bg-green-100 rounded-full px-6 py-3">
                            <span className="text-sm font-semibold text-green-600">AVAILABLE POINTS</span>
                            <div className="mt-2">
                                <span className="text-4xl font-bold text-green-800">500</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-green-700 mb-2">Quick Actions</h3>
                        <div className="flex gap-3">
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                                Redeem Points
                            </button>
                            <button className="border-2 border-green-300 text-green-700 px-4 py-2 rounded-lg text-sm hover:bg-green-50 transition-colors">
                                Earn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckPoints;