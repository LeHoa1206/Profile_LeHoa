import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaCode, FaPalette, FaRocket, FaUsers, FaHeart, FaLightbulb } from 'react-icons/fa';
import Image from '../Image';
import profileImg from '../../assets/images/profile.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  const values = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, scalable, and efficient code that follows best practices and industry standards.'
    },
    {
      icon: FaPalette,
      title: 'Beautiful Design',
      description: 'I believe in creating user interfaces that are not only functional but also visually appealing and intuitive.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'I optimize applications for speed and efficiency, ensuring the best possible user experience.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'I work well in teams and enjoy collaborating with designers, developers, and stakeholders.'
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'I am passionate about technology and continuously learning new skills and staying up-to-date.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'I love solving complex problems and finding creative solutions to challenging technical issues.'
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-primary-50 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-primary-200 dark:bg-primary-800 rounded-full opacity-10"
        style={{ y }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm a passionate developer who loves creating amazing digital experiences
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Profile Image */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
            <Image
              src={profileImg}
              alt="Lê Hòa"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
           />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <FaCode className="text-white text-2xl" />
              </motion.div>
            </motion.div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white">
                  Lê Hòa ! 
                </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
                Tôi là một lập trình viên full-stack đầy nhiệt huyết với hơn 3 năm kinh nghiệm trong việc tạo ra các giải pháp kỹ thuật số tạo nên sự khác biệt. Tôi chuyên về các công nghệ web hiện đại và yêu thích việc biến những vấn đề phức tạp thành những thiết kế đơn giản, đẹp mắt và trực quan.
              </p>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
               Khi không viết code, bạn có thể thấy tôi đang khám phá các công nghệ mới, đóng góp vào các dự án nguồn mở hoặc chia sẻ kiến ​​thức của mình với cộng đồng nhà phát triển. Tôi tin vào việc học hỏi liên tục và cập nhật các xu hướng mới nhất trong phát triển web.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 glass-effect rounded-xl card-hover"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 glass-effect rounded-xl card-hover group"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-dark-600 dark:text-dark-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <motion.a
            href="#contact"
            className="btn-primary inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>

      {/* Parallax Background */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary-100/50 to-transparent dark:from-dark-800/50"
        style={{ opacity }}
      />
    </section>
  );
};

export default About;
