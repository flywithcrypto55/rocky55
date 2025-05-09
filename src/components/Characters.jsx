import React from 'react'
import { motion } from "framer-motion"
import { characters } from '../constants'
const Characters = () => {
  return (
    <div>
      {/* Characters Section */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 py-16">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl font-bold text-yellow-300 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] md:text-4xl">
                  Meet the Characters
                </h2>
                <p className="mt-4 text-white">Get to know SpongeBob and his friends from Bikini Bottom!</p>
              </motion.div>
      
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {characters.map((character, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="group relative overflow-hidden rounded-xl backdrop-blur-sm border border-white/20 bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                    style={{
                        boxShadow: `0 0 15px 2px ${character.color.replace("bg-", "").replace("-400", "")}`,
                    }}
                  >
                    <div
                      className={`absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-50 blur-2xl transition-all duration-500 ${character.color} group-hover:opacity-80 group-hover:blur-3xl`}
                    />
      
                    <div className="relative z-10 p-6">
                      <div className="mb-6 flex items-center justify-center">
                        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-white/50 transition-transform duration-500 group-hover:scale-110">
                          <img
                            src={character.imgPath}
                            alt={character.name}
                            width={196}
                            height={196}
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <h3 className="mb-1 text-center text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">
                        {character.name}
                      </h3>
                      <p className="mb-3 text-center text-sm text-yellow-200">{character.role}</p>
                      <p className="text-center text-white/80 transition-colors duration-300 group-hover:text-white">
                        {character.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
      {/* <Characters/> */}
    </div>
  )
}

export default Characters