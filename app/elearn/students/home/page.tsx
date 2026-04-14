'use client';

import { PageLayout } from '@/components/page-layout';
import { SectionWrapper } from '@/components/section-wrapper';
import { courses } from '@/lib/data/courses';
import Image from 'next/image';
import Link from 'next/link';
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  LayoutDashboard, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  ChevronRight,
  PlayCircle,
  FileText,
  Award,
  ShieldCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function StudentDashboardPage() {
  // Mock data for student
  const student = {
    name: 'Sarah Johnson',
    role: 'Medical Student',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    stats: [
      { label: 'Courses in Progress', value: '3', icon: <BookOpen size={20} /> },
      { label: 'Certificates Earned', value: '12', icon: <Trophy size={20} /> },
      { label: 'Learning Hours', value: '48h', icon: <Clock size={20} /> },
    ]
  };

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
    { name: 'My Courses', icon: <BookOpen size={18} />, active: false },
    { name: 'Certificates', icon: <Award size={18} />, active: false },
    { name: 'Resources', icon: <FileText size={18} />, active: false },
    { name: 'Settings', icon: <Settings size={18} />, active: false },
  ];

  return (
    <PageLayout>
      {/* Dashboard Header */}
      <div className="bg-[#001f3f] border-b border-white/10 pt-12 pb-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/4 h-full bg-[#facc15]/5 skew-x-12 translate-x-1/2"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full border-4 border-[#facc15] overflow-hidden shadow-lg">
                <Image src={student.avatar} alt={student.name} width={96} height={96} />
              </div>
              <div>
                <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Student Dashboard</p>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tighter">Welcome Back, {student.name.split(' ')[0]}</h1>
                <div className="h-1 w-20 bg-[#facc15] mt-4 mb-6"></div>
                <div className="flex items-center gap-2 text-[#facc15] font-semibold tracking-widest text-xs">
                  <span className="bg-[#facc15] text-[#001f3f] px-2 py-0.5 rounded text-[10px] uppercase">{student.role}</span>
                  <span>VMC ID: VMC-2026-8842</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
               <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-[#001f3f] rounded-none px-6 py-6 font-semibold tracking-widest text-[10px] uppercase">
                  Edit Profile
               </Button>
               <Button className="bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none px-6 py-6 font-semibold tracking-widest text-[10px] shadow-lg uppercase">
                  Quick Search <Search size={14} className="ml-2" />
               </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 mb-24 relative z-20">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
             <div className="bg-white shadow-lg p-4 border-b-8 border-[#facc15]">
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      className={`w-full flex items-center gap-4 px-6 py-4 text-xs font-semibold  tracking-widest transition-colors ${
                        item.active 
                          ? 'bg-[#001f3f] text-white' 
                          : 'text-gray-500 hover:bg-gray-50 hover:text-[#001f3f]'
                      } uppercase`}
                    >
                      {item.icon}
                      {item.name}
                    </button>
                  ))}
                  <button className="w-full flex items-center gap-4 px-6 py-4 text-xs font-semibold tracking-widest text-red-600 hover:bg-red-50 transition-colors mt-8 border-t border-gray-100 pt-8 uppercase">
                    <LogOut size={18} />
                    Logout
                  </button>
                </nav>
             </div>

             <div className="bg-[#001f3f] text-white p-8 shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-full h-full bg-[#facc15]/5 skew-x-12 translate-x-1/2 group-hover:translate-x-1/3 transition-transform"></div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 relative z-10">Academy Support</h3>
                <div className="h-1 w-12 bg-[#facc15] mb-4 relative z-10"></div>
                <p className="text-white/60 text-xs mb-6 relative z-10 leading-relaxed uppercase tracking-widest font-semibold">Having trouble with a course? Our technical team and instructors are here to help.</p>
                <Button className="w-full bg-[#facc15] hover:bg-white text-[#001f3f] rounded-none py-6 font-semibold tracking-widest text-[10px] relative z-10 shadow-lg uppercase">
                  Ask Instructor
                </Button>
             </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {student.stats.map((stat, i) => (
                <div key={i} className="bg-white p-8 shadow-lg border-l-4 border-[#facc15] flex flex-col justify-center">
                  <div className="text-gray-400 mb-2 flex justify-between items-center">
                    <span className="text-[10px] font-semibold tracking-widest uppercase">{stat.label}</span>
                    <div className="text-[#facc15]">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-semibold text-[#001f3f]">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Courses in Progress */}
            <div className="bg-white p-10 shadow-lg border-t-8 border-[#001f3f]">
               <div className="flex justify-between items-center mb-10">
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-[#facc15] tracking-widest mb-2 uppercase">Learning Path</p>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[#001f3f]">Courses In Progress</h2>
                    <div className="h-1 w-20 bg-[#facc15] mt-4"></div>
                  </div>
                  <Link href="/elearn/courses" className="text-[10px] font-semibold tracking-widest text-[#facc15] border-b-2 border-[#facc15] pb-1 uppercase">View All</Link>
               </div>

               <div className="space-y-8">
                  {courses.slice(0, 2).map((course, i) => (
                    <div key={course.id} className="group cursor-pointer">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="relative w-full md:w-48 aspect-video bg-gray-100 overflow-hidden shrink-0">
                          <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <PlayCircle className="text-[#facc15]" size={32} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] font-semibold text-[#facc15]  tracking-widest mb-1 uppercase">{course.category}</div>
                          <h3 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-4 leading-tight group-hover:text-[#facc15] transition-colors">{course.title}</h3>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div className="bg-[#facc15] h-full" style={{ width: i === 0 ? '75%' : '30%' }} />
                            </div>
                            <span className="text-xs font-semibold text-[#001f3f]">{i === 0 ? '75%' : '30%'}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Button variant="ghost" className="text-[#001f3f] hover:text-[#facc15] hover:bg-transparent uppercase">
                            <ChevronRight size={24} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Recent Activity / Announcements */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-white p-8 shadow-lg">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-6 flex items-center gap-3">
                    <Bell size={20} className="text-[#facc15]" /> Academy News
                  </h2>
                  <div className="h-1 w-12 bg-[#facc15] mb-6"></div>
                  <div className="space-y-6">
                    {[
                      { date: 'Apr 12', msg: 'New trauma care protocols released.' },
                      { date: 'Apr 10', msg: 'VMC Global Summit registration open.' },
                      { date: 'Apr 05', msg: 'System maintenance scheduled for Sunday.' },
                    ].map((news, i) => (
                      <div key={ news.msg} className="flex gap-4 items-start border-b border-gray-50 pb-4 last:border-0">
                        <div className="bg-gray-100 px-2 py-1 text-[10px] font-semibold text-[#001f3f] uppercase">{news.date}</div>
                        <p className="text-xs text-gray-500 font-medium leading-relaxed">{news.msg}</p>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="bg-[#facc15]/10 p-8 border-l-8 border-[#facc15] shadow-lg">
                  <h2 className="text-xl md:text-2xl font-semibold text-[#001f3f] mb-6">Learning Goals</h2>
                  <div className="h-1 w-12 bg-[#facc15] mb-6"></div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <div className="w-6 h-6 rounded-full bg-[#facc15] flex items-center justify-center shrink-0 mt-0.5">
                          <ShieldCheck size={14} className="text-[#001f3f]" />
                       </div>
                       <div>
                          <h4 className="text-lg md:text-xl font-semibold text-[#001f3f]">Weekly Target</h4>
                          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold">Complete 2 lessons by Friday.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 opacity-40">
                       <div className="w-6 h-6 rounded-full border-2 border-[#facc15] shrink-0 mt-0.5"></div>
                       <div>
                          <h4 className="text-lg md:text-xl font-semibold text-[#001f3f]">Assessment</h4>
                          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest font-semibold">Pass the trauma care exam.</p>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
