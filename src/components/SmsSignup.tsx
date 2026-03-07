"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SmsSignup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/[0.03] to-background" />

      <div className="relative mx-auto max-w-2xl text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
            Stay Updated
          </p>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight uppercase mb-4">
            Never Miss a Drop
          </h2>
          <p className="font-heading text-muted mb-10 max-w-md mx-auto">
            Sign up to get notified about new music, shows, and exclusive
            content directly to your phone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Replace "abbiwoods" with the actual Laylo username */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://laylo.com/abbiwoods"
              width="100%"
              height="300"
              frameBorder="0"
              className="w-full"
            />
          </div>
          
          <p className="text-xs text-muted/60 mt-6 max-w-sm mx-auto leading-relaxed">
            By submitting my information, I agree to receive recurring automated
            messages to the contact information provided and to{" "}
            <a
              href="https://laylo.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-muted transition-colors"
            >
              Laylo&apos;s Terms of Service
            </a>
            ,{" "}
            <a
              href="https://laylo.com/cookies"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-muted transition-colors"
            >
              Cookie Policy
            </a>{" "}
            and{" "}
            <a
              href="https://laylo.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-muted transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
