'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Globe, Users, Plus, Minus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import Script from 'next/script';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Google Translate
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,fr,es,pt,de,zh-CN,hi,ar,bn,ru,ja,ur,id,tr',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };
  }, []);

  const handleLanguageChange = (langName: string, langCode: string) => {
    setCurrentLanguage(langName);
    
    // 1. Set the cookie for Google Translate (most reliable for cross-page)
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname}`;
    
    // 2. Trigger the widget if it's already loaded
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else {
      // 3. If widget isn't ready, a reload will force it to read the cookie
      window.location.reload();
    }
  };

  // Ensure menu closes on route change (for safety)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle manual close
  const closeMenu = () => setIsOpen(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const languages = [
    { name: 'English', code: 'en' },
    { name: 'Chinese', code: 'zh-CN' },
    { name: 'Hindi', code: 'hi' },
    { name: 'Spanish', code: 'es' },
    { name: 'French', code: 'fr' },
    { name: 'Arabic', code: 'ar' },
    { name: 'Bengali', code: 'bn' },
    { name: 'Portuguese', code: 'pt' },
    { name: 'Russian', code: 'ru' },
    { name: 'Japanese', code: 'ja' },
    { name: 'Urdu', code: 'ur' },
    { name: 'Indonesian', code: 'id' },
    { name: 'German', code: 'de' },
    { name: 'Turkish', code: 'tr' }
  ];

  const translations: Record<string, any> = {
    'English': { home: 'Home', whatwedo: 'What We Do', campaigns: 'Campaigns', involved: 'Get Involved', media: 'Media', live: 'Live Stream' },
    'Chinese': { home: '首页', whatwedo: '我们的工作', campaigns: '项目活动', involved: '参与其中', media: '媒体中心', live: '直播' },
    'Hindi': { home: 'होम', whatwedo: 'हम क्या करते हैं', campaigns: 'अभियान', involved: 'शामिल हों', media: 'मीडिया', live: 'लाइव स्ट्रीम' },
    'Spanish': { home: 'Inicio', whatwedo: 'Qué Hacemos', campaigns: 'Campañas', involved: 'Participar', media: 'Medios', live: 'En Vivo' },
    'French': { home: 'Accueil', whatwedo: 'Ce Que Nous Faisons', campaigns: 'Campagnes', involved: 'S\'impliquer', media: 'Médias', live: 'En Direct' },
    'Arabic': { home: 'الرئيسية', whatwedo: 'ماذا نفعل', campaigns: 'الحملات', involved: 'شارك معنا', media: 'المركز الإعلامي', live: 'البث المباشر' },
    'Portuguese': { home: 'Início', whatwedo: 'O Que Fazemos', campaigns: 'Campanhas', involved: 'Envolva-se', media: 'Mídia', live: 'Ao Vivo' },
    'German': { home: 'Startseite', whatwedo: 'Was Wir Tun', campaigns: 'Kampagnen', involved: 'Mitmachen', media: 'Medien', live: 'Live-Stream' },
    'Russian': { home: 'Главная', whatwedo: 'Наша деятельность', campaigns: 'Кампании', involved: 'Участвовать', media: 'Медиа', live: 'Прямой эфир' },
    'Japanese': { home: 'ホーム', whatwedo: '私たちの活動', campaigns: 'キャンペーン', involved: '参加する', media: 'メディア', live: 'ライブ配信' },
    'Urdu': { home: 'ہوم', whatwedo: 'ہم کیا کرتے ہیں', campaigns: 'مہمات', involved: 'شامل ہوں', media: 'میڈیا', live: 'لائیو سٹریم' },
    'Indonesian': { home: 'Beranda', whatwedo: 'Kegiatan Kami', campaigns: 'Kampanye', involved: 'Terlibat', media: 'Media', live: 'Siaran Langsung' },
    'Turkish': { home: 'Ana Sayfa', whatwedo: 'Neler Yapıyoruz', campaigns: 'Kampanyalar', involved: 'Katılın', media: 'Medya', live: 'Canlı Yayın' }
  };

  const t = translations[currentLanguage] || translations['English'];

  const navigation = [
    { name: t.home, href: '/' },
    { 
      name: t.whatwedo, 
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
      name: t.campaigns, 
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
      name: t.involved, 
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
      name: t.media, 
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
    { name: t.live, href: '/live' },
  ];

  const toggleMobileExpanded = (name: string) => {
    setMobileExpanded(mobileExpanded === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      <Script 
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
        strategy="afterInteractive" 
      />
      <div id="google_translate_element" className="hidden"></div>
      
      {/* Top Utility Bar */}
      <div className={cn(
        "bg-black text-white px-4 sm:px-6 lg:px-8 border-b border-white/10 transition-all duration-500 ease-in-out relative z-30 overflow-hidden",
        isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
      )}>
        <div className="mx-auto max-w-7xl flex justify-between items-center text-[10px] md:text-[11px] font-bold tracking-[0.15em] h-full uppercase">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Users size={14} className="text-[#facc15]" />
              <span className="hidden sm:inline">Join our Community</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1.5 hover:text-[#facc15] transition-colors py-1 outline-none group cursor-pointer">
                  <Globe size={13} className="text-[#facc15]" />
                  <span>{currentLanguage}</span>
                  <ChevronDown size={10} className="transition-transform group-data-[state=open]:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-black text-white border-white/10 min-w-[120px]">
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code} 
                    onClick={() => handleLanguageChange(lang.name, lang.code)}
                    className={cn(
                      "hover:bg-[#facc15] hover:text-black cursor-pointer text-[10px] font-bold uppercase tracking-widest py-2 px-4 transition-colors",
                      currentLanguage === lang.name ? "bg-[#facc15]/20 text-[#facc15]" : ""
                    )}
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-3">
              <Link href="/login" className="hover:text-[#facc15] transition-colors">Log In</Link>
              <span className="text-white/20">|</span>
              <Link href="/register" className="hover:text-[#facc15] transition-colors">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={cn(
        "bg-white border-b border-gray-100 transition-all duration-300 relative",
        isOpen ? "z-[110]" : "z-20",
        isScrolled ? "h-16 shadow-md" : "h-20"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex h-full items-center justify-between">
            <Link href="/" className="flex items-center shrink-0 relative z-50">
              <Image 
                src="/logo.png" 
                alt="Logo" 
                width={180} 
                height={40} 
                className={cn(
                  "transition-all duration-300 object-contain",
                  isScrolled ? "h-8 w-auto" : "h-10 md:h-12 w-auto"
                )} 
                priority 
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center h-full">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group h-full"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 px-4 xl:px-6 h-full text-[12px] font-bold tracking-widest uppercase transition-all duration-200",
                      (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) 
                      ? 'text-[#001f3f] bg-[#facc15]/10 border-b-2 border-[#facc15]' 
                      : 'text-[#001f3f]/70 hover:text-[#001f3f] hover:bg-gray-50'
                    )}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
                  </Link>
                  {/* ... Desktop Dropdown logic remains same ... */}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:flex bg-[#001f3f] hover:bg-[#002855] text-white rounded-none px-8 py-6 font-bold tracking-[0.2em] uppercase text-[10px] shadow-xl">
                <Link href="/donate">Give Now</Link>
              </Button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="lg:hidden p-3 text-[#001f3f] bg-gray-50 relative z-[120]"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidemenu - Improved Close Logic */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="absolute inset-0 bg-[#001f3f]/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 bottom-0 w-full xs:w-[320px] sm:w-[380px] bg-white shadow-2xl flex flex-col h-dvh"
            >
              <div className="p-6 flex flex-col h-full overflow-y-auto">
                <div className="flex justify-between items-center mb-10 shrink-0">
                  <span className="text-[12px] font-black tracking-[0.3em] text-[#001f3f] uppercase">Menu</span>
                </div>

                <div className="flex flex-col flex-grow">
                  {navigation.map((item) => (
                    <div key={item.name} className="border-b border-gray-100 last:border-0">
                      <div className="flex items-center justify-between">
                        {item.hasDropdown ? (
                          <button
                            onClick={() => toggleMobileExpanded(item.name)}
                            className={cn(
                              "flex-grow flex items-center justify-between py-5 text-[14px] font-bold tracking-widest uppercase transition-colors text-left",
                              mobileExpanded === item.name ? "text-[#facc15]" : "text-[#001f3f]"
                            )}
                          >
                            {item.name}
                            <div className="pr-4 text-[#001f3f]/30">
                              {mobileExpanded === item.name ? <Minus size={18} /> : <Plus size={18} />}
                            </div>
                          </button>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={closeMenu}
                            className={cn(
                              "flex-grow py-5 text-[14px] font-bold tracking-widest uppercase transition-colors",
                              pathname === item.href ? "text-[#facc15]" : "text-[#001f3f]"
                            )}
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                      
                      <AnimatePresence>
                        {item.hasDropdown && mobileExpanded === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-gray-50/80 overflow-hidden"
                          >
                            <div className="py-2 flex flex-col">
                              {item.dropdownItems?.map((sub) => (
                                <Link 
                                  key={sub.name} 
                                  href={sub.href} 
                                  onClick={closeMenu} // Closes sidebar on selection
                                  className="py-4 px-8 text-[11px] font-bold tracking-widest text-gray-500 hover:text-[#001f3f] flex items-center justify-between"
                                >
                                  {sub.name}
                                  <ArrowRight size={14} className="opacity-30" />
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10 space-y-4 shrink-0">
                  <div className="flex items-center justify-between mb-6 px-2">
                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Select Language</span>
                    <div className="flex gap-2">
                      {languages.slice(0, 3).map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang.name, lang.code)}
                          className={cn(
                            "px-3 py-2 text-[10px] font-bold uppercase tracking-widest border transition-colors",
                            currentLanguage === lang.name 
                              ? "bg-[#facc15] border-[#facc15] text-[#001f3f]" 
                              : "border-gray-200 text-gray-500 hover:border-[#facc15]"
                          )}
                        >
                          {lang.code}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2" onClick={closeMenu}>
                    <Link href="/login" className="flex items-center justify-center py-4 bg-gray-100 text-[#001f3f] font-bold text-[10px] tracking-widest uppercase">
                      Log In
                    </Link>
                    <Link href="/register" className="flex items-center justify-center py-4 bg-gray-100 text-[#001f3f] font-bold text-[10px] tracking-widest uppercase">
                      Sign Up
                    </Link>
                  </div>
                  <Button asChild onClick={closeMenu} className="w-full bg-[#facc15] text-[#001f3f] rounded-none py-8 font-black tracking-[0.2em] uppercase text-[12px]">
                    <Link href="/donate">Donate Now</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}