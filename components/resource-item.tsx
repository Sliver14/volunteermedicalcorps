import React from 'react';
import { FileText, Download } from 'lucide-react';

interface ResourceProps {
  title: string;
  description: string;
  type: string;
  link: string;
}

export function ResourceItem({ title, description, type, link }: ResourceProps) {
  return (
    <div className="flex items-start md:items-center gap-4 p-6 bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-100">
      <div className="p-3 bg-white rounded-full text-[#002855] shadow-sm">
        <FileText size={24} />
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-black text-[#001f3f] mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="text-[10px] font-bold bg-[#facc15] text-[#001f3f] px-2 py-1 uppercase tracking-widest">{type}</span>
        <a href={link} className="p-2 text-gray-400 hover:text-[#001f3f] transition-colors" title="Download">
          <Download size={20} />
        </a>
      </div>
    </div>
  );
}
