'use client'
import React, { useEffect, useState } from 'react'
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiGit,
  SiHtml5,
  SiBootstrap,
  SiPhp,
  SiFigma,
  SiNodedotjs,
  SiGithub,
} from 'react-icons/si'
import { motion } from 'framer-motion'

const abilitiesData = [
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNextdotjs, name: 'Next.js', color: '#fff' },
  { icon: SiTypescript, name: 'TypeScript', color: '#0000CD' },
  { icon: SiTailwindcss, name: 'TailwindCSS', color: '#38B2AC' },
  { icon: SiVuedotjs, name: 'Vue.js', color: '#4FC08D' },
  { icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
  { icon: SiPhp, name: 'PHP', color: '#777BB4' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss3, name: 'CSS3', color: '#1572B6' },
  { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: SiGit, name: 'Git', color: '#F05032' },
  { icon: SiGithub, name: 'GitHub', color: '#fff' },
]

const Abilities: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const mobileIconCount = Math.ceil(abilitiesData.length / 2)

  return (
    <section className="pt-10 w-full">
      <h2 className="text-blue-400 mb-10 text-center text-3xl font-bold sm:text-left">
        #Conhecimentos
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-7 gap-4 sm:gap-8 lg:gap-12">
        {abilitiesData
          .slice(0, isMobile ? mobileIconCount : abilitiesData.length)
          .map(({ icon: Icon, name, color }, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-r from-blue-900 to-blue-950 backdrop-blur-[4px] border border-green-500 border-opacity-10 rounded-lg flex items-center justify-center h-24 transition-transform duration-300 transform hover:rotate-3 hover:-translate-y-2 hover:shadow-lg p-2"
              style={{ perspective: '1000px' }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="group bg-gradient-to-r from-blue-900 to-blue-950 backdrop-blur-[4px] border border-green-500 border-opacity-10 rounded-lg w-full h-full flex items-center justify-center transition-transform duration-300 transform hover:rotate-3 hover:-translate-y-2 hover:shadow-lg">
                <Icon
                  className="text-5xl group-hover:transform group-hover:scale-110 transition-transform duration-300 ease-out"
                  style={{ color }}
                  title={name}
                />
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  )
}

export default Abilities
