"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/bts-website-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Image
            src="/images/logo.png"
            alt="Abbi Woods"
            width={500}
            height={500}
            className="w-80 md:w-[28rem] lg:w-[36rem] h-auto"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-5 md:mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <a
            href="https://linktr.ee/woodsworld"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-5 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-widest text-white hover:bg-accent-hover transition-all duration-500"
          >
            Listen Now
          </a>
          <a
            href="https://www.universe.com/events/summers-haus-season-2-vol-1-tickets-64WDLS?ref=AbbiWoods2026"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-5 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-widest text-white hover:border-accent hover:text-accent transition-all duration-500"
          >
            Next Show
          </a>
          <a
            href="https://linktr.ee/abbiwoodssocials?utm_source=linktree_profile_share&ltsid=267fc156-b4a3-4922-9d5e-300b871d7162"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-5 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-widest text-white hover:border-accent hover:text-accent transition-all duration-500"
          >
            Socials
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-3 md:mt-4 w-full max-w-md"
        >
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://laylo.com/abbiwoods/profile/embed?theme=dark&background=transparent"
              width="100%"
              height="300"
              frameBorder="0"
              title="Sign up for Abbi Woods updates"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
