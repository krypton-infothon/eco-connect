
import Image from "next/image";
import React from 'react';

import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import HomePageHero from "@/components/HomePageHero";


export default function Home() {




  return (
        <div>
            <HomePageHero />
        </div>

  );
}
