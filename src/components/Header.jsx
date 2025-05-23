import React from 'react'
import { motion } from "framer-motion"
import { BarChart, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
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
                  src="/Spongelogo.png"
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
             
             <div className="flex items-center gap-4">
                <a
                  href="https://dexscreener.com/solana/48jg8os6fhddahz7j2ajru2tjrvdjn3mwuzjraskfcuy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-yellow-300"
                  aria-label="Dex Screener"
                >
                  {/* <BarChart className="h-5 w-5" /> */}
                   <img className='size-5' src="/images/DexLogo.png" alt="dex" />
                </a>
                <a
                  href="https://x.com/spongle4bob"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-yellow-300"
                  aria-label="X"
                >
                  <img className='size-5' src="/images/xLogo.png" alt="dex" />
                </a>
              </div>


              <button onClick={() => {navigate('/game')}} className="rounded-full bg-yellow-400 px-6 py-2 font-bold text-blue-800 transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/50">
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
    </div>
  )
}

export default Header