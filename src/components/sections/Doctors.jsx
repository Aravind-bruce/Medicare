import React from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, CheckCircle, Users } from 'lucide-react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { doctors } from '../../data/doctors'

const DoctorCard = ({ doctor, index }) => {
  const { name, specialty, rating, reviews, image, experience, available } = doctor

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow border border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-800 transition-all duration-300 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-purple-100 dark:border-purple-800 group-hover:border-purple-400 transition-colors duration-300">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {available && (
            <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full">
              <CheckCircle size={14} className="fill-current" />
            </div>
          )}
        </div>
        <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm text-[#6C3CE1] font-medium">{specialty}</p>
        <div className="mt-2 flex items-center gap-1 text-yellow-400">
          <Star size={16} className="fill-current" />
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{rating}</span>
          <span className="text-xs text-gray-400">({reviews} reviews)</span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Clock size={14} />
          <span>{experience} experience</span>
        </div>
        <div className="mt-4 w-full">
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
            available 
              ? 'bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400' 
              : 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400'
          }`}>
            {available ? 'Available Today' : 'Fully Booked'}
          </span>
        </div>
        <Button 
          variant={available ? 'primary' : 'ghost'} 
          size="sm" 
          className="mt-4 w-full"
          disabled={!available}
        >
          {available ? 'Book Appointment' : 'Join Waitlist'}
        </Button>
      </div>
    </motion.div>
  )
}

const Doctors = () => {
  return (
    <section id="doctors" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <SectionTitle
          subtitle="Collaborate with our best consultant by online"
          title="Meet Our Expert Doctors"
          description="Patients can consult with healthcare providers from the comfort of their homes, eliminating travel time and costs. Reduced waiting times."
          centered={true}
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id} doctor={doctor} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="primary" size="md" icon={<Users size={18} />}>
            View All Doctors
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}

export default Doctors