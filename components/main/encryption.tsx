"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideInFromTop } from "@/lib/motion";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Loader2, Trophy, Target, Zap } from 'lucide-react';
import '../main/heatmap.css';
import { SkillsMasteryGrid } from './skills-mastery-grid';

interface Submission {
  date: string;
  count: number;
}

export const Encryption = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeetCodeSubmissions = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch('/api/leetcode-submissions');
        if (!response.ok) {
          throw new Error('Failed to fetch submissions');
        }
        
        const data = await response.json();
        setSubmissions(data);
      } catch (error) {
        console.error('Error fetching submissions:', error);
        setError('Failed to load submission data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeetCodeSubmissions();
    const interval = setInterval(fetchLeetCodeSubmissions, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="encryption" className="flex flex-col relative items-center justify-start min-h-screen w-full h-full -z-20 py-12">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[32px] font-medium text-center text-gray-200"
        >
          Problem Solving{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          DSA Journey
        </motion.div>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6 px-4 mt-16 z-20">
        {/* Top Section - Progress and Journey */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Progress Circle and Stats */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 backdrop-blur-sm h-full transform hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(13, 6, 24, 0.7), rgba(25, 12, 44, 0.5))',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 32px rgba(149, 97, 255, 0.05)',
                border: '1px solid rgba(149, 97, 255, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
                Skills Mastery
              </h3>
              <SkillsMasteryGrid />
            </motion.div>
          </div>

          {/* Right side - Algorithmic Journey */}
          <div className="w-full lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6 backdrop-blur-sm h-full transform hover:scale-[1.02] transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(13, 6, 24, 0.7), rgba(25, 12, 44, 0.5))',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 32px rgba(149, 97, 255, 0.05)',
                border: '1px solid rgba(149, 97, 255, 0.1)'
              }}
            >
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
                My Algorithmic Journey
              </h3>
              <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed space-y-2">
  <span className="text-cyan-400 mr-2">➤</span>
  Passionate about Data Structures and Algorithms, I excel in problem-solving through C++, solving challenges on platforms like LeetCode and GeekForGeeks.
</p>
<p className="text-gray-300 leading-relaxed space-y-2">
  <span className="text-cyan-400 mr-2">➤</span>
  I actively participate in coding contests, sharpening my analytical skills and learning to perform under pressure.
</p>
<p className="text-gray-300 leading-relaxed space-y-2">
  <span className="text-cyan-400 mr-2">➤</span>
  My consistent practice has built a solid foundation in algorithmic thinking and efficient coding.
</p>
<p className="text-gray-300 leading-relaxed space-y-2">
  <span className="text-cyan-400 mr-2">➤</span>
  Committed to growth, I stay updated with the latest technologies in software development.
</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-colors group">
                    <Trophy className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-purple-300/70 mb-1">Total Problems</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text">200+</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-indigo-500/10 hover:border-indigo-500/30 transition-colors group">
                    <Target className="w-6 h-6 text-indigo-400 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-indigo-300/70 mb-1">Active Days</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">70</div>
                  </div>
                  <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-cyan-500/10 hover:border-cyan-500/30 transition-colors group">
                    <Zap className="w-6 h-6 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm text-cyan-300/70 mb-1">Max Streak</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 text-transparent bg-clip-text">7</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Submission Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-4xl mx-auto rounded-2xl p-5 backdrop-blur-sm transform hover:scale-[1.01] transition-all duration-300"
          style={{
            background: 'linear-gradient(145deg, rgba(13, 6, 24, 0.7), rgba(25, 12, 44, 0.5))',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 32px rgba(149, 97, 255, 0.05)',
            border: '1px solid rgba(149, 97, 255, 0.1)'
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">
              Submission Activity
            </h3>
            {isLoading && (
              <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
            )}
          </div>
          <div className="w-full rounded-xl bg-black/40 p-6 backdrop-blur-md">
            {error ? (
              <div className="text-red-400 text-center py-4 font-medium">{error}</div>
            ) : (
              <div className="transform scale-105 origin-center">
                <CalendarHeatmap
                  startDate={new Date(new Date().setFullYear(new Date().getFullYear() - 1))}
                  endDate={new Date()}
                  values={submissions}
                  classForValue={(value) => {
                    if (!value) return 'color-empty';
                    return `color-github-${Math.min(4, Math.floor(value.count / 2))}`;
                  }}
                  titleForValue={(value) => {
                    if (!value) return 'No submissions';
                    return `${value?.count ?? 0} submissions on ${value?.date ?? 'unknown date'}`;
                  }}
                  showWeekdayLabels
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Background Video */}
      <div className="w-full flex items-start justify-center fixed top-0 left-0 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-screen object-cover opacity-30"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
