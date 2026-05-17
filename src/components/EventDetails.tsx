import { motion } from 'framer-motion'
import { event } from '../config/event'
import { fadeUp } from '../animations/variants'

export function EventDetails() {
  return (
    <motion.section
      className="px-5 pb-10 pt-1 text-center"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <p className="text-2xl font-semibold tracking-tight text-[#3f3a38]">{event.dateLabel}</p>
      <p className="mt-1 text-xl text-[#8a817c]">{event.timeLabel}</p>

      <div className="mt-4 space-y-1">
        <p className="text-lg font-medium text-[#d66b8f]">{event.venue}</p>
        {event.addressLines.map((line) => (
          <p key={line} className="text-sm leading-relaxed text-[#6f6762]">
            {line}
          </p>
        ))}
      </div>

      <motion.div
        className="mt-5 flex flex-wrap items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
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
      </motion.div>

      <p className="mt-5 text-xs text-[#9a908a]">¡Te esperamos con mucho cariño!</p>
    </motion.section>
  )
}
