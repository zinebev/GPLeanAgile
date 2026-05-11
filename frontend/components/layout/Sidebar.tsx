'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Projets', href: '/projects', icon: '📁' },
  { name: 'Tâches', href: '/tasks', icon: '✓' },
  { name: 'Équipe', href: '/team', icon: '👥' },
  { name: 'Calendrier', href: '/calendar', icon: '📅' },
  { name: 'Rapports', href: '/reports', icon: '📈' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
      {/* User Info */}
      <div className="mb-8 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            H
          </div>
          <div>
            <p className="font-semibold text-gray-800">Hajar</p>
            <p className="text-sm text-gray-600">Frontend Dev</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-8 left-4 right-4">
        <button className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition">
          <span className="text-xl">⚙️</span>
          <span className="font-medium">Paramètres</span>
        </button>
      </div>
    </aside>
  );
}
