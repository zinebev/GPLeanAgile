'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Sera géré par auth plus tard

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              LeanAgile
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {isLoggedIn ? (
              <>
                <Link href="/dashboard" className="text-gray-700 hover:text-purple-600 transition">
                  Dashboard
                </Link>
                <Link href="/projects" className="text-gray-700 hover:text-purple-600 transition">
                  Projets
                </Link>
                <Link href="/team" className="text-gray-700 hover:text-purple-600 transition">
                  Équipe
                </Link>
                
                {/* User Menu */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    H
                  </div>
                  <button className="text-sm text-gray-700 hover:text-purple-600">
                    Déconnexion
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link href="/login" className="text-gray-700 hover:text-purple-600 transition">
                  Connexion
                </Link>
                <Link 
                  href="/register" 
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
                >
                  S'inscrire
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}