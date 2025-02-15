"use client"; // Required for client-side hooks

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import Image from "next/image";
import CheckPoints from "@/components/GreenPointsSystem/CheckPoints"
import Leaderboard from "@/components/points_table"
import MiniLeaderboard from "@/components/ui/mini-leaderboard"
import RedeemCard from "@/components/GreenPointsSystem/redeemCard"

const giftCards = [
  { id: 1, name: "Amazon Gift Card", img: "/amazon.jpg", points: 500, description: 'hi' },
  { id: 2, name: "Flipkart Gift Card", img: "/flipkart.jpg", points: 700, description: 'hi' },
  { id: 3, name: "Starbucks Gift Card", img: "/starbucks.jpg", points: 300, description: 'hi' },
  { id: 4, name: "Domino's Gift Card", img: "/dominos.jpg", points: 600, description: 'hi' },
];

export default function RedeemPoints() {
  const router = useRouter(); // ✅ Now works correctly

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Points to Cash</h1>

      {/* User Points & Leaderboard Section */}
      <div className="flex gap-4 mb-6">
        <div>
            <CheckPoints></CheckPoints>
        </div>
        <button className= " flex px-4 py-2 rounded-md -mt-15 -ml-15 -mr-15" 
          onClick={() => router.push("/leaderboard")}
        >
          <MiniLeaderboard></MiniLeaderboard>
        </button>
      </div>

      {/* Gift Card Options */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {giftCards.map((carditem) => {
          return (<RedeemCard title={carditem.name} cost={carditem.points} logo={carditem.img} description={carditem.description} />)
})}
      </div>
    </div>
  );
}
