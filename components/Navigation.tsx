'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-primary">Ygty</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors">Ana Sayfa</a>
              <a href="#about" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors">Hakkımda</a>
              <a href="#skills" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors">Yetenekler</a>
              <a href="#experiences" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors">Tecrübeler</a>
              <a href="#projects" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors">Projeler</a>
              <a href="#certificates" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors">Sertifikalar</a>
              <a href="#contact" className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-primary transition-colors">İletişim</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-300 hover:text-primary" 
                aria-label="Mobil menüyü aç"
              >
                <i className="fas fa-bars" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-t border-gray-700">
          <a 
            href="#home" 
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Ana Sayfa
          </a>
          <a 
            href="#about" 
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Hakkımda
          </a>
          <a 
            href="#skills" 
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Yetenekler
          </a>
          <a 
            href="#experiences" 
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Tecrübeler
          </a>
          <a 
            href="#projects" 
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Projeler
          </a>
          <a 
            href="#certificates" 
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary transition-colors"
          >
            Sertifikalar
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-primary transition-colors"
          >
            İletişim
          </a>
        </div>
      </div>
    </nav>
  )
}