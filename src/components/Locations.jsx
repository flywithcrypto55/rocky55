import React from 'react'
import { motion } from "framer-motion"
import { bikini } from '../constants'
const Locations = () => {
  return (
    <div>
             {/* Bikini Bottom Locations Section */}
             <section className="relative z-10 mx-auto max-w-6xl px-4 py-16 bg-blue-700/30 backdrop-blur-sm rounded-xl my-16">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-4xl">
            Explore Bikini Bottom
          </h2>
          <p className="mt-4 text-white">Visit the most iconic locations in SpongeBob's underwater world!</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {bikini.map((location, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105"
              
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${location.color} opacity-80 transition-opacity duration-500 group-hover:opacity-100`}
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <div className="mb-2 h-40 w-full rounded-lg bg-white/20 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={location.imgUrl}
                    alt={location.name}
                    width={20}
                    height={60}
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">
                  {location.name}
                </h3>
                <p className="text-white/90 transition-colors duration-300 group-hover:text-white">
                  {location.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Locations