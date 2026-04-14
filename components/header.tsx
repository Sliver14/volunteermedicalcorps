'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Globe, Users, Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'What We Do', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Good Deeds', href: '/campaigns' },
        { name: 'Campaign', href: '/campaigns' },
        { name: 'Medical Projects', href: '/projects/medical' },
        { name: 'Humanitarian Projects', href: '/projects/humanitarian' },
        { name: 'VMC Academy', href: '/elearn' },
        { name: 'Earn VMC Rewards', href: '/rewards' },
      ]
    },
    { 
      name: 'Campaigns', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: '1 Million Smiles', href: '/campaigns/1-million-smiles' },
        { name: 'Global Hospital Outreach', href: '/campaigns/ghoc' },
        { name: 'Light of Hope', href: '/campaigns/light-of-hope' },
        { name: 'VMC Praying Medics', href: '/globalprayer' },
        { name: 'Medical Missions', href: '/missions' },
        { name: 'Summits & Conferences', href: '/events' },
      ]
    },
    { 
      name: 'Get Involved', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Volunteer', href: '/register' },
        { name: 'Volunteering Opportunities', href: '/volunteers' },
        { name: 'Fund Raising', href: '/donate' },
        { name: 'Pray with VMC', href: '/globalprayer' },
      ]
    },
    { 
      name: 'Media', 
      href: '#', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'News', href: '/blog' },
        { name: 'Blog', href: '/blog' },
        { name: 'Events', href: '/events' },
        { name: 'Photo Gallery', href: '/media/photos' },
        { name: 'Video Gallery', href: '/media/videos' },
      ]
    },
    { name: 'Live Stream', href: '/live' },
  ];

  const toggleMobileExpanded = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={cn(
        "bg-black text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 transition-all duration-300 ease-in-out relative z-30",
        isScrolled ? "-translate-y-full opacity-0 h-0" : "translate-y-0 opacity-100 h-10"
      )}>
        <div className="mx-auto max-w-7xl flex justify-between items-center text-[10px] md:text-[11px] font-semibold tracking-wider h-full">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Users size={14} className="text-[#facc15]" />
              <span className="hidden sm:inline">Join our Community Today!</span>
            </span>
          </div>
          
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative group">
              <button className="flex items-center gap-1 md:gap-1.5 hover:text-[#facc15] transition-colors py-1">
                <Globe size={13} className="text-[#facc15]" />
                <span className="hidden xs:inline">English</span>
                <span className="xs:hidden uppercase">En</span>
                <ChevronDown size={10} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 top-full mt-0 w-32 bg-[#001f3f] border border-white/10 shadow-2xl opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-[100]">
                <div className="py-2">
                  {['English', 'French', 'Spanish', 'Portuguese'].map((lang) => (
                    <button key={lang} className="block w-full text-left px-4 py-2 hover:bg-white/10 hover:text-[#facc15] transition-colors">
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <span className="text-white/30">|</span>
            <Link href="/login" className="hover:text-[#facc15] transition-colors">Log In</Link>
            <span className="text-white/30">|</span>
            <Link href="/register" className="hover:text-[#facc15] transition-colors">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "bg-white border-b border-gray-100 shadow-sm transition-all duration-300 relative z-20",
        isScrolled ? "-mt-10 h-20" : "h-20"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            <Link href="/" className="flex items-center gap-2 relative z-50">
              <Image src="/logo.png" alt="Logo" width={180} height={40} className="h-10 w-auto object-contain" priority />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center h-full">
              {navigation.map((item) => {
                const isActive = item.href === '/' 
                  ? pathname === '/' 
                  : (item.href !== '#' && pathname.startsWith(item.href)) || 
                    (item.dropdownItems?.some(sub => pathname === sub.href));

                return (
                  <div
                    key={item.name}
                    className="relative group h-full"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-5 h-full text-sm font-semibold transition-colors duration-200 tracking-tight ${
                        isActive ? 'bg-[#facc15] text-[#001f3f]' : 'text-[#001f3f]/80 hover:text-[#001f3f] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                    </Link>

                    {item.hasDropdown && (
                      <div className={`absolute left-0 top-full w-64 bg-white shadow-xl border-t-4 border-[#facc15] py-4 transition-all duration-300 z-50 ${
                        activeDropdown === item.name ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                      }`}>
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.href}
                            className={`block px-8 py-2.5 text-[13px] font-medium transition-colors ${
                              pathname === dropdownItem.href ? 'text-[#001f3f] bg-gray-50 font-semibold' : 'text-[#001f3f]/70 hover:text-[#001f3f] hover:bg-gray-50'
                            }`}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Button asChild className="bg-[#002855] hover:bg-[#001f3f] text-white rounded-none px-10 py-7 font-semibold tracking-wider uppercase text-[11px] shadow-lg transition-all active:scale-95">
                <Link href="/donate">Give Now</Link>
              </Button>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#001f3f] relative z-50">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-[#001f3f]/60 backdrop-blur-sm z-40 lg:hidden"
              />
              
              {/* Sidebar Content */}
              <motion.div 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col lg:hidden"
              >
                <div className="p-6 flex flex-col h-full overflow-y-auto">
                  <div className="flex justify-between items-center mb-10 pt-2">
                    <span className="text-lg font-bold text-[#001f3f] tracking-tight uppercase">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <X size={24} className="text-[#001f3f]" />
                    </button>
                  </div>

                  <div className="space-y-1 flex-grow">
                    {navigation.map((item) => (
                      <div key={item.name} className="border-b border-gray-50 last:border-0 overflow-hidden">
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className={cn(
                              "flex-grow py-4 text-[15px] font-semibold tracking-tight transition-colors uppercase",
                              pathname === item.href ? "text-[#facc15]" : "text-[#001f3f]"
                            )}
                          >
                            {item.name}
                          </Link>
                          {item.hasDropdown && (
                            <button 
                              onClick={() => toggleMobileExpanded(item.name)}
                              className="p-4 text-[#001f3f]/40 hover:text-[#001f3f] transition-colors"
                            >
                              {mobileExpanded === item.name ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                          )}
                        </div>
                        
                        <AnimatePresence>
                          {item.hasDropdown && mobileExpanded === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="bg-gray-50/50 rounded-lg mb-2"
                            >
                              <div className="py-2 pl-4 flex flex-col gap-1">
                                {item.dropdownItems?.map((sub) => (
                                  <Link 
                                    key={sub.name} 
                                    href={sub.href} 
                                    className={cn(
                                      "py-3 px-4 text-sm font-medium border-l-2 transition-all flex items-center justify-between group",
                                      pathname === sub.href 
                                        ? "text-[#facc15] border-[#facc15] bg-white shadow-sm" 
                                        : "text-gray-500 border-transparent hover:text-[#001f3f]"
                                    )}
                                  >
                                    {sub.name}
                                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Sidebar Footer - Utility Links */}
                  <div className="mt-8 space-y-4 pt-8 border-t border-gray-100">
                    <div className="grid grid-cols-2 gap-4">
                      <Link 
                        href="/login" 
                        className="flex items-center justify-center py-4 bg-gray-100 text-[#001f3f] font-bold text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors"
                      >
                        Log In
                      </Link>
                      <Link 
                        href="/register" 
                        className="flex items-center justify-center py-4 bg-gray-100 text-[#001f3f] font-bold text-xs tracking-widest uppercase hover:bg-gray-200 transition-colors"
                      >
                        Sign Up
                      </Link>
                    </div>
                    <Button asChild className="w-full bg-[#facc15] text-[#001f3f] hover:bg-[#002855] hover:text-white rounded-none py-7 font-bold tracking-widest uppercase shadow-lg shadow-[#facc15]/20">
                      <Link href="/donate">Give Now</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
