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
        <div className="bg-gradient-to-br from-errieBlack to-gunmetal border-2 border-accent/30 rounded-2xl shadow-2xl backdrop-blur-sm
  relative overflow-hidden before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,193,7,0.1)_50%,transparent_75%)] before:opacity-0 before:animate-shine
  hover:before:opacity-100 transition-all duration-300 hover:border-accent/50">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-errieBlack to-gunmetal px-6 py-4 rounded-t-2xl flex items-center gap-4">
                <div className="border-2 border-primary rounded-full p-1 relative
      before:absolute before:inset-0 before:border-2 before:border-accent/50 before:rounded-full before:animate-pulse">
                    <UserAvatar />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-honeydew">{user.username}</h2>
                </div>
            </div>
            {/* Card Body */}
            <div className="p-6 space-y-6">
                <div className="text-center">
                    <div className="inline-block bg-primary rounded-full px-6 py-3">
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
    );
};

export default CheckPoints;