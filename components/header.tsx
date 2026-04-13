'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Globe, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'What we do', 
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
        { name: 'Photo gallery', href: '/media/photos' },
        { name: 'Video gallery', href: '/media/videos' },
      ]
    },
    { name: 'Live stream', href: '/live' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Utility Bar */}
      <div className="bg-[#001f3f] text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="mx-auto max-w-7xl flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Users size={14} className="text-[#facc15]" />
              Join our Community Today!
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="hover:text-[#facc15] transition-colors">Log In</Link>
            <span className="text-white/30">|</span>
            <Link href="/register" className="hover:text-[#facc15] transition-colors">Sign Up</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
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
                      className={`flex items-center gap-1 px-5 h-full text-sm font-bold transition-all duration-200 uppercase tracking-tight ${
                        isActive
                          ? 'bg-[#facc15] text-[#001f3f]'
                          : 'text-[#001f3f]/80 hover:text-[#001f3f] hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                      {item.hasDropdown && (
                        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                      )}
                    </Link>

                    {/* Enhanced Dropdown Menu */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute left-0 top-full w-64 bg-white shadow-2xl border-t-4 border-[#facc15] py-4 transition-all duration-300 z-50 ${
                          activeDropdown === item.name 
                            ? 'opacity-100 translate-y-0 visible' 
                            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
                        }`}
                      >
                        <div className="grid grid-cols-1">
                          {item.dropdownItems?.map((dropdownItem, index) => {
                            const isSubActive = pathname === dropdownItem.href;
                            return (
                              <Link
                                key={index}
                                href={dropdownItem.href}
                                className={`block px-8 py-2.5 text-[13px] font-medium transition-colors ${
                                  isSubActive 
                                    ? 'text-[#001f3f] bg-gray-50 font-bold' 
                                    : 'text-[#001f3f]/70 hover:text-[#001f3f] hover:bg-gray-50'
                                }`}
                              >
                                {dropdownItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <Button asChild className="bg-[#002855] hover:bg-[#001f3f] text-white rounded-none px-10 py-7 font-bold uppercase tracking-[0.15em] text-[11px] shadow-lg transition-transform active:scale-95">
                <Link href="/donate">Give Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#001f3f]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-10">
              <span className="text-2xl font-bold text-[#001f3f]">MENU</span>
              <button onClick={() => setIsOpen(false)}><X size={32} /></button>
            </div>
            <div className="space-y-4">
              {navigation.map((item) => {
                const isActive = item.href === '/' 
                  ? pathname === '/' 
                  : (item.href !== '#' && pathname.startsWith(item.href)) || 
                    (item.dropdownItems?.some(sub => pathname === sub.href));

                return (
                  <div key={item.name} className="border-b border-gray-100 pb-4">
                    <Link
                      href={item.href}
                      className={`text-xl font-bold uppercase tracking-tighter ${isActive ? 'text-[#facc15]' : 'text-[#001f3f]'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="mt-2 ml-4 flex flex-col gap-2">
                        {item.dropdownItems?.map((sub) => (
                          <Link 
                            key={sub.name} 
                            href={sub.href} 
                            className={`text-sm font-bold uppercase ${pathname === sub.href ? 'text-[#facc15]' : 'text-gray-500'}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-10">
               <Button asChild className="w-full bg-[#facc15] text-[#001f3f] hover:bg-[#002855] hover:text-white rounded-none py-8 font-bold uppercase tracking-widest">
                <Link href="/donate">Give Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}