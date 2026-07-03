"use client";

import { motion } from "framer-motion";
import { Brain, GitBranch, Database, Cpu, Link, Infinity } from 'lucide-react';
import styles from './mastery.module.css';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  proficiency: number;
  problems: number;
  color: string;
  isGrinding?: boolean;
  concepts?: string[];
}

interface PlatformButtonProps {
  href: string;
  className: string;
  children: React.ReactNode;
}

const PlatformButton = ({ href, className, children }: PlatformButtonProps) => {
  return (
    <div className="platform-button-wrapper">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      </motion.div>
    </div>
  );
};

const categories: SkillCategory[] = [
  {
    name: "Dynamic Programming",
    icon: <Brain className="w-6 h-6" />,
    proficiency: 85,
    problems: 30,
    color: "from-purple-500 to-purple-600",
    concepts: ["1D DP", "2D DP", "LCS"],
    isGrinding: true,
  },
  {
    name: "Trees & Graphs",
    icon: <GitBranch className="w-6 h-6" />,
    proficiency: 90,
    problems: 30,
    color: "from-cyan-500 to-cyan-600",
    concepts: ["DFS", "BFS", "Binary Trees"]
  },
  {
    name: "Arrays & Strings",
    icon: <Database className="w-6 h-6" />,
    proficiency: 95,
    problems: 75,
    color: "from-emerald-500 to-emerald-600",
    concepts: ["Two Pointers", "Sliding Window"]
  },
  {
    name: "Algorithms",
    icon: <Cpu className="w-6 h-6" />,
    proficiency: 88,
    problems: 50,
    color: "from-pink-500 to-pink-600",
    concepts: ["Sorting", "Searching", "Greedy"]
  },
  {
    name: "LinkedList",
    icon: <Link className="w-6 h-6" />,
    proficiency: 82,
    problems: 55,
    color: "from-blue-500 to-blue-600",
    concepts: ["Fast & Slow", "Reversal"],
    isGrinding: true
  },
  {
    name: "Recursion & Backtracking",
    icon: <Infinity className="w-6 h-6" />,
    proficiency: 78,
    problems: 40,
    color: "from-amber-500 to-amber-600",
    concepts: ["Tree Recursion", "Combinations"],
    isGrinding: true
  }
];

export const SkillsMasteryGrid = () => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={styles['skill-card']}
          >
            <div className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 p-4">
              <div 
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-all duration-300 rounded-2xl" 
                style={{ background: `linear-gradient(to bottom right, ${category.color})` }} 
              />
              
              {category.isGrinding && (
                <div className="absolute -top-1 -right-1 w-8 h-8">
                  <div className="absolute inset-0 animate-ping bg-green-500 rounded-full opacity-20" />
                  <div className="absolute top-2 right-2 w-4 h-4 bg-green-500 rounded-full" />
                </div>
              )}
              
              <div className="flex flex-col items-center text-center space-y-3">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`${styles['skill-icon']} p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white
                             shadow-lg transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(var(--tw-gradient-stops),0.3)]`}
                >
                  {category.icon}
                </motion.div>
                
                <h3 className={`${styles['skill-title']} text-sm font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300`}>
                  {category.name}
                </h3>
                
                <div className="w-full bg-black/30 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${category.proficiency}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500
                               group-hover:shadow-[0_0_10px_rgba(var(--tw-gradient-stops),0.5)]`}
                  />
                </div>
                
                <div className="relative min-h-[20px]">
                  <p className="text-xs text-gray-400 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-white font-semibold">{category.problems}+</span> problems solved
                  </p>
                  {category.concepts && (
                    <div className={`${styles['concepts-popup']} absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <p className="text-xs text-gray-300">
                        {category.concepts.join(" • ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className={styles.platformContainer}>
        <PlatformButton
          href="https://leetcode.com/u/anil123_0/"
          className={`${styles.platformButton} ${styles.leetcode}`}
        >
          LEETCODE
        </PlatformButton>
        <PlatformButton
          href="https://www.geeksforgeeks.org/user/anilpaj39t/"
          className={`${styles.platformButton} ${styles.geeksforgeeks}`}
        >
          GEEKSFORGEEKS
        </PlatformButton>
        <PlatformButton
          href="https://codeforces.com/profile/anil905"
          className={`${styles.platformButton} ${styles.codeforces}`}
        >
          CODEFORCES
        </PlatformButton>
      </div>
    </div>
  );
};

