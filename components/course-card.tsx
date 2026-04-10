import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, User } from 'lucide-react';

interface CourseProps {
  id: string;
  title: string;
  description: string;
  instructor: string;
  lessons: number;
  image: string;
}

export function CourseCard({ id, title, description, instructor, lessons, image }: CourseProps) {
  return (
    <Link href={`/elearn/course/${id}`} className="group flex flex-col bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-xs font-bold text-gray-500 mb-4">
          <span className="flex items-center gap-1"><BookOpen size={14} className="text-[#facc15]"/> {lessons} Lessons</span>
          <span className="flex items-center gap-1"><User size={14} className="text-[#facc15]"/> {instructor}</span>
        </div>
        <h3 className="text-xl font-black text-[#001f3f] mb-2">{title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
      </div>
    </Link>
  );
}
