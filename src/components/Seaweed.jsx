import React, { useEffect,useState } from 'react'

import { motion } from "framer-motion"
const Seaweed = () => {

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
    <div>
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
                    y: [0, -9000],
                    x: [0, Math.sin(bubble.id) * 90],
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
    </div>
  )
}

export default Seaweed