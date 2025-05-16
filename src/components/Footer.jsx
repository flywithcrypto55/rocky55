import { BarChart3, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div>
          {/* Footer */}
      <footer className="relative z-10 mt-16 bg-blue-800/50 py-6 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-white">© {new Date().getFullYear()} SpongeBob Adventure</p>

            <p className="text-[12px] py-2 text-white">
                    Made with 💛 & passion by <a href="https://x.com/zeusgodgame" className="text-yellow-500 hover:underline">SpongebobFan</a> 
                    </p>

            <div className="flex items-center gap-4">
              <a
                href="https://dexscreener.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-yellow-300"
                aria-label="Dex Screener"
              >

                <img className='size-5' src="/images/DexLogo.png" alt="dex" />
                {/* <span className="text-sm font-medium">Dex Screener</span> */}
              </a>
              
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-yellow-300"
                aria-label="Twitter"
              >
                 <img className='size-5' src="/images/xLogo.png" alt="dex" />
                {/* <span className="text-sm font-medium">Twitter</span> */}
              </a>
              
            </div>
          </div>
        </div>
        <div className='mx-auto px-6 py-2 text-white font-serif text-xs'>
          Disclaimer: $bob is a community-driven memecoin created purely for entertainment. It does not offer financial returns, investment utility, or legal rights of any kind. Nothing stated is financial advice — always DYOR (Do Your Own Research). Participation is at your own risk.
        </div>
      </footer>
    </div>
  )
}

export default Footer