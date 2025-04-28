"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
};

interface SkillCardProps {
  title: string;
  skills: Skill[];
  variants: any;
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const frontendSkills = [
    { name: "JavaScript" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "HTML/CSS" },
    { name: "React Native" },
  ];

  const backendSkills = [
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
    { name: "SQL" },
    { name: "GraphQL" },
    { name: "Redis" },
  ];

  const otherSkills = [
    { name: "Git/GitHub" },
    { name: "REST API" },
    { name: "Testing" },
    { name: "Cloud Deployment" },
    { name: "OOP" },
    { name: "Problem Solving" },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Through my education at Hacktiv8 and personal projects, I've
            developed a strong set of technical skills.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <SkillCard
            title="Frontend"
            skills={frontendSkills}
            variants={itemVariants}
          />
          <SkillCard
            title="Backend"
            skills={backendSkills}
            variants={itemVariants}
          />
          <SkillCard
            title="Other"
            skills={otherSkills}
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ title, skills, variants }: SkillCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 h-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6 text-center">{title}</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {skills.map((skill: Skill) => (
              <Badge
                key={skill.name}
                variant="outline"
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-gray-800 dark:text-gray-200 border-purple-200 dark:border-purple-800 px-3 py-1 text-sm transition-all hover:scale-105"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
