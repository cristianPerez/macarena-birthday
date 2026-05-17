import { useMemo } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { assets, type InvitationVersion } from '../config/assets'
import { useInvitationVersion } from '../hooks/useInvitationVersion'

const cupcakeTopByVersion: Record<InvitationVersion, string> = {
  '1': '65%',
  '2': '50%',
}

function createCupcakeVariants(restTop: string): Variants {
  return {
    hidden: {
      top: '-18%',
      right: '2%',
      y: '-50%',
      scale: 0.55,
      opacity: 0,
    },
    landed: {
      top: restTop,
      right: '2%',
      y: '-50%',
      scale: 1,
      opacity: 1,
      transition: { duration: 1.35, ease: [0.22, 1, 0.36, 1] },
    },
    floating: {
      top: restTop,
      right: '2%',
      y: ['-50%', 'calc(-50% - 10px)', '-50%'],
      scale: 1,
      opacity: 1,
      transition: {
        y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      },
    },
  }
}

export function CupcakeEntrance() {
  const reduceMotion = useReducedMotion()
  const { version } = useInvitationVersion()
  const variants = useMemo(
    () => createCupcakeVariants(cupcakeTopByVersion[version]),
    [version],
  )

  return (
    <motion.img
      src={assets.cupcakeSvg}
      alt=""
      className="pointer-events-none absolute z-[60] w-[28%] select-none drop-shadow-lg"
      variants={variants}
      initial="hidden"
      animate={reduceMotion ? 'landed' : ['landed', 'floating']}
    />
  )
}
