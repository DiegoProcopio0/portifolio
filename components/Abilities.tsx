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
  SiGithub
} from 'react-icons/si'
import { motion } from 'framer-motion'
import { Title } from './Title'

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
  { icon: SiGithub, name: 'GitHub', color: '#fff' }
]

export function Abilities() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  }

  const mobileIconCount = Math.ceil(abilitiesData.length / 2)

  return (
    <section className="w-full pt-10">
      <Title>Conhecimentos</Title>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 lg:grid-cols-5 lg:gap-12 2xl:grid-cols-7">
        {abilitiesData
          .slice(0, isMobile ? mobileIconCount : abilitiesData.length)
          .map(({ icon: Icon, name, color }, index) => (
            <motion.div
              key={index}
              className="group border-opacity-10 flex h-24 transform items-center justify-center rounded-lg border border-green-500 bg-gradient-to-r from-blue-900 to-blue-950 p-2 backdrop-blur-[4px] transition-transform duration-300 hover:-translate-y-2 hover:rotate-3 hover:shadow-lg"
              style={{ perspective: '1000px' }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <div className="group border-opacity-10 flex h-full w-full transform items-center justify-center rounded-lg border border-green-500 bg-gradient-to-r from-blue-900 to-blue-950 backdrop-blur-[4px] transition-transform duration-300 hover:-translate-y-2 hover:rotate-3 hover:shadow-lg">
                <Icon
                  className="text-5xl transition-transform duration-300 ease-out group-hover:scale-110 group-hover:transform"
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
