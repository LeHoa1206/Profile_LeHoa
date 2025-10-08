import React from 'react';
import { motion } from 'framer-motion';

const Avatar = ({ 
  src, 
  alt = 'Profile Picture', 
  size = 'large',
  className = '',
  ...props 
}) => {
  const sizeClasses = {
    small: 'w-16 h-16 text-lg',
    medium: 'w-24 h-24 text-2xl',
    large: 'w-32 h-32 text-4xl',
    xlarge: 'w-40 h-40 text-5xl'
  };

  const fallbackInitials = alt.split(' ').map(name => name[0]).join('').toUpperCase();

  return (
    <motion.div
      className={`${sizeClasses[size]} bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto flex items-center justify-center overflow-hidden ${className}`}
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <span 
        className="text-white font-bold"
        style={{ display: src ? 'none' : 'flex' }}
      >
        {fallbackInitials}
      </span>
    </motion.div>
  );
};

export default Avatar;
