
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


export default function Home() {




  return (
        <div className="">
            <Spotlight className="">
            </Spotlight>
            <Hero5 />
            <Stats1 />
            <BentoGrid />
            <InfiniteMovingCards items={[{name: 'helo', quote: "hi", title: 'heys'}]}/>
            <Footer1 />
        </div>

  );
}
