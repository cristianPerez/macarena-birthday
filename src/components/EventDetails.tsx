import { motion } from 'framer-motion'
import { event } from '../config/event'
import { fadeUp } from '../animations/variants'

export function EventDetails() {
  return (
    <motion.section
      className="flex flex-wrap items-center justify-center gap-3 px-5 pb-10 pt-4"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a
        href={event.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-[#3f3a38] px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-[#2b2725]"
      >
        Abrir en Maps
      </a>
      <a
        href={event.wazeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#d66b8f] bg-white/80 px-5 py-2.5 text-sm font-medium text-[#d66b8f] shadow-sm transition hover:bg-[#fff5f8]"
      >
        Abrir en Waze
      </a>
    </motion.section>
  )
}
