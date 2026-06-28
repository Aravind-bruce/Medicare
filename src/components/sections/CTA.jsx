import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const CTALinks = [
  { label: 'Medicare', icon: '🏥' },
  { label: 'Coverage', icon: '🛡️' },
  { label: 'Providers', icon: '👨‍⚕️' },
  { label: 'Solutions', icon: '💡' },
  { label: 'For Hospitals', icon: '🏨' },
]

const CTA = () => {
  return (
    <section 
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1920&q=80')`
      }}
    >
      {/* Overlay – dark purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C3CE1]/90 to-[#9B6BFF]/90 backdrop-blur-sm" />

      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />

      <Container>
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-sm font-semibold text-white/80 bg-white/20 px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
              📞 Get in Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Let's Connect with Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            Bring your customer services the next level of excellence with our premium healthcare solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {CTALinks.map((link, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.2)' }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium flex items-center gap-2 cursor-default transition-all duration-300"
              >
                <span>{link.icon}</span>
                {link.label}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button 
              variant="secondary" 
              size="lg" 
              icon={<Phone size={18} />}
              className="!bg-white !text-[#6C3CE1] hover:!bg-gray-100"
            >
              Call Us Now
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              icon={<ArrowRight size={18} />}
              className="!text-white hover:!bg-white/20 !border-white/30 !border-2"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80 text-sm"
          >
            <span className="flex items-center gap-2">
              <Phone size={16} /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <Mail size={16} /> info@medicare.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} /> 123 Health St, NYC
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default CTA