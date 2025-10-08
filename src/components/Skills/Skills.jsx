import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt,
  FaFigma,
  FaMobile,
  FaCode,
  FaPalette,
  FaUsers,
  FaRocket
} from 'react-icons/fa';
import Image from '../Image';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      icon: FaReact,
      skills: [
        { name: 'React.js', level: 95, icon: FaReact, color: 'from-blue-400 to-blue-600' },
        { name: 'JavaScript', level: 92, icon: FaJs, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 88, icon: FaJs, color: 'from-blue-400 to-blue-600' },
        { name: 'HTML5', level: 95, icon: FaHtml5, color: 'from-orange-400 to-orange-600' },
        { name: 'CSS3/Tailwind', level: 93, icon: FaCss3Alt, color: 'from-blue-400 to-blue-600' },
        { name: 'Responsive Design', level: 90, icon: FaMobile, color: 'from-green-400 to-green-600' },
        { name: 'Next.js', level: 85, icon: FaReact, color: 'from-gray-400 to-gray-600' },
        { name: 'Vue.js', level: 80, icon: FaJs, color: 'from-green-400 to-green-600' },
      ]
    },
    tools: {
      title: 'Công Cụ & Framework',
      icon: FaGitAlt,
      skills: [
        { name: 'Git & GitHub', level: 90, icon: FaGitAlt, color: 'from-gray-400 to-gray-600' },
        { name: 'Webpack', level: 85, icon: FaCode, color: 'from-blue-400 to-blue-600' },
        { name: 'Figma', level: 88, icon: FaFigma, color: 'from-pink-400 to-pink-600' },
        { name: 'VS Code', level: 95, icon: FaCode, color: 'from-blue-400 to-blue-600' },
        { name: 'Chrome DevTools', level: 90, icon: FaCode, color: 'from-yellow-400 to-yellow-600' },
        { name: 'Testing (Jest)', level: 85, icon: FaJs, color: 'from-purple-400 to-purple-600' },
      ]
    },
    design: {
      title: 'UI/UX Design',
      icon: FaPalette,
      skills: [
        { name: 'UI Design', level: 88, icon: FaPalette, color: 'from-pink-400 to-pink-600' },
        { name: 'UX Research', level: 85, icon: FaUsers, color: 'from-blue-400 to-blue-600' },
        { name: 'Prototyping', level: 90, icon: FaMobile, color: 'from-green-400 to-green-600' },
        { name: 'Design Systems', level: 87, icon: FaPalette, color: 'from-purple-400 to-purple-600' },
        { name: 'Accessibility', level: 85, icon: FaUsers, color: 'from-orange-400 to-orange-600' },
        { name: 'Animation (Framer)', level: 82, icon: FaRocket, color: 'from-red-400 to-red-600' },
      ]
    }
  };

  const ProgressBar = ({ skill, index }) => {
    return (
      <motion.div
        className="space-y-2"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
              <skill.icon className="text-white text-sm" />
            </div>
            <span className="font-medium text-dark-900 dark:text-white">
              {skill.name}
            </span>
          </div>
          <span className="text-sm text-dark-600 dark:text-dark-300 font-medium">
            {skill.level}%
          </span>
        </div>
        <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: 'easeOut' }}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
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
            Kỹ Năng <span className="gradient-text">Của Tôi</span>
          </motion.h2>
          <motion.p
            className="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Đây là các công nghệ và công cụ tôi sử dụng để biến ý tưởng thành hiện thực
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {Object.entries(skillCategories).map(([key, category], index) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-primary-50 dark:hover:bg-dark-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 + 0.8 }}
            >
              <category.icon className="text-lg" />
              <span>{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Illustration */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Coding Workspace"
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="p-6 glass-effect rounded-xl card-hover">
                <ProgressBar skill={skill} index={index} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8">
            Kỹ Năng Bổ Sung
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Giải Quyết Vấn Đề',
              'Làm Việc Nhóm',
              'Quản Lý Dự Án',
              'Agile/Scrum',
              'Code Review',
              'Mentoring',
              'Viết Tài Liệu Kỹ Thuật',
              'UI/UX Design'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 + 1.4 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
