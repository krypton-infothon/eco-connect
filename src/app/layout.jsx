
import { Lexend, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, SignUpButton, UserButton, } from "@clerk/nextjs";
import custSignIn from "@/components/custSignIn";

import DeleteAccount from "@/components/deletebutton";

import React from "react";






const geistSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["sans"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "G-GO",
  description: "Now Travel While Reducing Carbon Footprint",
};

export default function RootLayout({ children }) {



  return (<ClerkProvider ><html lang="en">
      <link rel="icon" href="/favicon.png" sizes="any" />
    <body className='bg-gunmetal font-lexend'>


     

      {/*<div className="flex bg-green-800 justify-between">*/}
      {/*  <div className="flex justify-start bg-green-800 p-2 px-2 py-4">*/}
      {/*    <h1 className="text-3xl text-white font-black ">G-Go</h1>*/}
      {/*  </div>*/}
      {/*  <div className="flex justify-end gap-5 m-4">*/}
      {/*    <SignedOut>*/}
      {/*      <SignInButton mode="redirect">*/}
      {/*        <button className="bg-green-500 hover:bg-green-300 font-bold text-sm px-4 py-2 rounded-md">*/}
      {/*          Sign In*/}
      {/*        </button>*/}
      {/*      </SignInButton>*/}

      {/*      <SignUpButton mode="redirect">*/}
      {/*        <button className="bg-green-500 hover:bg-green-300 font-bold text-sm px-4 py-2 rounded-md">*/}
      {/*          Sign up*/}
      {/*        </button>*/}
      {/*      </SignUpButton>*/}
      {/*    </SignedOut>*/}
      {/*    <SignedIn ><UserButton /><br></br>*/}
      {/*    <DeleteAccount /></SignedIn>*/}

        {/*</div>*/}

      {/*</div>*/}
      {children}
    </body>
  </html>

  </ClerkProvider>






  );
}
