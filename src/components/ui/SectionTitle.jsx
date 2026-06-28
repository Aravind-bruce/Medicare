import React from 'react'
import { motion } from 'framer-motion'

const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block text-sm font-semibold text-[#6C3CE1] bg-purple-50 dark:bg-purple-900/30 px-4 py-1.5 rounded-full mb-4"
        >
          {subtitle}
        </motion.span>
      )}
      {title && (
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
        >
          {title}
        </motion.h2>
      )}
      {description && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle