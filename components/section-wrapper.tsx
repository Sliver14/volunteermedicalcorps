import React from 'react';

export function SectionWrapper({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
