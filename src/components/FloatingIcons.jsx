import { Coins, Crown, Rocket, Sparkles, Trophy, Zap , } from 'lucide-react'
import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
const FloatingIcons = () => {
      const icons = [Coins, Sparkles, Zap, Trophy, Crown, Rocket,]
  return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Pepes */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`pepe-${index}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: Math.random() * 360,
            opacity: 0.7,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 5 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          <img
            src="/images/bob/patrick.png"
            alt="Floating Pepe"
            className="w-10 h-10 md:w-16 md:h-16"
            style={{
              filter: `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 5px rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5))`,
            }}
          />
          
        </motion.div>
      ))}

      {/* Floating Icons */}
      {[...Array(10)].map((_, index) => {
        const IconComponent = icons[index % icons.length]
        const hue = Math.floor(Math.random() * 360)
        const size = 10 + Math.random() * 20

        return (
          <motion.div
            key={`icon-${index}`}
            className="absolute text-white"
            initial={{
              x: Math.random() * window.innerWidth,
              y: -100,
              opacity: 0.5 + Math.random() * 0.5,
            }}
            animate={{
              y: window.innerHeight + 100,
              rotate: Math.random() * 720,
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              filter: `hue-rotate(${hue}deg) drop-shadow(0 0 3px hsla(${hue}, 100%, 70%, 0.8))`,
            }}
          >
            <IconComponent size={size} />
          </motion.div>
        )
      })}


          {/* Floating krab */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`pepe-${index}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: Math.random() * 360,
            opacity: 0.7,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 5 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
            <img
            src="/images/bob/krab.png"
            alt="Floating Pepe"
            className="w-10 h-10 md:w-16 md:h-16"
            style={{
              filter: `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 5px rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5))`,
            }}
          />
        </motion.div>
      ))}


      
          {/* Floating sponge */}
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={`pepe-${index}`}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: Math.random() * 360,
            opacity: 0.7,
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: Math.random() * 720,
          }}
          transition={{
            duration: 5 + Math.random() * 20,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
            <img
            src="/images/bob/bobnew.png"
            alt="Floating Pepe"
            className="w-6 h-10 md:w-16 md:h-16"
            style={{
              filter: `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 5px rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.5))`,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

const globalStyles = `
  .shadow-rainbow {
    box-shadow: 
      0 0 10px rgba(150, 255, 150, 0.5),
      0 0 20px rgba(150, 150, 255, 0.3),
      0 0 30px rgba(255, 150, 255, 0.2);
  }
  
  .text-shadow-glow {
    text-shadow: 
      0 0 10px rgba(255, 255, 255, 0.8),
      0 0 20px rgba(150, 255, 150, 0.6),
      0 0 30px rgba(150, 150, 255, 0.4);
  }
`
export default FloatingIcons

