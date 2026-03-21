
import React from 'react';
import { motion } from 'motion/react';
import { Zap, Trophy, Clock, CheckCircle2 } from 'lucide-react';

export const BookerGettingStarted: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const businessEvents = [
    {
      title: "CONFERENCES & SUMMITS",
      description: "Our professional comedians have years of experience tailoring their sets for high-pressure corporate environments."
    },
    {
      title: "AWARDS CEREMONIES",
      description: "Our professional comedians have years of experience tailoring their sets for high-pressure corporate environments."
    },
    {
      title: "CHRISTMAS PARTIES",
      description: "Our professional comedians have years of experience tailoring their sets for high-pressure corporate environments."
    },
    {
      title: "TEAM BUILDING DAYS",
      description: "Our professional comedians have years of experience tailoring their sets for high-pressure corporate environments."
    },
    {
      title: "PRODUCT LAUNCHES",
      description: "Our professional comedians have years of experience tailoring their sets for high-pressure corporate environments."
    },
    {
      title: "AFTER DINNER SPEAKING",
      description: "Our professional comedians have years of experience tailoring their sets for high-pressure corporate environments."
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 bg-[#0a0e1a] min-h-screen text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Why Book a Comedian Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none mb-6">
                WHY BOOK A <br />
                <span className="text-red-600">COMEDIAN?</span>
              </h1>
              <p className="text-slate-400 text-lg italic max-w-lg">
                Comedy is the secret ingredient that turns a good event into a memorable one.
              </p>
            </motion.div>

            <div className="space-y-10">
              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-red-600">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-2">BREAK THE ICE</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                    A good comedian gets everyone laughing together, creating instant connection and positive energy in the room.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-red-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-2">MEMORABLE MOMENTS</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                    People remember how you made them feel. A great comedy set creates stories your team will talk about for years.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-red-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic mb-2">ENERGIZE THE ROOM</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                    After a long day of meetings or presentations, comedy is the perfect way to lift spirits and re-engage your audience.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Audience laughing" 
                className="w-full h-full object-cover grayscale opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent"></div>
            </div>
            
            {/* Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-white/10 flex items-center gap-4 bg-slate-900/80 backdrop-blur-xl"
            >
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-slate-900"></div>
                <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-slate-900"></div>
              </div>
              <span className="text-xs font-black uppercase italic tracking-widest">500+ Corporate Acts</span>
            </motion.div>
          </motion.div>
        </section>

        {/* Perfect for Any Business Event Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
              PERFECT FOR <span className="text-orange-500">ANY BUSINESS EVENT</span>
            </h2>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {businessEvents.map((event, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-card p-8 rounded-3xl border-white/5 hover:border-red-600/30 transition-all group"
              >
                <div className="w-12 h-1 bg-red-600 mb-8 rounded-full group-hover:w-20 transition-all duration-500"></div>
                <h3 className="text-xl font-black uppercase italic mb-4">{event.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
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
                READY TO BOOK TALENT?
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Join thousands of bookers already using League of Comedy. Create your profile in 30 seconds.
              </p>
              
              <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl shadow-red-900/40 active:scale-95 italic uppercase tracking-wider mb-10">
                Create Booker Profile
              </button>

              <div className="flex flex-wrap justify-center gap-8 text-slate-400 text-sm font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  Easy Setup
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  No Hidden Fees
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-red-600" />
                  Cancel Anytime
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
