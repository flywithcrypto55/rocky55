import React from 'react'
import { motion } from "framer-motion"
const MiniGame = () => {
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
            SpongeBob Mini-Games
          </h2>
          <p className="mt-4 text-white">Play these fun mini-games and have a blast in Bikini Bottom!</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Jellyfish Catcher",
              description: "Catch as many jellyfish as you can in Jellyfish Fields before time runs out!",
              color: "from-pink-400 to-purple-500",
              icon: <img className='size-9' src="/images/bob/jellyfish.png" alt="Jellyfish Emoji" />,
              difficulty: "Easy",
            },
            {
              title: "Krabby Patty Stacker",
              description: "Stack the perfect Krabby Patty ingredients as they fall from above!",
              color: "from-red-500 to-orange-400",
              icon: "🍔",
              difficulty: "Medium",
            },
            {
              title: "Bubble Blower",
              description: "Create the perfect bubble by timing your blows just right!",
              color: "from-blue-400 to-cyan-300",
              icon: <img className='size-9' src="/images/bob/bubbles.png" alt="bubble Emoji" />,
              difficulty: "Easy",
            },
            {
              title: "Car School Dash",
              description: "Help SpongeBob navigate through the car course without crashing!",
              color: "from-green-400 to-emerald-600",
              icon:  <img className='size-13 ' src="/images/bob/carwbg.gif" alt="bubble Emoji" />,
              difficulty: "Hard",
            },
            {
              title: "Sandy's Karate Chop",
              description: "Test your reflexes by chopping objects that appear on screen!",
              color: "from-amber-400 to-yellow-500",
              icon: "🥋",
              difficulty: "Medium",
            },
            {
              title: "Plankton's Escape",
              description: "Help Plankton navigate through the Krusty Krab to steal the secret formula!",
              color: "from-emerald-500 to-green-700",
              icon: <img className='size-12' src="/images/bob/plankton.png" alt="plankton Emoji" />,
              difficulty: "Hard",
            },
          ].map((game, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-70 transition-opacity duration-500 group-hover:opacity-80`}
              />

              {/* Game Content */}
              <div className="relative z-10 p-6">
                {/* Game Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/30 text-4xl backdrop-blur-md transition-transform duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                    {game.icon}
                  </div>
                </div>

                {/* Game Title */}
                <h3 className="mb-2 text-center text-xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-300">
                  {game.title}
                </h3>

                {/* Difficulty Badge */}
                <div className="mb-3 flex justify-center">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      game.difficulty === "Easy"
                        ? "bg-green-500/70"
                        : game.difficulty === "Medium"
                          ? "bg-yellow-500/70"
                          : "bg-red-500/70"
                    }`}
                  >
                    {game.difficulty}
                  </span>
                </div>

                {/* Game Description */}
                <p className="mb-4 text-center text-white/90 transition-colors duration-300 group-hover:text-white">
                  {game.description}
                </p>

                {/* Play Button */}
                <div className="flex justify-center">
                  <button className="relative overflow-hidden rounded-full bg-yellow-400 px-6 py-2 font-bold text-blue-800 transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50">
                    <span className="relative z-10">Coming soon...</span>
                    <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-300 group-hover:translate-x-0"></span>
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -bottom-2 -left-2 text-white/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="h-16 w-16 rounded-full border-4 border-dashed border-white/20"></div>
              </motion.div>

              <motion.div
                className="absolute -right-2 -top-2 text-white/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <div className="h-12 w-12 rounded-full border-4 border-dashed border-white/20"></div>
              </motion.div>

              {/* Interactive Game Elements */}
              {game.title === "Jellyfish Catcher" && (
                <motion.div
                  className="absolute right-6 top-20 text-pink-300"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <img className='size-5' src="/images/bob/jellyfish.png" alt="Jellyfish Emoji" />

                </motion.div>
              )}

              {game.title === "Bubble Blower" && (
                <>
                  <motion.div
                    className="absolute left-8 top-16 text-blue-200 opacity-70"
                    animate={{
                      y: [0, -40],
                      scale: [1, 1.5],
                      opacity: [0.7, 0],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                  >
                   <img className='size-9' src="/images/bob/bubbles.png" alt="bubble Emoji" />
                  </motion.div>
                  <motion.div
                    className="absolute right-8 top-20 text-blue-200 opacity-70"
                    animate={{
                      y: [0, -40],
                      scale: [1, 1.5],
                      opacity: [0.7, 0],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  >
                  <img className='size-9' src="/images/bob/bubbles.png" alt="bubble Emoji" />
                  </motion.div>
                </>
              )}

              {game.title === "Krabby Patty Stacker" && (
                <motion.div
                  className="absolute right-8 top-24"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  🍔
                </motion.div>
              )}
                
                {game.title === "Plankton's Escape" && (
                <motion.div
                  className="absolute right-8 top-24"
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                 <img className='size-10 ' src="/images/bob/plankton.png" alt="plankton Emoji" />
                </motion.div>
              )}

            {game.title === "Car School Dash" && (
                <motion.div
                  className="absolute right-8 top-24"
                  animate={{
                    x: [0, -40],
                    scale: [1, 1.5],
                    opacity: [0.8, 0],
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
                >
                 <img className='size-10 ' src="/images/bob/carwbg.gif" alt="car Emoji" />
                </motion.div>
              )}    



            </motion.div>
          ))}
        </div>
        </section> 
    </div>
  )
}

export default MiniGame