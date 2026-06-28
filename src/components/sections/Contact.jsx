import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react'
import Container from '../ui/Container'
import Button from '../ui/Button'

const Contact = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 md:h-96 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183840282997!2d-73.9878!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="rounded-2xl"
            />
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#6C3CE1]/5 to-transparent pointer-events-none" />
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center bg-gray-50 dark:bg-gray-800/50 p-8 md:p-10 rounded-2xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-block text-sm font-semibold text-[#6C3CE1] bg-purple-100 dark:bg-purple-900/30 px-5 py-1.5 rounded-full mb-4 w-fit"
            >
              📍 Get in Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Let's Connect
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
            >
              We're here to help you with any questions. Reach out to us anytime.
            </motion.p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#6C3CE1]" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Address</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">123 Health Street, New York, NY 10001</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#6C3CE1]" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#6C3CE1]" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">info@medicare.com</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#6C3CE1]" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Working Hours</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri: 9:00 AM – 6:00 PM</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg" icon={<Send size={18} />}>
                Send Message
              </Button>
              <Button variant="secondary" size="lg" icon={<MessageCircle size={18} />}>
                Chat Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Contact