import React, { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Companies from './components/sections/Companies'
import Doctors from './components/sections/Doctors'
import MedicalFeature from './components/sections/MedicalFeature'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact' // 👈 new

function App() {
  useEffect(() => {
    document.documentElement.classList.remove('dark')
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Companies />
        <Doctors />
        <MedicalFeature />
        <CTA />
        <Contact /> {/* 👈 placed before Footer */}
      </main>
      <Footer />
    </div>
  )
}

export default App