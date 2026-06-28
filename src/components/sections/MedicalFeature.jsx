import React from 'react'
import { motion } from 'framer-motion'
import { Bell, Calendar, Pill, Activity, Heart, Brain, ArrowRight } from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'

const features = [
  { icon: Bell, title: 'Advanced medication reminders', color: 'bg-blue-50 text-blue-600' },
  { icon: Calendar, title: 'Smart appointment scheduling', color: 'bg-purple-50 text-purple-600' },
  { icon: Pill, title: 'Prescription management', color: 'bg-green-50 text-green-600' },
  { icon: Activity, title: 'Health activity tracking', color: 'bg-orange-50 text-orange-600' },
  { icon: Heart, title: 'Heart rate monitoring', color: 'bg-red-50 text-red-600' },
  { icon: Brain, title: 'Mental wellness support', color: 'bg-indigo-50 text-indigo-600' },
]

const MedicalFeature = () => {
  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                alt="Medical dashboard"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6C3CE1]/20 to-transparent" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Activity size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700">Real-time Monitoring</p>
                    <p className="text-xs text-gray-500">24/7 health tracking</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right – Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              subtitle="Additional Medical Features"
              title="Advanced Healthcare Tools"
              description="Cutting-edge tools designed to enhance your healthcare experience"
              centered={false}
              className="text-left"
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors duration-300 group cursor-default"
                  >
                    <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.title}
                    </span>
                  </motion.div>
                )
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8"
            >
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />}>
                Explore All Features
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default MedicalFeature