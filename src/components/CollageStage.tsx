import { motion } from 'framer-motion'
import { assets } from '../config/assets'

export function CollageStage() {
  return (
    <div className="relative mx-auto w-full max-w-[430px] px-3 pt-1 pb-4">
      <motion.img
        src={assets.invitation}
        alt="Invitación al primer cumpleaños de Maca"
        className="w-full"
        draggable={false}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />
    </div>
  )
}
