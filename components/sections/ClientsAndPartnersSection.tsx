import React from 'react';
import { Box, Command, Codesandbox, Globe, Hexagon, Triangle, Activity, Wind, Sun, Moon, Landmark, Shield, Cpu, Cloud, Database, Layers } from 'lucide-react';

const clients = [
  { name: 'Acme Corp', icon: Box, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'GlobalTech', icon: Globe, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'Nexus', icon: Command, color: 'text-purple-600', bg: 'bg-purple-50' },
  { name: 'Synergy', icon: Activity, color: 'text-rose-600', bg: 'bg-rose-50' },
  { name: 'Vertex', icon: Triangle, color: 'text-orange-600', bg: 'bg-orange-50' },
  { name: 'Zenith', icon: Hexagon, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'Aero', icon: Wind, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { name: 'Lumina', icon: Sun, color: 'text-yellow-600', bg: 'bg-yellow-50' },
];

const partners = [
  { name: 'GovTrust', icon: Landmark, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { name: 'SecureNet', icon: Shield, color: 'text-blue-600', bg: 'bg-blue-50' },
  { name: 'CloudCore', icon: Cloud, color: 'text-sky-600', bg: 'bg-sky-50' },
  { name: 'DataSync', icon: Database, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { name: 'StackPro', icon: Layers, color: 'text-violet-600', bg: 'bg-violet-50' },
  { name: 'ComputeX', icon: Cpu, color: 'text-fuchsia-600', bg: 'bg-fuchsia-50' },
  { name: 'NovaOps', icon: Moon, color: 'text-slate-600', bg: 'bg-slate-100' },
  { name: 'Pinnacle', icon: Codesandbox, color: 'text-rose-600', bg: 'bg-rose-50' },
];

export default function ClientsAndPartnersSection() {
  const LogoCard = ({ item }: { item: any }) => (
    <div className="flex-shrink-0 w-56 h-20 mx-3 bg-white border border-slate-100 rounded-2xl flex items-center justify-center cursor-pointer group hover:border-slate-200 hover:shadow-lg hover:shadow-primary-500/5 transition-all duration-300">
      <div className="flex items-center gap-3 transition-transform duration-300 group-hover:scale-105">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg} ${item.color} group-hover:shadow-sm transition-all duration-300`}>
          <item.icon className="w-5 h-5" />
        </div>
        <span className="text-slate-700 font-bold text-lg tracking-wider group-hover:text-slate-900 transition-colors duration-300">
          {item.name}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-sm font-semibold text-secondary-500 uppercase tracking-wider mb-3">Our Network</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Trusted by Clients & Partners
        </h3>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg hover:text-slate-800 transition-colors">
          Join thousands of businesses and premium partners who rely on our platform for seamless corporate compliance.
        </p>
      </div>

      <div className="relative flex flex-col gap-10">
        {/* Transparent gradient masks for smooth fade effect at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        {/* Clients Row - Scrolling Left */}
        <div>
          <div className="pl-4 sm:pl-6 lg:pl-12 mb-4">
            <h4 className="text-sm font-medium text-slate-400 uppercase tracking-widest pl-2">Trusted by Clients</h4>
          </div>
          <div className="flex w-fit animate-announcement hover:[animation-play-state:paused]">
            {[...clients, ...clients].map((client, idx) => (
              <LogoCard key={`client-${idx}`} item={client} />
            ))}
          </div>
        </div>

        {/* Partners Row - Scrolling Right (Using direction-reverse if possible, else standard) */}
        <div className="mt-4">
          <div className="pr-4 sm:pr-6 lg:pr-12 mb-4 flex justify-end">
            <h4 className="text-sm font-medium text-slate-400 uppercase tracking-widest pr-2">Our Partners</h4>
          </div>
          <div className="flex w-fit animate-announcement hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
            {[...partners, ...partners].map((partner, idx) => (
              <LogoCard key={`partner-${idx}`} item={partner} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
