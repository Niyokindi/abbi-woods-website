"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import { AnimatePresence, motion } from "framer-motion";

const LAYLO_DROP_ID = "t6mFH";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeHostRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;
    const host = iframeHostRef.current;
    if (!host) return;

    const iframe = document.createElement("iframe");
    iframe.id = `laylo-drop-${LAYLO_DROP_ID}`;
    iframe.title = "Sign up for next show updates";
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("allow", "web-share");
    iframe.setAttribute("allowtransparency", "true");
    iframe.style.cssText =
      "width: 1px; min-width: 100%; max-width: 1000px; min-height: 500px; border: 0; display: block;";
    const customTitle = encodeURIComponent(
      "Sign up to not miss the next show, merch drop, and other exclusive content"
    );
    iframe.src = `https://embed.laylo.com?dropId=${LAYLO_DROP_ID}&color=FF0D00&minimal=false&theme=dark&background=transparent&customTitle=${customTitle}`;
    host.appendChild(iframe);

    return () => {
      iframe.remove();
    };
  }, [isModalOpen]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <Script src="https://embed.laylo.com/laylo-sdk.js" strategy="afterInteractive" />
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
            href="https://abbiwoods.myshopify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-5 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-widest text-white hover:bg-accent-hover transition-all duration-500"
          >
            Store
          </a>
          {/* <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="border border-white/20 px-5 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-widest text-white hover:border-accent hover:text-accent transition-all duration-500 cursor-pointer"
          >
            Next Show
          </button>
          <a
            href="https://linktr.ee/abbiwoodssocials?utm_source=linktree_profile_share&ltsid=267fc156-b4a3-4922-9d5e-300b871d7162"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-5 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-widest text-white hover:border-accent hover:text-accent transition-all duration-500"
          >
            Socials
          </a> */}
          <a
            href="https://linktr.ee/woodsworld"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 px-5 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-widest text-white hover:border-accent hover:text-accent transition-all duration-500"
          >
            Listen Now
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

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="next-show-modal-title"
          >
            <motion.div
              className="relative w-full max-w-lg bg-background border border-white/10 p-4 md:p-6"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close"
                className="absolute -top-10 right-0 text-white/80 hover:text-accent text-3xl leading-none cursor-pointer transition-colors"
              >
                ×
              </button>

              <p className="text-xs uppercase tracking-[0.25em] text-white mb-4 text-center">
                No upcoming shows right now
              </p>
              <div
                ref={iframeHostRef}
                className="rounded overflow-hidden bg-black"
              />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
