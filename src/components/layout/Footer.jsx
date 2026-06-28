import React from 'react'
import { motion } from 'framer-motion'
import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, Apple, Play, ChevronRight 
} from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Services', href: '#' },
    { name: 'Doctors', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Careers', href: '#' },
  ]

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'FAQs', href: '#' },
  ]

  const socialIcons = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Instagram, label: 'Instagram' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Youtube, label: 'YouTube' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300">
      <div className="pt-16 pb-8">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-2 text-2xl font-bold text-white"
              >
                <span>💊</span>
                <span>Medi<span className="text-[#9B6BFF]">Care</span></span>
              </motion.div>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Bring your customer services the next level of excellence with premium healthcare solutions.
              </p>
              <div className="mt-6 flex gap-3">
                {socialIcons.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#6C3CE1] flex items-center justify-center transition-colors duration-300"
                      aria-label={item.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1"
                    >
                      <ChevronRight size={14} className="text-[#6C3CE1]" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2.5">
                {resources.map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-1"
                    >
                      <ChevronRight size={14} className="text-[#6C3CE1]" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our newsletter for health tips and updates.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#6C3CE1]"
                  />
                  <Button variant="primary" size="sm" className="rounded-l-none rounded-r-lg px-4">
                    Subscribe
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Apple size={20} />
                    <div>
                      <p className="text-[10px] text-gray-400">Download on</p>
                      <p className="text-xs font-semibold text-white">App Store</p>
                    </div>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <Play size={20} />
                    <div>
                      <p className="text-[10px] text-gray-400">Get it on</p>
                      <p className="text-xs font-semibold text-white">Google Play</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-gray-800 py-6">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} MediCare. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer