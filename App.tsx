
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ForComedians } from './components/ForComedians';
import { CorporatePage } from './components/CorporatePage';
import { ContactPage } from './components/ContactPage';
import { Leaderboards } from './components/Leaderboards';
import { OpportunityBoard } from './components/OpportunityBoard';
import { ScenesPage } from './components/ScenesPage';
import { HowToGetGigs } from './components/HowToGetGigs';
import { FanGettingStarted } from './components/FanGettingStarted';
import { OrganizerGettingStarted } from './components/OrganizerGettingStarted';
import { RevenueTicketing } from './components/RevenueTicketing';
import { DigitalEngagement } from './components/DigitalEngagement';
import { OrganizerManagementCenter } from './components/OrganizerManagementCenter';
import { UserDashboard } from './components/UserDashboard';
import { PostSpotModal } from './components/PostSpotModal';
import { PageType, UserRole } from './types';
import { Home as HomeIcon, Search, Calendar, User, Trophy, Briefcase, MapPin } from 'lucide-react';

const MobileBottomNav: React.FC<{ 
  currentPage: PageType; 
  navigateTo: (page: PageType) => void;
}> = ({ currentPage, navigateTo }) => {
  const items = [
    { icon: HomeIcon, label: 'Home', page: PageType.HOME },
    { icon: MapPin, label: 'Scenes', page: PageType.SCENES },
    { icon: Briefcase, label: 'Gigs', page: PageType.OPPORTUNITIES },
    { icon: Trophy, label: 'Leaders', page: PageType.LEADERBOARDS },
    { icon: User, label: 'Profile', page: PageType.DASHBOARD },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f1628]/95 backdrop-blur-lg border-t border-white/5 px-6 py-3 flex justify-between items-center">
      {items.map((item) => (
        <button
          key={item.page}
          onClick={() => navigateTo(item.page)}
          className={`flex flex-col items-center gap-1 transition-all flex-1 ${
            currentPage === item.page ? 'text-amber-500 scale-110' : 'text-[#8892a4]'
          }`}
        >
          <item.icon className="w-5 h-5" />
          <span className="text-[9px] font-bold uppercase tracking-tighter">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);
  const [initialTab, setInitialTab] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<UserRole>('fan');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const fullHash = window.location.hash.replace('#', '');
      const [page, tab] = fullHash.split(':');
      
      if (Object.values(PageType).includes(page as PageType)) {
        setCurrentPage(page as PageType);
        setInitialTab(tab || null);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage(PageType.HOME);
        setInitialTab(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageType, tab?: string) => {
    const newHash = tab ? `${page}:${tab}` : page;
    if (window.location.hash === `#${newHash}`) {
      // Manually trigger hashchange logic if already on the same hash
      const event = new HashChangeEvent('hashchange');
      window.dispatchEvent(event);
    } else {
      window.location.hash = newHash;
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case PageType.HOME:
        return <Home navigateTo={navigateTo} onPostSpot={() => setIsPostModalOpen(true)} initialTab={initialTab} />;
      case PageType.COMEDIANS:
        return <ForComedians navigateTo={navigateTo} />;
      case PageType.CORPORATE:
        return <CorporatePage navigateTo={navigateTo} />;
      case PageType.CONTACT:
        return <ContactPage />;
      case PageType.LEADERBOARDS:
        return <Leaderboards />;
      case PageType.OPPORTUNITIES:
        return <OpportunityBoard role={userRole} onPostSpot={() => setIsPostModalOpen(true)} />;
      case PageType.SCENES:
        return <ScenesPage navigateTo={navigateTo} initialTab={initialTab} />;
      case PageType.HOW_TO_GET_GIGS:
        return <HowToGetGigs />;
      case PageType.ORGANIZER_GETTING_STARTED:
        return <OrganizerGettingStarted />;
      case PageType.FAN_GETTING_STARTED:
        return <FanGettingStarted navigateTo={navigateTo} />;
      case PageType.REVENUE_TICKETING:
        return <RevenueTicketing />;
      case PageType.DIGITAL_ENGAGEMENT:
        return <DigitalEngagement />;
      case PageType.ORGANIZER_MANAGEMENT_CENTER:
        return <OrganizerManagementCenter />;
      case PageType.DASHBOARD:
        return <UserDashboard role={userRole} setRole={setUserRole} />;
      default:
        return <Home navigateTo={navigateTo} onPostSpot={() => setIsPostModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0e1a] text-white overflow-x-hidden">
      <Navbar 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
        onPostSpot={() => setIsPostModalOpen(true)}
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
      />
      <main className="flex-grow pb-24 lg:pb-0">
        {renderContent()}
      </main>
      <Footer navigateTo={navigateTo} />
      <MobileBottomNav 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
      />
      
      {isPostModalOpen && (
        <PostSpotModal onClose={() => setIsPostModalOpen(false)} />
      )}
    </div>
  );
}

export default App;
