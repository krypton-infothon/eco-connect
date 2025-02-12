
"use client"
import React from "react"
import { useUser } from "@clerk/nextjs";


const page = () => {
  const user = { ko: "di" }
  console.log(user.ko)

  return (
    <div>
      <p style={{ color: "white" }}>{user.ko}</p>

    </div>
  )
};
export default page;



