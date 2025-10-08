import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCamera, FaHeart } from 'react-icons/fa';
import Gallery from '../Gallery';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Coding Session'
    },
    {
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
      alt: 'Development Environment'
    },
    {
      src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Design Process'
    },
    {
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      alt: 'Data Analysis'
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
      alt: 'Team Collaboration'
    },
    {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
      alt: 'Project Meeting'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Coffee Break'
    },
    {
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      alt: 'Creative Thinking'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-gradient-to-b from-white to-primary-50 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaCamera className="text-primary-500 text-3xl mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Thư Viện <span className="gradient-text">Làm Việc</span>
            </h2>
            <FaHeart className="text-red-500 text-2xl ml-4" />
          </motion.div>
          
          <motion.p
            className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Một cái nhìn thoáng qua về môi trường làm việc, quy trình sáng tạo và những khoảnh khắc truyền cảm hứng cho hành trình phát triển của tôi
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Gallery images={galleryImages} className="mb-8" />
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { number: '30+', label: 'Dự Án' },
            { number: '3+', label: 'Năm Kinh Nghiệm' },
            { number: '100%', label: 'Hài Lòng Khách Hàng' },
            { number: '24/7', label: 'Hỗ Trợ' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 glass-effect rounded-xl card-hover"
              whileHover={{ scale: 1.05 }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 1 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-dark-600 dark:text-dark-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
