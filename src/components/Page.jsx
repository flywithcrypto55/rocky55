import React, { useEffect, useState } from 'react';

import { roadmapItems } from "../constants";
import { motion } from "framer-motion"
import { cn } from '../lib/utils';
import { Star } from 'lucide-react';

const Page = () => {

    const [bubbles, setBubbles] = useState([]);
    useEffect(() => {
        // Generate random bubbles
        const newBubbles = Array.from({ length: 20 }, (_, i) => ({
          id: i,
          x: Math.random() * 100, // Random horizontal position
          size: Math.random() * 30 + 10, // Random size between 10-40px
          speed: Math.random() * 10 + 5, // Random speed
          delay: Math.random() * 5, // Random delay for animation
        }))
        setBubbles(newBubbles)
      }, [])


  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">  
    Welcome 

       {/* Animated Bubbles */}
       {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-white/30 backdrop-blur-sm"
          style={{
            left: `${bubble.x}%`,
            width: bubble.size,
            height: bubble.size,
            bottom: -100,
          }}
          animate={{
            y: [0, -1000],
            x: [0, Math.sin(bubble.id) * 50],
          }}
          transition={{
            duration: bubble.speed,
            repeat: Number.POSITIVE_INFINITY,
            delay: bubble.delay,
            ease: "linear",
          }}
        />
      ))}

         {/* Seaweed */}
         <div className="absolute bottom-0 left-0 h-32 w-32">
        <motion.div
          className="absolute bottom-0 left-4 h-32 w-8 origin-bottom rounded-t-full bg-green-600"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-16 h-24 w-8 origin-bottom rounded-t-full bg-green-700"
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      <div className="absolute bottom-0 right-0 h-32 w-32">
        <motion.div
          className="absolute bottom-0 right-4 h-32 w-8 origin-bottom rounded-t-full bg-green-600"
          animate={{ rotate: [0, 10, 0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.7, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-16 h-24 w-8 origin-bottom rounded-t-full bg-green-700"
          animate={{ rotate: [0, -10, 0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4.2, ease: "easeInOut", delay: 0.3 }}
        />
      </div>

      {/* Enhanced Header */}
      <header className="relative z-10 w-full bg-blue-600/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between py-4">
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="flex items-center gap-3"
            >
              <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-yellow-400 bg-yellow-300">
                <img
                  src="/placeholder.svg?height=56&width=56"
                  alt="SpongeBob"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <h1 className="text-2xl font-extrabold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-3xl">
                SpongeBob <span className="text-white">Adventure</span>
              </h1>
            </motion.div>

            <motion.nav
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              className="mt-4 flex w-full flex-wrap items-center gap-x-8 gap-y-4 md:mt-0 md:w-auto"
            >
              {["Home", "Characters", "Locations", "Adventures", "Gallery"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative text-white transition-colors duration-300 hover:text-yellow-300"
                >
                  <span>{item}</span>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-yellow-300 transition-all duration-300 hover:w-full"></span>
                </a>
              ))}
              <button className="rounded-full bg-yellow-400 px-6 py-2 font-bold text-blue-800 transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50">
                Play Now
              </button>
            </motion.nav>
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-1 w-full bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400"
        />
      </header>

            {/* Roadmap Section */}
            <section className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-4xl">
            Adventure Roadmap
          </h2>
          <p className="mt-4 text-white">Follow SpongeBob's journey through these exciting milestones!</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={cn(
                "group relative overflow-hidden rounded-xl backdrop-blur-sm",
                "border border-white/20 bg-white/10",
                "transition-all duration-500 hover:-translate-y-2 hover:scale-105",
              )}
              style={{
                boxShadow: `0 0 15px 2px ${item.color.replace("bg-", "").replace("-400", "")}`,
              }}
            >
              <div
                className={cn(
                  "absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-50 blur-2xl transition-all duration-500",
                  item.color,
                  "group-hover:opacity-80 group-hover:blur-3xl",
                )}
              />
              <div className="relative z-10 p-6">
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-500",
                    item.color,
                    "group-hover:scale-110",
                  )}
                >
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">
                  {item.title}
                </h3>
                <p className="text-white/80 transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>
              </div>
              <motion.div
                className="absolute bottom-2 right-2 text-yellow-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Star className="h-6 w-6" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default Page