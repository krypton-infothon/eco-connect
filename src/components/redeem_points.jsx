"use client"; // Required for client-side hooks

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router
import Image from "next/image";
import CheckPoints from "@/components/GreenPointsSystem/CheckPoints"
import Leaderboard from "@/components/points_table"
import MiniLeaderboard from "@/components/ui/mini-leaderboard"
import RedeemCard from "@/components/GreenPointsSystem/redeemCard"

const giftCards = [
  { id: 1, name: "Amazon Gift Card", img: "/amazon.jpg", points: 500, description: 'Redeem Amazon Gift Card' },
  { id: 2, name: "Flipkart Gift Card", img: "/flipkart.jpg", points: 700, description: 'Redeem Flipkart Gift Card' },
  { id: 3, name: "Starbucks Gift Card", img: "/starbucks.jpg", points: 300, description: 'Redeem Starbucks Gift Card' },
  { id: 4, name: "Domino's Gift Card", img: "/dominos.jpg", points: 600, description: 'Redeem Domino\'s Gift Card' },
];

export default function RedeemPoints() {
  const router = useRouter(); // ✅ Now works correctly

  return (
      <div className="min-h-screen p-6 flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-errieBlack/90 to-gunmetal/90 z-0" />
          <h1 className="text-5xl font-bold text-honeydew mb-4 relative z-10
    bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent
    animate-text-shine">
              Points to Cash
          </h1>

          {/* User Points & Leaderboard Section */}
          <div className="flex gap-4 mb-6 relative z-10">
              <div className="animate-float">
                  <CheckPoints/>
              </div>
              <button className="px-4 py-2 rounded-md transform transition-all
      hover:scale-105 hover:shadow-glow" onClick={() => router.push("/leaderboard")}>
                  <MiniLeaderboard/>
              </button>
          </div>

          {/* Gift Card Options */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
              {giftCards.map((carditem) => (
                  <div key={carditem.id} className="animate-fade-in-up">
                      <RedeemCard title={carditem.name} cost={carditem.points} logo={carditem.img} description={carditem.description} key={carditem.id} />
                  </div>
              ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 z-0">
              <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full
      filter blur-3xl animate-pulse-slow" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10
      rounded-full filter blur-3xl animate-pulse-slow-delayed" />
          </div>
      </div>
  );
}
