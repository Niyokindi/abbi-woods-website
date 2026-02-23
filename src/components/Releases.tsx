"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const releases = [
  {
    title: "TOO LATE",
    type: "Single",
    date: "2025",
    gradient: "from-rose-900/60 to-amber-900/60",
    listenUrl: "https://open.spotify.com/track/1lfQeVezs2zGqPUWrVhQ8c",
  },
  {
    title: "Scattered Bodies",
    type: "Single",
    date: "2025",
    gradient: "from-indigo-900/60 to-purple-900/60",
    listenUrl: "https://open.spotify.com/track/5iuSKKJcR7Nd4RdqP8GN9O",
  },
  {
    title: "HBD",
    type: "Single",
    date: "2025",
    gradient: "from-teal-900/60 to-emerald-900/60",
    listenUrl: "https://open.spotify.com/track/4pm4HsOqJFTvOSv5rhiNMD",
  },
];

export default function Releases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="music" className="py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
            Latest
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wider uppercase">
            Releases
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {releases.map((release, i) => (
            <motion.a
              key={release.title}
              href={release.listenUrl}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group block"
            >
              <div className="relative mb-4">
                <div
                  className={`aspect-square rounded-lg overflow-hidden bg-gradient-to-br ${release.gradient} border border-white/5`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-serif text-5xl text-white/10 tracking-widest uppercase select-none">
                      {release.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-accent/90 rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-background ml-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-2 rounded-xl bg-accent/0 group-hover:bg-accent/5 blur-xl transition-all duration-500 -z-10" />
              </div>
              <h3 className="font-serif text-lg tracking-wide group-hover:text-accent transition-colors duration-300">
                {release.title}
              </h3>
              <p className="text-sm text-muted mt-1">
                {release.type} &middot; {release.date}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
