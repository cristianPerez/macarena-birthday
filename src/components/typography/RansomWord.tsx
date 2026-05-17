import { motion } from 'framer-motion'
import clsx from 'clsx'
import { letterContainer, letterItem } from '../../animations/variants'

const tileStyles = [
  'bg-[#f4a5b8] text-[#2b2b2b] font-serif',
  'bg-[#9fd4a0] text-[#1f1f1f] font-sans',
  'bg-[#9ec5eb] text-[#1f1f1f] font-mono',
  'bg-[#f5d76e] text-[#2b2b2b] font-serif italic',
  'bg-[#f2a3a3] text-[#1f1f1f] font-sans font-bold',
  'bg-[#c5b3e8] text-[#1f1f1f] font-serif',
  'bg-[#ffd4a3] text-[#2b2b2b] font-sans',
  'bg-[#b8e0d2] text-[#1f1f1f] font-mono',
]

const rotations = ['-rotate-3', 'rotate-2', '-rotate-1', 'rotate-3', '-rotate-2', 'rotate-1']

type RansomWordProps = {
  text: string
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** Cada palabra en su propia fila; dentro de la palabra las letras no se parten */
  splitByWords?: boolean
}

const sizeClasses = {
  sm: 'text-xs px-1.5 py-0.5 min-w-[1.35rem]',
  md: 'text-sm px-2 py-1 min-w-[1.55rem]',
  lg: 'text-sm sm:text-base px-2 py-1 min-w-[1.7rem]',
  xl: 'text-base sm:text-lg px-2.5 py-1.5 min-w-[1.85rem]',
}

function LetterTiles({
  word,
  size,
  indexOffset = 0,
}: {
  word: string
  size: 'sm' | 'md' | 'lg' | 'xl'
  indexOffset?: number
}) {
  const letters = word.toUpperCase().split('')

  return (
    <>
      {letters.map((letter, index) => {
        const styleIndex = indexOffset + index
        return (
          <motion.span
            key={`${letter}-${styleIndex}`}
            variants={letterItem}
            className={clsx(
              'inline-flex shrink-0 items-center justify-center shadow-md leading-none',
              sizeClasses[size],
              tileStyles[styleIndex % tileStyles.length],
              rotations[styleIndex % rotations.length],
            )}
          >
            {letter}
          </motion.span>
        )
      })}
    </>
  )
}

export function RansomWord({
  text,
  className,
  size = 'md',
  splitByWords = false,
}: RansomWordProps) {
  const words = text.trim().split(/\s+/).filter(Boolean)
  const compactSize =
    size === 'lg' && words.some((word) => word.length > 10)
      ? 'md'
      : size === 'xl' && words.some((word) => word.length > 8)
        ? 'lg'
        : size

  if (splitByWords) {
    return (
      <motion.div
        className={clsx('flex w-full flex-col items-center gap-2 overflow-visible px-1', className)}
        variants={letterContainer}
        initial="hidden"
        animate="visible"
        aria-label={text}
      >
        {words.map((word, wordIndex) => (
          <motion.div
            key={`${word}-${wordIndex}`}
            className="flex max-w-full flex-nowrap justify-center gap-0.5 overflow-visible py-0.5 sm:gap-1"
            variants={letterContainer}
          >
            <LetterTiles word={word} size={compactSize} indexOffset={wordIndex * 4} />
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={clsx('flex flex-wrap justify-center gap-1 overflow-visible px-1 py-0.5', className)}
      variants={letterContainer}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      <LetterTiles word={text} size={compactSize} />
    </motion.div>
  )
}
