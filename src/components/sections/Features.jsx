import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import { features } from '../../data/features'

const FeatureCard = ({ feature, index, row }) => {
  const { icon, title, description, imageUrl, extra, bgColor } = feature

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(108,60,225,0.12)] border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 md:h-56 lg:h-64 flex-shrink-0">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Icon overlay */}
        <div className={`absolute bottom-3 right-3 w-10 h-10 rounded-full ${bgColor} flex items-center justify-center text-xl shadow-lg border-2 border-white/20`}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed flex-1">
          {description}
        </p>
        {extra && (
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700 flex flex-wrap items-center gap-3 text-sm">
            {extra.author && (
              <span className="font-semibold text-[#6C3CE1]">{extra.author}</span>
            )}
            {extra.link && (
              <a 
                href="#" 
                className="text-[#6C3CE1] hover:underline flex items-center gap-1 text-sm"
              >
                {extra.link} <ArrowRight size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Features = () => {
  // Group features by layout
  const row1 = features.filter(f => f.layout === 'row1')
  const row2 = features.filter(f => f.layout === 'row2')
  const row3 = features.filter(f => f.layout === 'row3')

  return (
    <section id="features" className="py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block text-sm font-semibold text-[#6C3CE1] bg-purple-50 dark:bg-purple-900/30 px-5 py-1.5 rounded-full mb-4"
          >
            Discover Our Benefits & Features
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            Get Premium medical care <br />
            <span className="text-[#6C3CE1]">for your best health</span>
          </motion.h2>
        </div>

        {/* Row 1: Two horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {row1.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} row="row1" />
          ))}
        </div>

        {/* Row 2: One full-width card */}
        {row2.map((feature, index) => (
          <div key={feature.id} className="mb-6">
            <FeatureCard feature={feature} index={index} row="row2" />
          </div>
        ))}

        {/* Row 3: Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {row3.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} row="row3" />
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-[#6C3CE1] font-semibold hover:gap-3 transition-all duration-300 group"
          >
            Explore our most popular services
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

export default Features