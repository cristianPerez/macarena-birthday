import { motion } from 'framer-motion'
import { fadeUp } from '../animations/variants'
import { event } from '../config/event'
import { RansomWord } from './typography/RansomWord'

type GuestGreetingProps = {
  guestName: string
}

export function GuestGreeting({ guestName }: GuestGreetingProps) {
  const macarenaName = event.fullName.split(' ')[0]

  return (
    <motion.section
      className="overflow-visible px-5 pt-7 pb-5 text-center"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl font-medium text-[#d66b8f] sm:text-2xl">
        Hola {guestName}
      </p>

      <div className="mx-auto mt-5 max-w-sm px-1">
        <p className="text-base leading-relaxed text-[#4a403c] sm:text-lg">
          Celebra con nosotros el primer cumpleaños de
        </p>
        <RansomWord
          text={macarenaName}
          size="lg"
          splitByWords
          className="mt-2 justify-center"
        />
      </div>
    </motion.section>
  )
}
