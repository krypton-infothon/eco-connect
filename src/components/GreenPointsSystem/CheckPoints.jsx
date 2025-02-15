"use client";
import React from "react";
import UserAvatar from "@/components/TemplateComponents/UserAvatar";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const CheckPoints = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    const router = useRouter();

    if (!isLoaded) {
        return <div className="flex justify-center items-center h-screen text-honeydew">Loading...</div>;
    }

    if (!isSignedIn) {
        router.push("/signin");
        return null;
    }

    return (
        <div >
            <div className="bg-errieBlack border-2 border-accent rounded-2xl shadow-lg w-full max-w-md transition-all duration-300 hover:shadow-xl">
                {/* Card Header */}
                <div className="bg-errieBlack px-6 py-4 rounded-t-2xl flex items-center gap-4">
                    <div className="border-2 border-primary rounded-full p-1">
                        <UserAvatar />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-honeydew">{user.username}</h2>
                    </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-6">
                    <div className="text-center">
                        <div className="inline-block bg-primary  rounded-full px-6 py-3">
                            <span className="text-sm font-semibold text-honeydew">AVAILABLE POINTS</span>
                            <div className="mt-2">
                                <span className="text-4xl font-bold text-honeydew">500</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-errieBlack rounded-lg p-4">
                        <h3 className="text-sm font-semibold text-honeydew mb-2">Quick Actions</h3>
                        <div className="flex gap-3">
                            <button className="bg-primary text-honeydew px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition-colors">
                                Redeem Points
                            </button>
                            <button className="border-2 border-secondary text-honeydew px-4 py-2 rounded-lg text-sm hover:bg-errieBlack transition-colors">
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