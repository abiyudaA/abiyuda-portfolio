"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { isBrowser, getWindowDimensions } from "@/utils/client-utils"

export default function Hero() {
  const [dimensions, setDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    if (!isBrowser) return

    function handleResize() {
      setDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Code symbols floating in background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * (isBrowser ? dimensions.width : 1000),
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: (isBrowser ? dimensions.height : 800) + 100,
              opacity: [0, 0.5, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 15 + Math.random() * 20,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
            }}
            className="absolute text-gray-700 text-opacity-20 text-xl sm:text-2xl"
          >
            {["{}", "</>", "=>", "()=>", "[]", ".then()", "async", "import", "export"][Math.floor(Math.random() * 9)]}
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="px-4 py-1.5 bg-gray-800 rounded-full text-sm font-medium text-purple-400 border border-gray-700">
              Fullstack JavaScript Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
          >
            Abiyuda Abdulhaq
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8"
          >
            Building modern web experiences with JavaScript, React, and Node.js. Recent graduate from Hacktiv8 Full Time
            Program with expertise in creating responsive and dynamic applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-gray-700 hover:bg-gray-800">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  )
}
