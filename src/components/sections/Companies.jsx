import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import Container from '../ui/Container'
import { companies } from '../../data/companies'

const Companies = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50 border-y border-gray-200 dark:border-gray-700">
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
            Trusted by 100+ Global top company connect with us
          </h3>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search your top global tech companies list or query for real-time data"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 pl-12 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C3CE1] focus:border-transparent transition-all duration-300 text-gray-700 dark:text-gray-300 text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          </div>
        </motion.div>

        {/* Staggered Card Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((company, index) => {
                const col = index % 5
                const offsetY = (col % 2 === 0) ? 0 : 16 // subtle diagonal stagger
                return (
                  <motion.div
                    key={company.id}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1, 
                      y: offsetY,
                      rotate: 0
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.04,
                      type: 'spring',
                      stiffness: 250,
                      damping: 25
                    }}
                    whileHover={{ 
                      scale: 1.06,
                      y: -8,
                      rotate: (col % 3 === 0) ? 1 : -1,
                      boxShadow: '0 20px 40px rgba(108,60,225,0.15)',
                      borderColor: '#6C3CE1',
                      transition: { duration: 0.2 }
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 p-4 flex flex-col items-center justify-center h-36 relative cursor-default"
                  >
                    <img
                      src={company.logoUrl}
                      alt={company.name}
                      className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        // If image fails, show company name instead
                        e.target.style.display = 'none'
                        const parent = e.target.parentElement
                        const fallback = parent.querySelector('.fallback-name')
                        if (fallback) fallback.style.display = 'block'
                      }}
                    />
                    <span className="fallback-name text-sm font-medium text-gray-700 dark:text-gray-300 text-center hidden">
                      {company.name}
                    </span>
                    <span className="mt-3 text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                      {company.name}
                    </span>
                    {/* Decorative line on hover */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6C3CE1] to-[#9B6BFF] rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                )
              })
            ) : (
              <div className="col-span-full text-center py-10 text-gray-500 dark:text-gray-400">
                No companies found matching your search
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}

export default Companies