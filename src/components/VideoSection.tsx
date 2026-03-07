"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="video" className="py-24 md:py-32 px-6" ref={sectionRef}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
            Behind the Scenes
          </p>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight uppercase">
            Exclusive Video
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 bg-surface">
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              playsInline
              loop
              onClick={togglePlay}
            >
              <source src="/videos/bts-website-video.mp4" type="video/mp4" />
            </video>

            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 cursor-pointer ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              onClick={togglePlay}
            >
              <div className="w-20 h-20 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm hover:border-accent hover:scale-110 transition-all duration-300">
                <svg
                  className="w-8 h-8 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
