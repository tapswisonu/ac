'use client';

import React from 'react';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import ContactBar from './ContactBar';
import AnnouncementBar from './AnnouncementBar';
import Header from './Header';

export default function SiteHeader() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  
  // Hide the top bars when scrolled down past 50px
  const hideTopBars = scrollDirection === 'down' && isScrolled;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full pointer-events-none">
      {/* Top Bars Wrapper: Contact + Announcement */}
      <div 
        className="w-full absolute top-0 left-0 right-0 pointer-events-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: hideTopBars ? 'translateY(-100%)' : 'translateY(0%)'
        }}
      >
        <ContactBar />
        <AnnouncementBar />
      </div>

      {/* Main Navbar */}
      <div 
        className="w-full absolute left-0 right-0 pointer-events-auto transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          top: '88px', // Height of both top bars combined
          transform: hideTopBars ? 'translateY(-88px)' : 'translateY(0%)'
        }}
      >
        <Header isCompact={hideTopBars} />
      </div>
    </div>
  );
}
