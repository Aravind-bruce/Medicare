import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Calendar, Video, Pill } from 'lucide-react'
import Container from '../ui/Container'
import { heroData } from '../../data/heroData'

const Hero = () => {
  const { title, subtitle, ctaText, doctorImage, floatingCards } = heroData

  const iconMap = {
    '📱': <Calendar size={16} className="text-blue-500" />,
    '🎥': <Video size={16} className="text-purple-500" />,
    '💊': <Pill size={16} className="text-green-500" />,
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 md:pt-32 lg:pt-36 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 lg:pr-8 text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-sm font-semibold text-[#6C3CE1] bg-purple-100 dark:bg-purple-900/30 px-5 py-1.5 rounded-full mb-5"
            >
              ✨ {subtitle}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Get Premium
              <br />
              medical care
              <br />
              for your best
              <br />
              <span className="text-[#6C3CE1]">health</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <button className="px-8 py-3.5 bg-[#6C3CE1] text-white font-semibold rounded-lg hover:bg-[#5a2fc7] transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 flex items-center gap-2">
                {ctaText} <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3.5 bg-white text-[#6C3CE1] font-semibold rounded-lg border-2 border-[#6C3CE1] hover:bg-[#6C3CE1] hover:text-white transition-all duration-300 flex items-center gap-2">
                <Play size={18} /> Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-8 md:gap-12 justify-center lg:justify-start"
            >
              <div>
                <p className="text-3xl font-bold text-[#6C3CE1]">100+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Global Companies</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#6C3CE1]">50k+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Happy Patients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#6C3CE1]">98%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Satisfaction Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Doctor Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex-1 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Doctor Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img
                  src={doctorImage}
                  alt="Doctor"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl" />
              </div>

              {/* Floating Cards - with improved spacing */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                  className={`absolute ${card.position} bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-white/50 p-3 flex items-center gap-3 min-w-[110px] ${card.animation} hidden sm:flex`}
                  style={{
                    boxShadow: '0 12px 40px rgba(108,60,225,0.12)',
                  }}
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                    card.color === 'blue' ? 'bg-blue-50' :
                    card.color === 'purple' ? 'bg-purple-50' :
                    'bg-green-50'
                  }`}>
                    {iconMap[card.icon] || card.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{card.title}</p>
                    <p className="text-xs text-gray-500">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}

              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full px-6 py-2.5 shadow-lg border border-white/50"
              >
                <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                  ⭐ 4.9/5 · 500+ Reviews
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Background decorative blobs */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft" />
    </section>
  )
}

export default Hero