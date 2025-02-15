"use client"; // Ensure it's a client component

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs"; // Clerk authentication

export default function Home() {
    const [message, setMessage] = useState("");
    const { getToken, isLoaded } = useAuth(); // Check if Clerk is ready

    useEffect(() => {
        async function fetchData() {
            if (!isLoaded) return; // Ensure Clerk is fully loaded

            try {
                const token = await getToken({ forceRefresh: true }); // Force fresh token
                console.log("Fetched Token:", token);

                if (!token) {
                    console.error("No token found");
                    return;
                }

                const res = await fetch("http://localhost:5050/", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Send token to Express

                    },
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.text();
                setMessage(data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }

        fetchData();
    }, [getToken, isLoaded]); //  Only re-run when Clerk is ready

    return <h1>{message}</h1>;
}


