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

                <BarChart3 className="h-5 w-5" />
                <span className="text-sm font-medium">Dex Screener</span>
              </a>
              
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white transition-all duration-300 hover:bg-white/20 hover:text-yellow-300"
                aria-label="Twitter"
              >
                <X className="h-5 w-5" />
                <span className="text-sm font-medium">Twitter</span>
              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer