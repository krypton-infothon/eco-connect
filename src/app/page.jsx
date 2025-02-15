
import Image from "next/image";
import React from 'react';

import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {Hero5} from "@/components/HomePageHero";
import {BackgroundLines} from "@/components/ui/Background-lines";
import {Spotlight} from "@/components/ui/Spotlight";
import {Stats1} from "@/components/ui/stats";
import {BentoGrid} from "@/components/ui/bento-grid";
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {Footer1} from "@/components/ui/footer";
import {Grid} from '@/components/ui/grid'
import {endlessBoxes} from "@/lib/contents";


export default function Home() {




  return (
        <div className="bg-gunmetal">
            <Spotlight fill="#00FFFF" />
            <Hero5 />
            <Stats1 />
            <Grid />
            <InfiniteMovingCards items={endlessBoxes}/>
            <Footer1 />
        </div>

  );
}
