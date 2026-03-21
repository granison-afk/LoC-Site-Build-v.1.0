
import React, { useState } from 'react';
import { PageType } from '../types';
import { Menu, X, QrCode, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  navigateTo: (page: PageType, tab?: string) => void;
  onPostSpot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo, onPostSpot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOMEBASE', page: PageType.HOME },
    { label: 'GIGS BOARD', page: PageType.OPPORTUNITIES },
    { label: 'LEADERBOARDS', page: PageType.LEADERBOARDS },
    { label: 'PRICING', page: PageType.PRICING },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0e1a]/95 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Mobile Location */}
          <div className="flex items-center gap-4">
            <div 
              className="flex items-center gap-2 cursor-pointer group shrink-0"
              onClick={() => navigateTo(PageType.HOME)}
            >
              <img 
                src="https://leagueofcomedy.com/wp-content/uploads/2024/09/League-of-Comedy-Logo_Classic-2.png" 
                alt="League of Comedy"
                className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Mobile Location Selector */}
            <div className="hidden sm:flex lg:hidden items-center gap-1 text-[#8892a4] text-[10px] font-black uppercase tracking-widest">
              <Menu className="w-3 h-3 text-amber-500" />
              <span>London, UK</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => navigateTo(item.page)}
                className={`text-xs font-bold uppercase tracking-widest transition-all hover:underline underline-offset-8 decoration-white/20 ${
                  currentPage === item.page ? 'text-brand-gradient' : 'text-[#8892a4] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Area */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              className="p-1.5 sm:p-2 text-[#8892a4] hover:text-white transition-colors"
              title="QR Scan"
            >
              <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <button 
              onClick={() => navigateTo(PageType.DASHBOARD)}
              className="hidden md:flex text-[#8892a4] hover:text-white transition-colors p-2 bg-[#0f1628] rounded-lg border border-white/5"
            >
              <LayoutDashboard className="w-5 h-5" />
            </button>
            
            <button 
                onClick={onPostSpot}
                className="bg-brand-gradient hover:opacity-90 text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-black uppercase italic transition-all shadow-lg active:scale-95 whitespace-nowrap"
            >
              POST SPOT
            </button>

            {/* Mobile menu button - Simplified for mobile-first feel */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#8892a4] p-1.5 sm:p-2 bg-[#131b2e] rounded-lg border border-white/5">
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden glass-card bg-[#0a0e1a] border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => { navigateTo(item.page); setIsOpen(false); }}
                className={`block w-full text-left py-2 text-sm font-bold uppercase tracking-widest ${
                  currentPage === item.page ? 'text-brand-gradient' : 'text-[#8892a4]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/5 space-y-3">
              <button 
                onClick={() => { navigateTo(PageType.DASHBOARD); setIsOpen(false); }} 
                className="w-full text-center bg-[#131b2e] text-white py-3 rounded-xl font-bold uppercase text-xs italic tracking-wider"
              >
                DASHBOARD
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
