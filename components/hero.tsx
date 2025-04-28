"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { isBrowser, getWindowDimensions } from "@/utils/client-utils";

export default function Hero() {
  const [dimensions, setDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (!isBrowser) return;

    function handleResize() {
      setDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
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
            className="absolute text-blue-400 text-opacity-20 text-xl sm:text-2xl"
          >
            {
              [
                "{}",
                "</>",
                "=>",
                "()=>",
                "[]",
                ".then()",
                "async",
                "import",
                "export",
              ][Math.floor(Math.random() * 9)]
            }
          </motion.div>
        ))}
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
          <div className="text-center md:text-left md:max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex md:justify-start justify-center mb-6"
            >
              <span className="px-4 py-1.5 bg-blue-950 rounded-full text-sm font-medium text-blue-300 border border-blue-800">
                Fullstack JavaScript Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            >
              Abiyuda Abdulhaq
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              Building modern web experiences with JavaScript, React, and
              Node.js. Recent graduate from Hacktiv8 Full Time Program with
              expertise in creating responsive and dynamic applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
              >
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-blue-700 hover:bg-blue-900/50"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-2xl border-2 border-blue-500/50 shadow-xl shadow-blue-500/30">
              <Image
                src="/images/profile.jpg"
                alt="Abiyuda Abdulhaq"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-blue-400/20 rounded-2xl"></div>
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
        <Link
          href="#about"
          className="flex flex-col items-center text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  );
}
