import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-10 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="#home"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            >
              Abiyuda
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Fullstack JavaScript Developer</p>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://github.com/abiyuda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-900 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/abiyuda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-900 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:yudaabiabdulhaq@gmail.com"
              className="bg-gray-100 dark:bg-gray-900 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-6 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-pink-500" /> by Abiyuda Abdulhaq
          </p>
          <p className="mt-2">© {currentYear} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
