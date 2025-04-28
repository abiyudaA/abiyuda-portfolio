"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              I'm a passionate Fullstack JavaScript Developer who recently
              graduated from Hacktiv8's Full Time Program. I love building web
              applications that are both functional and beautiful.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-100 dark:bg-purple-500/20 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Education</h3>
                </div>
                <div className="pl-16">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Hacktiv8 - Fullstack Javascript Bootcamp
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Graduated: April 11, 2025
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Predicate: Graduates
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Final Grade: 90.00% (A)
                    </p>
                  </div>
                </div>
                <div className="pl-16">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                      Politeknik Negeri Jakarta - English for Business and
                      Professional Communication
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Graduated: July 30, 2024
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Predicate: Cum Laude
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Final Grade: 3.60/4.00 GPA
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
