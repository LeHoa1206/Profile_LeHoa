import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaCheck } from 'react-icons/fa';
import { useForm } from '../../hooks/useForm';
import { useContactForm } from '../../hooks/useAPI';
import Image from '../Image';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { sendMessage, loading: apiLoading, error: apiError, success } = useContactForm();

  const initialValues = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = 'Họ tên là bắt buộc';
    } else if (values.name.trim().length < 2) {
      errors.name = 'Họ tên phải có ít nhất 2 ký tự';
    }

    if (!values.email.trim()) {
      errors.email = 'Email là bắt buộc';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Vui lòng nhập địa chỉ email hợp lệ';
    }

    if (!values.subject.trim()) {
      errors.subject = 'Chủ đề là bắt buộc';
    } else if (values.subject.trim().length < 5) {
      errors.subject = 'Chủ đề phải có ít nhất 5 ký tự';
    }

    if (!values.message.trim()) {
      errors.message = 'Tin nhắn là bắt buộc';
    } else if (values.message.trim().length < 10) {
      errors.message = 'Tin nhắn phải có ít nhất 10 ký tự';
    }

    return errors;
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useForm(initialValues, validate);

  const onSubmit = async (formValues) => {
    try {
      await sendMessage(formValues);
      resetForm();
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'lehoa.dev@gmail.com',
      href: 'mailto:lehoa.dev@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Điện Thoại',
      value: '+84 123 456 789',
      href: 'tel:+84123456789'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Địa Chỉ',
      value: 'Hà Nội, Việt Nam',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20"
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
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Liên Hệ <span className="gradient-text">Với Tôi</span>
          </motion.h2>
          <motion.p
            className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Bạn có dự án trong tâm trí hay chỉ muốn trò chuyện? Tôi rất muốn nghe từ bạn. Hãy cùng tạo ra điều gì đó tuyệt vời!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <motion.div
                className="mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Contact"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-xl mb-6"
                />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Hãy Kết Nối
              </h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed mb-8">
                Tôi luôn quan tâm đến các cơ hội mới và dự án thú vị. 
                Dù bạn có câu hỏi hay chỉ muốn chào hỏi, hãy liên hệ với tôi!
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 glass-effect rounded-xl card-hover group"
                  whileHover={{ x: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                    <info.icon className="text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                Theo Dõi Tôi
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 1.2 }}
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-effect rounded-2xl p-8"
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              Gửi Tin Nhắn
            </h3>

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit);
            }} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Họ Tên *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                    errors.name && touched.name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-dark-200 dark:border-dark-700'
                  }`}
                  placeholder="Tên của bạn"
                />
                {errors.name && touched.name && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                    errors.email && touched.email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-dark-200 dark:border-dark-700'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && touched.email && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Chủ Đề *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 ${
                    errors.subject && touched.subject 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-dark-200 dark:border-dark-700'
                  }`}
                  placeholder="Chủ đề này về gì?"
                />
                {errors.subject && touched.subject && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Tin Nhắn *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 bg-white dark:bg-dark-800 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message && touched.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-dark-200 dark:border-dark-700'
                  }`}
                  placeholder="Hãy kể cho tôi về dự án của bạn..."
                />
                {errors.message && touched.message && (
                  <motion.p
                    className="text-red-500 text-sm mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-primary-300 text-white cursor-not-allowed'
                    : 'btn-primary'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span>Đang gửi...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Gửi Tin Nhắn</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
