"use client";  // Ensure it's a client component

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
    const [message, setMessage] = useState("");
    const { getToken } = useAuth();

    useEffect(() => {
        async function fetchData() {
            try {
                const token = await getToken();
                console.log(token) // 
                if (!token) {
                    console.error("No token found");
                    return;
                }

                const res = await fetch("http://localhost:5050/", {
                    headers: {
                        Authorization: `Bearer ${token}`,  //  Send token to Express
                    },
                });

                const data = await res.text();
                setMessage(data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        }

        fetchData();
    }, [getToken]);  //  Re-run if token changes
    return <h1>{message}</h1>;
}

