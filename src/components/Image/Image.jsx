import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Image = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = '/api/placeholder/400/300',
  ...props 
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={imageError ? fallbackSrc : src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: imageLoaded ? 1 : 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        {...props}
      />
      
      {/* Loading placeholder */}
      {!imageLoaded && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-dark-200 to-dark-300 dark:from-dark-700 dark:to-dark-600 animate-pulse"
          initial={{ opacity: 1 }}
          animate={{ opacity: imageLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
};

export default Image;
