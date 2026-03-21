
import React, { useState } from 'react';
import { Check, Zap, Star, Shield, LayoutDashboard, Calendar, Video, Bell, MessageSquare, Briefcase } from 'lucide-react';
import { PageType, UserRole } from '../types';

interface PricingPageProps {
  navigateTo: (page: PageType, tab?: string) => void;
  initialTab?: string | null;
}

export const PricingPage: React.FC<PricingPageProps> = ({ navigateTo, initialTab }) => {
  const [target, setTarget] = useState<UserRole>((initialTab as UserRole) || 'fan');

  React.useEffect(() => {
    if (initialTab && ['fan', 'comedian', 'venue', 'booker'].includes(initialTab)) {
      setTarget(initialTab as UserRole);
    }
  }, [initialTab]);

  const plans = {
    fan: [
      { 
        name: "Free", 
        price: "0", 
        desc: "The basic league experience",
        features: ["Browse shows/comedians/venues", "Earn LAF Points", "Standard Ticketing", "Weekly Newsletter"],
        cta: "Sign Up Free",
        popular: false
      },
      { 
        name: "Superfan", 
        price: "7", 
        desc: "Early access and rewards",
        features: ["All Free features", "Earn LAF Tokens", "24h Early Ticket Access", "Exclusive Content", "Priority Support", "Member-only Discord"],
        cta: "Start Superfan",
        popular: true
      },
      { 
        name: "VIP", 
        price: "15", 
        desc: "The ultimate fan experience",
        features: ["All Superfan features", "1.5x LAF Token Rate", "Meet & Greet Invites", "Exclusive VIP Events", "Concierge Booking Service"],
        cta: "Go VIP",
        popular: false
      }
    ],
    comedian: [
      { 
        name: "Rising Star", 
        price: "0", 
        desc: "Get your foot in the door",
        features: ["Basic Profile", "1 Showcase Video", "Apply to 5 gigs/month", "Standard Directory Listing", "Connect 1 Social account"],
        cta: "Start Free",
        popular: false
      },
      { 
        name: "Pro Tier", 
        price: "12", 
        desc: "For serious performers",
        features: ["Unlimited Showcase Videos", "Unlimited Gig Applications", "Featured Directory Spot", "Advanced Analytics", "Verified Badge", "Priority Gig Alerts", "SMS Notifications"],
        cta: "Go Pro",
        popular: true
      }
    ],
    venue: [
      {
        name: "Local Club",
        price: "0",
        desc: "List your local spots",
        features: ["Basic Venue Profile", "Post 2 Spots/month", "Standard Search Listing", "Basic Booking Management"],
        cta: "Register Venue",
        popular: false
      },
      {
        name: "Powerhouse",
        price: "29",
        desc: "The professional venue choice",
        features: ["Unlimited Spot Postings", "Featured Venue Listing", "Advanced Booking Dashboard", "Direct Comedian Messaging", "Contract Templates", "Automated Gig Alerts"],
        cta: "Go Powerhouse",
        popular: true
      }
    ],
    booker: [
      {
        name: "Talent Scout",
        price: "19",
        desc: "Find the best acts",
        features: ["Access to Pro Roster", "Direct Messaging", "Gig Board Access", "Basic Talent Search", "Save Favorites"],
        cta: "Start Scouting",
        popular: false
      },
      {
        name: "Agency",
        price: "49",
        desc: "Enterprise booking tools",
        features: ["Multi-user Access", "Bulk Booking Tools", "Custom Contract Builder", "Payment Escrow Service", "Dedicated Account Manager", "Advanced Talent Analytics"],
        cta: "Start Agency",
        popular: true
      }
    ]
  };

  const getGridCols = () => {
    if (target === 'fan') return 'md:grid-cols-3';
    return 'md:grid-cols-2 max-w-4xl mx-auto';
  };

  return (
    <div className="pt-24 pb-32 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-8xl font-black italic uppercase tracking-tighter mb-6">
            Join the <span className="text-red-600">League</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">Choose the plan that matches your ambition. Whether you're here to watch, perform, or host, we have a tier for you.</p>
          
          <div className="flex flex-wrap justify-center bg-slate-900 p-1 rounded-2xl border border-slate-800 w-fit mx-auto gap-1">
             <button 
              onClick={() => setTarget('fan')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase italic transition-all ${target === 'fan' ? 'bg-amber-500 text-slate-950 shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
             >
               Fans
             </button>
             <button 
              onClick={() => setTarget('comedian')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase italic transition-all ${target === 'comedian' ? 'bg-red-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
             >
               Comedians
             </button>
             <button 
              onClick={() => setTarget('venue')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase italic transition-all ${target === 'venue' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
             >
               Venues
             </button>
             <button 
              onClick={() => setTarget('booker')}
              className={`px-6 py-3 rounded-xl text-xs font-black uppercase italic transition-all ${target === 'booker' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
             >
               Bookers
             </button>
          </div>
        </div>

        <div className={`grid gap-8 ${getGridCols()}`}>
          {plans[target].map((plan) => (
            <div key={plan.name} className={`relative glass-card p-10 rounded-[2.5rem] border-slate-800 flex flex-col transition-all hover:border-slate-600 ${plan.popular ? 'ring-2 ring-red-500 shadow-2xl shadow-red-500/10' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest italic">MOST POPULAR</div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase italic mb-2 tracking-tight">{plan.name}</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{plan.desc}</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-5xl font-black italic">${plan.price}</span>
                <span className="text-slate-500 font-bold uppercase text-xs">/ month</span>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map(f => (
                  <div key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] italic transition-all shadow-xl active:scale-95 ${plan.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
