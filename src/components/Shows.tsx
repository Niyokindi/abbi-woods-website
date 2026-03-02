"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const shows = [
  {
    date: "MAR 15",
    year: "2026",
    city: "Los Angeles, CA",
    venue: "The Troubadour",
    ticketUrl: "#",
  },
  {
    date: "MAR 22",
    year: "2026",
    city: "New York, NY",
    venue: "Mercury Lounge",
    ticketUrl: "#",
  },
  {
    date: "APR 05",
    year: "2026",
    city: "Nashville, TN",
    venue: "The Bluebird Cafe",
    ticketUrl: "#",
  },
  {
    date: "APR 18",
    year: "2026",
    city: "Chicago, IL",
    venue: "Lincoln Hall",
    ticketUrl: "#",
  },
  {
    date: "MAY 02",
    year: "2026",
    city: "Austin, TX",
    venue: "Mohawk",
    ticketUrl: "#",
  },
];

export default function Shows() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="shows" className="py-24 md:py-32 px-6 bg-surface/50">
      <div className="mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">
            On Tour
          </p>
          <h2 className="font-heading text-4xl md:text-6xl tracking-tight uppercase">
            Upcoming Shows
          </h2>
        </motion.div>

        <div>
          {shows.map((show, i) => (
            <motion.div
              key={`${show.date}-${show.venue}`}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-between py-6 border-b border-white/5 group hover:bg-white/[0.02] px-4 -mx-4 transition-colors duration-300"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <div className="text-center min-w-[60px]">
                  <p className="text-accent font-heading text-lg leading-tight">
                    {show.date}
                  </p>
                  <p className="text-xs text-muted">{show.year}</p>
                </div>
                <div>
                  <p className="font-medium">{show.city}</p>
                  <p className="text-sm text-muted">{show.venue}</p>
                </div>
              </div>
              <a
                href={show.ticketUrl}
                className="border border-white/20 px-5 py-2 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-all duration-300 shrink-0"
              >
                Tickets
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
