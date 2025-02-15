"use client"; // Required for client-side hooks

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import Image from "next/image";

const giftCards = [
  { id: 1, name: "Amazon Gift Card", img: "/amazon.jpg", points: 500 },
  { id: 2, name: "Flipkart Gift Card", img: "/flipkart.jpg", points: 700 },
  { id: 3, name: "Starbucks Gift Card", img: "/starbucks.jpg", points: 300 },
  { id: 4, name: "Domino's Gift Card", img: "/dominos.jpg", points: 600 },
];

export default function RedeemPoints() {
  const router = useRouter(); // ✅ Now works correctly

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Points to Cash</h1>

      {/* User Points & Leaderboard Section */}
      <div className="flex gap-4 mb-6">
        <div className="bg-green-200 p-4 rounded-xl shadow-md text-center w-40">
          <p className="text-lg text-blackfont-semibold">User Points</p>
          <p className="text-2xl font-bold text-green-600">1200</p>
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-600"
          onClick={() => router.push("/leaderboard")}
        >
          Leaderboard
        </button>
      </div>

      {/* Gift Card Options */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {giftCards.map((card) => (
          <div key={card.id} className="bg-white p-12 rounded-xl shadow-md text-center w-60 ">
            <Image src={card.img} alt={card.name} width={100} height={60} className="mx-auto" />
            <p className="text-sm font-semibold mt-2">{card.name}</p>
            <p className="text-xs text-gray-500">Redeem for {card.points} points</p>
            <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded-md text-xs hover:bg-green-600">
              Redeem
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
