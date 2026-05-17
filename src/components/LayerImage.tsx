import { useState } from 'react'
import { motion, type MotionProps } from 'framer-motion'
import clsx from 'clsx'

type LayerImageProps = {
  src: string
  alt: string
  className?: string
  motionProps?: MotionProps
}

export function LayerImage({ src, alt, className, motionProps }: LayerImageProps) {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <motion.img
      src={src}
      alt={alt}
      className={clsx('pointer-events-none select-none', className)}
      onError={() => setVisible(false)}
      draggable={false}
      {...motionProps}
    />
  )
}
