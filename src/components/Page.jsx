import React, { useEffect, useState } from 'react';
import { Anchor, BikeIcon, Calendar, Compass, Fish, Shell, Star, Waves } from "lucide-react";
import { roadmapItems,characters, bikini } from "../constants";
import { motion } from "framer-motion"
import { cn } from '../lib/utils';
import Characters from './Characters';
import Seaweed from './Seaweed';
import Header from './Header';
import Roadmap from './Roadmap';
import Locations from './Locations';
import MiniGame from './MiniGame';
import Footer from './Footer';

const Page = () => {

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">  
        <Seaweed/>
        <Header/>
        <Characters/>
        <Locations/>
        <MiniGame/>
        <Roadmap/>
        <Footer/>
    </main>
  )
}

export default Page