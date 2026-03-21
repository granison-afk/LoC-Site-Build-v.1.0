
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Zap, Layout, BarChart3, CheckCircle2 } from 'lucide-react';

const SellingPointCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
  delay: number;
}> = ({ icon, title, line1, line2, delay }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        whileHover={{ scale: 1.04 }}
        className="bg-[#131b2e] border border-white/10 rounded-2xl p-8 aspect-square flex flex-col items-center text-center justify-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(245,101,0,0.25)] hover:border-amber-500/50 relative overflow-hidden h-full"
      >
        <div className="mb-8 relative">
          {/* Live Glow Effect */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-amber-500/30 blur-2xl rounded-full"
          />
          <div className="relative text-slate-500 group-hover:text-amber-500 transition-colors duration-500">
            {React.cloneElement(icon as React.ReactElement, { size: 48, strokeWidth: 1.5 })}
          </div>
        </div>

        <h3 className="text-xl font-black uppercase italic mb-4 tracking-tight text-white group-hover:text-amber-500 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="space-y-3">
          <p className="text-slate-400 text-sm leading-relaxed">
            {line1}
          </p>
          <p className="text-slate-300 text-sm leading-relaxed font-semibold italic">
            {line2}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ProducerGettingStarted: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4 bg-[#0a0e1a] min-h-screen text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
                WHY PRODUCE <br />
                <span className="text-amber-500">WITH LEAGUE?</span>
              </h1>
              <p className="text-slate-400 text-lg italic max-w-lg">
                With Leap Event Technology as our partner, League of Comedy is working with a global leader in ticketing and events.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center lg:justify-end"
          >
            <img 
              src="https://leapevent.tech/wp-content/uploads/2023/03/Leap-press-release-static-TW.png" 
              alt="Leap Event Technology Partnership" 
              className="w-full max-w-xl h-auto drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </section>

        {/* Horizontal Selling Points */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SellingPointCard 
              icon={<Zap />}
              title="SIMPLIFIED MANAGEMENT"
              line1="Seamlessly create and manage events from your own personal dashboard."
              line2="Eliminate the headache of multiple systems with professional tools."
              delay={0}
            />
            <SellingPointCard 
              icon={<Layout />}
              title="FLEXIBLE SALES HUB"
              line1="Schedule promotions, discounts, and VIP ticketing exactly as you like."
              line2="Use high-conversion features and upselling to boost your revenue."
              delay={0.15}
            />
            <SellingPointCard 
              icon={<BarChart3 />}
              title="DETAILED INSIGHTS"
              line1="Get detailed reports of your sales and attendees delivered to your inbox."
              line2="Understand your audience through automated data to optimize every performance."
              delay={0.3}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-12 md:p-20 rounded-[3rem] border-white/5 bg-gradient-to-b from-white/5 to-transparent text-center">
              <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
                READY TO SCALE YOUR SHOWS?
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Create a profile and immediately begin customizing your events with our enterprise-grade tools.
              </p>
              
              <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-12 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-amber-500/40 active:scale-95 italic uppercase tracking-wider mb-10">
                Create Producer Profile
              </button>

              <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  Instant Setup
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  Full Customization
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                  Enterprise Support
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
