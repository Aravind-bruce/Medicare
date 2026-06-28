import React from 'react'
import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-[#6C3CE1] text-white hover:bg-[#5a2fc7] shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 focus:ring-purple-500',
    secondary: 'bg-white text-[#6C3CE1] border-2 border-[#6C3CE1] hover:bg-[#6C3CE1] hover:text-white focus:ring-purple-500',
    ghost: 'text-[#6C3CE1] hover:bg-purple-50 focus:ring-purple-500',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-3.5 text-lg rounded-lg',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  )
}

export default Button