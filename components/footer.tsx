'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0a1428] text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?q=80&w=2070')] bg-cover bg-center opacity-20" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Logo and About Section */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <Link href="/" className="inline-block mb-8">
              <Image src="/logo.png" alt="Logo" width={180} height={40} className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-lg leading-relaxed text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
              The Volunteer Medical Corps is a global network of healthcare professionals committed to providing medical relief and support across communities, cultures, and countries.
            </p>

            <div>
              <p className="text-[#facc15] font-bold uppercase tracking-widest mb-4 text-sm">CONNECT WITH US:</p>
              <div className="flex justify-center lg:justify-start gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#facc15] hover:text-black rounded flex items-center justify-center transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-black rounded flex items-center justify-center transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded flex items-center justify-center transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-pink-600 rounded flex items-center justify-center transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#0a66c2] rounded flex items-center justify-center transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-[#facc15] text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Give Now', href: '/donate' },
                { name: 'Latest News', href: '/blog' },
                { name: 'Our Campaigns', href: '/campaigns' },
                { name: 'Become a Volunteer', href: '/register' },
                { name: 'Global Prayer', href: '/globalprayer' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                  >
                    <span className="text-[#facc15] group-hover:translate-x-1 transition-transform">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-[#facc15] text-2xl font-bold mb-6">Join The Newsletter</h3>
            
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Your email here..." 
                className="w-full bg-white text-gray-900 px-6 py-4 rounded placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
              />
              
              <button className="w-full bg-[#facc15] hover:bg-[#e5b800] text-black font-bold py-4 rounded transition-colors uppercase tracking-wider text-sm">
                SUBSCRIBE NOW
              </button>
            </div>

            <p className="text-emerald-400 text-sm mt-4 flex items-center gap-2 justify-center lg:justify-start">
              <span className="text-lg">✓</span> 
              Stay updated with our missions.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center">
              ♥
            </div>
            <p className="text-gray-400">
              © All right reserved 2026 Volunteer Medical Corps
            </p>
          </div>

          <div className="flex gap-6 text-gray-400">
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}