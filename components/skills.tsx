"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const frontendSkills = [
    { name: "JavaScript", score: 98 },
    { name: "React.js", score: 92 },
    { name: "Next.js", score: 86 },
    { name: "TypeScript", score: 97 },
    { name: "HTML/CSS", score: 98 },
    { name: "React Native", score: 100 },
  ]

  const backendSkills = [
    { name: "Node.js", score: 94 },
    { name: "Express.js", score: 94 },
    { name: "MongoDB", score: 96 },
    { name: "SQL", score: 92 },
    { name: "GraphQL", score: 100 },
    { name: "Redis", score: 100 },
  ]

  const otherSkills = [
    { name: "Git/GitHub", score: 100 },
    { name: "REST API", score: 91 },
    { name: "Testing", score: 40 },
    { name: "Cloud Deployment", score: 100 },
    { name: "OOP", score: 98 },
    { name: "Problem Solving", score: 90 },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Through my education at Hacktiv8 and personal projects, I've developed a strong set of technical skills.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <SkillCard title="Frontend" skills={frontendSkills} variants={itemVariants} />
          <SkillCard title="Backend" skills={backendSkills} variants={itemVariants} />
          <SkillCard title="Other" skills={otherSkills} variants={itemVariants} />
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ title, skills, variants }) {
  return (
    <motion.div variants={variants}>
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 h-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
          <div className="space-y-6">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">{skill.score}%</span>
                </div>
                <Progress
                  value={skill.score}
                  className="h-2 bg-gray-200 dark:bg-gray-800"
                  indicatorClassName={`${
                    skill.score >= 90
                      ? "bg-gradient-to-r from-purple-500 to-pink-500"
                      : skill.score >= 70
                        ? "bg-purple-500"
                        : "bg-gray-500"
                  }`}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
