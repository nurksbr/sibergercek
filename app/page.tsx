'use client'

import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import BlogCards from './components/BlogCards'
import CTA from './components/CTA'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Matrix rain efekti sadece arka planda görüntülenecek, etkileşim almayacak */}
      <div className="fixed inset-0 pointer-events-none">
        <MatrixRain />
      </div>
      
      {/* İçerik katmanı - z-index ile en üstte */}
      <div className="relative z-30 w-full">
        <Navbar />
        <main className="relative z-20 w-full">
          <Hero />
          <Features />
          <BlogCards />
          <CTA />
        </main>
        <Footer />
      </div>
      
      {/* Overlay - tüm sayfa için - portal için gerekli */}
      <div id="page-overlay" className="fixed inset-0 z-20 pointer-events-none"></div>
    </div>
  )
}
