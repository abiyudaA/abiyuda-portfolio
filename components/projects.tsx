"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Define interfaces for type safety
interface LoginCredential {
  role: string;
  email: string;
  password: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
  period: string;
  loginCredentials?: LoginCredential[];
}

interface ProjectCardProps {
  project: Project;
  variants: any; // Using any for Framer Motion variants as they have complex typing
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState("all");

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

  const projects: Project[] = [
    {
      id: 1,
      title: "CRAND",
      description:
        "CRAND is a web app for pesantren / school database management.",
      image: "/images/crand.png",
      tags: [
        "Next.js",
        "MongoDB",
        "Express",
        "Node.js",
        "FaceApi.js",
        "Cloudinary",
      ],
      github: "https://github.com/abiyudaA/CRAND",
      demo: "https://crand-app.vercel.app/",
      category: "fullstack",
      period: "Mar 2025 - Apr 2025",
      loginCredentials: [
        { role: "Admin", email: "admin@pesantren.ac.id", password: "112233" },
        {
          role: "Teacher",
          email: "mahmud.ali@pesantren.ac.id",
          password: "teacher123",
        },
        {
          role: "Student",
          email: "ahmadfarhan@pesantren.id",
          password: "teacher123",
        },
      ],
    },
    {
      id: 4,
      title: "Chiropractive",
      description: "Chiropractic clinic web app for reservation",
      image: "/images/chiropractive.png",
      tags: [
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Midtrans",
        "Cloudinary",
      ],
      github: "https://github.com/abiyudaA/Chiropractive",
      demo: "https://chiropractive.vercel.app",
      category: "fullstack",
      period: "Mar 2025 - Apr 2025",
      loginCredentials: [
        { role: "Admin", email: "user1@mail.com", password: "123456" },
        { role: "Patient", email: "user2@mail.com", password: "123456" },
      ],
    },
    {
      id: 2,
      title: "Zalola",
      description: "A web based e-commerce application.",
      image: "/images/zalola.png",
      tags: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/abiyudaA/zalola",
      demo: "https://zalola-app.vercel.app/",
      category: "frontend",
      period: "Mar 2025 - Mar 2025",
    },
    {
      id: 3,
      title: "Youcube",
      description: "A mobile social media app linked into youtube video.",
      image: "/images/youcube.jpeg",
      tags: ["React Native", "Expo", "Firebase"],
      github: "https://github.com/abiyudaA/youcube",
      demo: "https://expo.dev/@abiyuda/youcube",
      category: "mobile",
      period: "Mar 2025 - Mar 2025",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each one represents
            different skills and technologies I've mastered.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["all", "frontend", "backend", "fullstack", "mobile"].map(
              (category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={
                    filter === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0"
                      : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                  }
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              )
            )}
          </div>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <motion.div variants={variants}>
      <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <CardContent className="p-6 flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {project.period}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>

          {project.loginCredentials && (
            <div className="mb-4">
              <h4 className="font-medium text-sm mb-2 text-gray-700 dark:text-gray-300">
                Login Credentials:
              </h4>
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                {project.loginCredentials.map((cred, idx) => (
                  <div key={idx} className="pb-1 last:pb-0">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {cred.role}:
                    </span>
                    <div className="pl-3">
                      <div>Email: {cred.email}</div>
                      <div>Password: {cred.password}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 gap-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="flex-1 gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
