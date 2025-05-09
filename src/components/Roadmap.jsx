import React from 'react'
import { motion } from "framer-motion"
import { roadmapItems } from "../constants";
import { cn } from '../lib/utils';
import { Anchor, BikeIcon, Calendar, Compass, Fish, Shell, Star, Waves } from "lucide-react";
const Roadmap = () => {
  return (
    <div>
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
                  {/* {item.icon} */}
                  <Waves className="h-6 w-6" />
      
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
    </div>
  )
}

export default Roadmap